export default function setCookie(
  name,
  value,
  days,
  path = "/",
  secure = false
) {
  let expires = "";

  // Set the expiration date if 'days' is provided
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Convert days to milliseconds
    expires = "; expires=" + date.toUTCString();
  }

  // Set secure flag if provided
  let secureFlag = secure ? "; Secure" : "";

  // Set the cookie
  document.cookie =
    name + "=" + (value || "") + expires + "; path=" + path + secureFlag;
  return true;
}
