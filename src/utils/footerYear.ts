export const footerYear = () => {
  const currentYearField = document.getElementById('current-year');

  if (!currentYearField) return;
  currentYearField.innerText = new Date().getFullYear() + '';
};
