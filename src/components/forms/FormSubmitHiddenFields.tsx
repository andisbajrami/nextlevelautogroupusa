/** Honeypot + hidden fields shared by every FormSubmit-backed form on the site. */
const FormSubmitHiddenFields = () => (
  <>
    <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
  </>
);

export default FormSubmitHiddenFields;
