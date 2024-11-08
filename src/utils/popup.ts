export const popup = () => {
  // Требование 1: Открытие всплывающего окна при клике на триггер с атрибутом form-popup-cta-trigger
  const triggers = document.querySelectorAll<HTMLElement>('[form-popup-cta-trigger]');
  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const popupName = trigger.getAttribute('form-popup-cta-trigger');
      if (popupName) {
        const popup = document.querySelector<HTMLElement>(`[form-popup-wrapper="${popupName}"]`);
        if (popup) {
          popup.style.display = 'flex';
        }
      }
    });
  });

  // Требование 2: Показать discount popup спустя 15 секунд после загрузки страницы
  setTimeout(() => {
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
  closeElements.forEach((element) => {
    element.addEventListener('click', () => {
      const popupWrapper = element.closest<HTMLElement>('[form-popup-wrapper]');
      if (popupWrapper) {
        popupWrapper.style.display = 'none';
      }
    });
  });
};
