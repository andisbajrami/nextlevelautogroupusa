/** FormSubmit endpoint — submissions email info@nextlevelautogroupusa.com */
export const SUBMIT_FORM_EMAIL = "info@nextlevelautogroupusa.com";
const SUBMIT_FORM_ENDPOINT = `https://formsubmit.co/ajax/${SUBMIT_FORM_EMAIL}`;

export class SubmitFormError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SubmitFormError";
  }
}

type SubmitOptions = {
  /** Email subject line shown in the inbox */
  subject: string;
  /** Extra fields not present as inputs (e.g. form_name) */
  extras?: Record<string, string>;
};

/**
 * Posts a form to FormSubmit so the dealership receives it by email.
 * Uses FormData so file uploads (e.g. driver's license) are supported.
 */
export async function submitSiteForm(form: HTMLFormElement, options: SubmitOptions): Promise<void> {
  const data = new FormData(form);

  data.set("_subject", options.subject);
  data.set("_template", "table");
  data.set("_captcha", "false");

  const email = data.get("email");
  if (typeof email === "string" && email.trim()) {
    data.set("_replyto", email.trim());
  }

  for (const [key, value] of Object.entries(options.extras ?? {})) {
    data.set(key, value);
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
