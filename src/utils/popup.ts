export const popup = () => {
  // Требование 1: При клике на элемент с атрибутом [form-popup-cta-trigger]
  const triggers = document.querySelectorAll<HTMLElement>('[form-popup-cta-trigger]');
  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const popup = document.querySelector<HTMLElement>('[form-popup-wrapper="form-fr"]');
      if (popup) {
        popup.style.display = 'flex';
      }
    });
  });

  // Требование 2: Показать элемент спустя 15 секунд после загрузки страницы
  setTimeout(function () {
    const discountPopup = document.querySelector<HTMLElement>(
      '[form-popup-wrapper="form-discount"]'
    );
    if (discountPopup) {
      discountPopup.style.display = 'flex';
    }
  }, 15000);

  // Требование 3: Закрытие всплывающего окна при клике на элементы закрытия
  const closeElements = document.querySelectorAll(
    '[form-popup-close-area], [form-popup-close-button]'
  );
  closeElements.forEach(function (element) {
    element.addEventListener('click', function () {
      const popupWrapper = element.closest<HTMLElement>('[form-popup-wrapper]');
      if (popupWrapper) {
        popupWrapper.style.display = 'none';
      }
    });
  });
};
