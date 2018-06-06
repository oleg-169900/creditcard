"use strict";

(function () {
    var toggles = document.querySelectorAll(".faq__toggle");
    var texts = document.querySelectorAll(".faq__text--answer");

    for (var j = 0; j < toggles.length; j++) {
      toggles[j].addEventListener("click", function() {
        var toggle = this;
        var text = this.parentNode.nextSibling.nextSibling;
          if (text.classList.contains("hidden")) {
            toggle.classList.add("faq__toggle--rotate")
            text.classList.remove("hidden");
          } else {
            toggle.classList.remove("faq__toggle--rotate")
            text.classList.add("hidden");
          }
      })
    }

    for (var i = 0; i < texts.length; i++) {
      texts[i].classList.remove("faq__text--nojs");
      texts[i].classList.add("hidden");
    }
})();
