  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const rejectBtn = document.getElementById("reject-cookies");

    if (getCookie("cookies_accepted") === "yes" || getCookie("cookies_accepted") === "no") {
      banner.style.display = "none";
    } else {
      banner.style.display = "block";
    }

    acceptBtn.onclick = function () {
      setCookie("cookies_accepted", "yes", 365);
      banner.style.display = "none";
      // Ovde možeš dodati npr. Google Analytics
    };

    rejectBtn.onclick = function () {
      setCookie("cookies_accepted", "no", 365);
      banner.style.display = "none";
      // Ovde možeš sprečiti učitavanje analitičkih skripti
    };
  });