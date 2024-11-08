"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/utils/footerYear.ts
  var footerYear = () => {
    const currentYearField = document.getElementById("current-year");
    if (!currentYearField)
      return;
    currentYearField.innerText = (/* @__PURE__ */ new Date()).getFullYear() + "";
  };

  // src/utils/menuBurger.ts
  var menuBurger = () => {
    document.addEventListener("DOMContentLoaded", () => {
      const burgerButton = document.querySelector("[data-burger-button]");
      const menuItems = document.querySelectorAll("[data-menu-item]");
      const menu = document.querySelector("[data-menu]");
      const breakpoint = 992;
      const toggleMenu = () => {
        if (menu && window.innerWidth <= breakpoint) {
          menu.classList.toggle("open");
        }
      };
      if (burgerButton)
        burgerButton.addEventListener("click", toggleMenu);
      menuItems.forEach((item) => {
        item.addEventListener("click", () => {
          if (window.innerWidth <= breakpoint && burgerButton) {
            burgerButton.click();
          }
        });
      });
      window.addEventListener("resize", () => {
        if (menu && window.innerWidth > breakpoint && menu.classList.contains("open")) {
          menu.classList.remove("open");
        }
      });
    });
  };

  // src/utils/menuColor.ts
  var menuColor = () => {
    const elementsWithToggleClass = document.querySelectorAll("[toggle-class-here]");
    const toggleScrollPosition = 100;
    function whereAreWeScroll() {
      const shouldAddClass = window.scrollY > toggleScrollPosition;
      elementsWithToggleClass.forEach((element) => {
        const toggleClass = element.getAttribute("toggle-class-here");
        if (toggleClass) {
          element.classList.toggle(toggleClass, shouldAddClass);
        }
      });
    }
    window.addEventListener("scroll", whereAreWeScroll);
    whereAreWeScroll();
  };

  // src/utils/sliderColors.ts
  var sliderColors = () => {
    const coloredSlider_el = document.querySelectorAll("[colored-slider]");
    if (coloredSlider_el && coloredSlider_el.length) {
      coloredSlider_el.forEach((swiperColored) => {
        if (swiperColored) {
          const currentColorPattern = swiperColored.getAttribute("colored-slider");
          const colors = currentColorPattern ? currentColorPattern.split(",").map((color) => color.trim()) : [];
          const allSwiperSlides = swiperColored.querySelectorAll(".swiper-slide");
          allSwiperSlides.forEach((slide, index) => {
            const colorIndex = index % colors.length;
            slide.style.backgroundColor = colors[colorIndex] || "";
          });
        }
      });
    }
  };

  // src/index.ts
  window.Webflow ||= [];
  window.Webflow.push(() => {
    footerYear();
    menuBurger();
    sliderColors();
    menuColor();
  });
})();
//# sourceMappingURL=index.js.map
