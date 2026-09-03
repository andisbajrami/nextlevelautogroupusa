/** All website forms submit to this inbox via FormSubmit (formsubmit.co). */
export const SUBMIT_FORM_EMAIL = "info@nextlevelautogroupusa.com";
const SUBMIT_FORM_ENDPOINT = `https://formsubmit.co/ajax/${SUBMIT_FORM_EMAIL}`;

export class SubmitFormError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SubmitFormError";
  }
}

export type SubmitFormOptions = {
  /** Email subject line */
  subject: string;
  /** Identifies which form was submitted (shown in the email body) */
  formName: string;
};

/**
 * Posts a form to FormSubmit so the dealership receives every field by email.
 * Supports file uploads (multipart) — used for financing driver's license, etc.
 */
export async function submitSiteForm(form: HTMLFormElement, options: SubmitFormOptions): Promise<void> {
  const data = new FormData(form);

  // FormSubmit control fields — destination is the endpoint URL; these enrich the email.
  data.set("_subject", options.subject);
  data.set("_template", "table");
  data.set("_captcha", "false");

  const email = data.get("email");
  if (typeof email === "string" && email.trim()) {
    data.set("_replyto", email.trim());
  }

  // Metadata so every submission is easy to identify in the inbox.
  data.set("destination_email", SUBMIT_FORM_EMAIL);
  data.set("form_name", options.formName);
  data.set("page_url", window.location.href);
  data.set("submitted_at", new Date().toLocaleString("en-US", { timeZone: "America/New_York" }));

  // Include empty text fields so the email table shows the full form layout.
  for (const el of Array.from(form.elements)) {
    if (!(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement || el instanceof HTMLSelectElement)) {
      continue;
    }
    if (!el.name || el.name.startsWith("_")) continue;
    if (el instanceof HTMLInputElement && (el.type === "file" || el.type === "submit" || el.type === "button")) {
      continue;
    }
    if (!data.has(el.name)) {
      data.set(el.name, "");
    }
  }

  let response: Response;
  try {
    response = await fetch(SUBMIT_FORM_ENDPOINT, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
  } catch {
    throw new SubmitFormError("Network error — please check your connection and try again.");
  }

  let payload: { success?: string | boolean; message?: string } | null = null;
  try {
    payload = (await response.json()) as { success?: string | boolean; message?: string };
  } catch {
    payload = null;
  }

  const successFlag = payload?.success;
  const succeeded =
    response.ok &&
    (successFlag === true ||
      successFlag === "true" ||
      (typeof successFlag === "string" && /success/i.test(successFlag)) ||
      (payload == null && response.status >= 200 && response.status < 300));

  if (!succeeded) {
    const message =
      (typeof payload?.message === "string" && payload.message) ||
      "Something went wrong sending your request. Please try again or call us.";
    throw new SubmitFormError(message);
  }
}
