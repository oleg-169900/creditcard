"use strict";

(function () {
    var listServices = document.querySelector(".services__list");
    var listType = document.querySelector(".type__list");
    var listElemsServices = document.querySelectorAll(".services__item");
    var listElemsType = document.querySelectorAll(".type__item");

    var servicesArrowLeft = document.querySelector(".services__inner  .slider__arrow--left");
    var servicesArrowRight = document.querySelector(".services__inner  .slider__arrow--right");
    var typeArrowLeft = document.querySelector(".type__inner  .slider__arrow--left");
    var typeArrowRight = document.querySelector(".type__inner  .slider__arrow--right");

    var widthServicesItem = 270;
    var widthTypeItem = 550;

    var units = "px";
    var position = 0;
    var countServicesItem = 4;
    var countTypeItem = 3;


    servicesArrowLeft.onclick = function() {
      position = Math.min(position + widthServicesItem * countServicesItem, 0)
      listServices.style.marginLeft = position + units;
    };

    servicesArrowRight.onclick = function() {
      position = Math.max(position - widthServicesItem * countServicesItem, -widthServicesItem * (listElemsServices.length - countServicesItem));
      listServices.style.marginLeft = position + units;
    };

    typeArrowLeft.onclick = function() {
      position = Math.min(position + widthTypeItem * countTypeItem, 0)
      listType.style.marginLeft = position + units;
    };

    typeArrowRight.onclick = function() {
      position = Math.max(position - widthTypeItem * countTypeItem, -widthTypeItem * (listElemsType.length - countTypeItem));
      listType.style.marginLeft = position + units;
    };
})();
