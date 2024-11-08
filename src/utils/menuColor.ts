export const menuColor = () => {
  const elementsWithToggleClass = document.querySelectorAll<HTMLElement>('[toggle-class-here]');
  const toggleScrollPosition = 100;

  function whereAreWeScroll() {
    const shouldAddClass = window.scrollY > toggleScrollPosition;

    elementsWithToggleClass.forEach((element) => {
      const toggleClass = element.getAttribute('toggle-class-here');
      if (toggleClass) {
        element.classList.toggle(toggleClass, shouldAddClass);
      }
    });
  }

  window.addEventListener('scroll', whereAreWeScroll);

  whereAreWeScroll();
};
