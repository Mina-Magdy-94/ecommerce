function setCookie(cookieName, cookieValue, exdays) {
  const d = new Date();
  d.setDate(d.getDate() + exdays);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires;
}

function getCookie(cookieName) {
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    c = c.trimStart();
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function hasCookie(cookieName) {
  return getCookie(cookieName) !== "";
}

function deleteCookie(cookieName) {
  document.cookie = cookieName + "=;expires=Thu, 01 Jan 1970";
}
