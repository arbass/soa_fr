export const menuBurger = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const burgerButton: HTMLDivElement | null = document.querySelector('[data-burger-button]');
    const menuItems = document.querySelectorAll('[data-menu-item]');
    const menu: HTMLDivElement | null = document.querySelector('[data-menu]');
    const breakpoint = 992; // Максимальное значение ширины экрана в пикселях

    const toggleMenu = () => {
      if (menu && window.innerWidth <= breakpoint) {
        menu.classList.toggle('open');
      }
    };

    if (burgerButton) burgerButton.addEventListener('click', toggleMenu);

    menuItems.forEach((item) => {
      item.addEventListener('click', () => {
        if (window.innerWidth <= breakpoint && burgerButton) {
          burgerButton.click();
        }
      });
    });

    window.addEventListener('resize', () => {
      if (menu && window.innerWidth > breakpoint && menu.classList.contains('open')) {
        menu.classList.remove('open');
      }
    });
  });
};
