/* modal window */
//код написан при поддержке этого ролика https://www.youtube.com/watch?v=qoO1ZNi1LyI
export function popups() {
  const popupLinks = document.querySelectorAll(".js_popup-link");
  const body = document.querySelector("body");
  const lockPadding = document.querySelectorAll(".js_lock-padding"); //константа для сбора объектов, которым дать паддинг ширины скролла (например фиксированный header)

  let unlock = true;

  const timeout = 300;

  if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function (e) {
        const popupName = popupLink.getAttribute("href").replace("#", "");
        const curentPopup = document.getElementById(popupName);
        popupOpen(curentPopup, e.target);
        if (popupLink.classList.contains('js_popup-link')) {
          e.preventDefault(); //запрет перезагружать страницу
        }
      });
    }
  }

  const popupCloseIcon = document.querySelectorAll(".popup__close");
  if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
      const e1 = popupCloseIcon[index];
      e1.addEventListener("click", function (e) {
        popupClose(e1.closest(".popup")); //передача в функцию ближайшего родителя с классом 'popup'
        e.preventDefault(); //запрет перезагружать страницу
      });
    }
  }

  function popupOpen(curentPopup, curentButton) {
    if (curentPopup && unlock) {
      const popupActive = document.querySelector(".popup.open");
      if (popupActive) {
        popupClose(popupActive, false);
      } else {
        bodyLock();
      }
      curentPopup.classList.add("open");
      if (curentPopup.querySelector('.js_focus')) {
        setTimeout(() => {
          document.querySelector(".js_focus").focus();
        }, 200);
      }
      if (curentPopup.classList.contains('js_close')) {
        setTimeout(() => {
          popupClose(curentPopup)
        }, 2000);
      }
      curentPopup.addEventListener("click", function (e) {
        if (!e.target.closest(".popup__content")) {
          popupClose(e.target.closest(".popup"));
        }
      });
    }
  }

  function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
      popupActive.classList.remove("open");
      if (doUnlock) {
        bodyUnLock();
      }
    }
  }

  function bodyLock() {
    const lockPaddingValue =
      window.innerWidth - document.querySelector("body").offsetWidth + "px";

    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const e1 = lockPadding[index];
        e1.style.paddingRight = lockPaddingValue;
      }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add("lock");

    /*фикс ошибки, если во время действия анимации закрытия быстро пытаться открывать новую модалку*/
    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  function bodyUnLock() {
    setTimeout(function () {
      if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
          const e1 = lockPadding[index];
          e1.style.paddingRight = "0px";
        }
      }
      body.style.paddingRight = "0px";
      body.classList.remove("lock");
    }, timeout);

    /*фикс ошибки, если во время действия анимации закрытия быстро пытаться открывать новую модалку*/
    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  //закрытие модалки по escape
  if (document.querySelector(".popup.open")) {
    document.addEventListener("keydown", function (e) {
      if (e.which === 27) {
        const popupActive = document.querySelector(".popup.open");
        popupClose(popupActive);
      }
    });
  }

  //полифиллы
  (function () {
    //проверяем поддержку
    if (!Element.prototype.closest) {
      //реализуем
      Element.prototype.closest = function (css) {
        var node = this;
        while (node) {
          if (node.matches(css)) return node;
          else node = node.parentElement;
        }
        return null;
      };
    }
  })();
  (function () {
    //проверяем поддержку
    if (!Element.prototype.matches) {
      //определяем свойство
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector;
    }
  })();
}