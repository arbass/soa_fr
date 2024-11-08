export const sliderColors = () => {
  const coloredSlider_el = document.querySelectorAll<HTMLDivElement>('[colored-slider]');

  if (coloredSlider_el && coloredSlider_el.length) {
    coloredSlider_el.forEach((swiperColored) => {
      if (swiperColored) {
        const currentColorPattern = swiperColored.getAttribute('colored-slider');
        const colors = currentColorPattern
          ? currentColorPattern.split(',').map((color) => color.trim())
          : [];

        const allSwiperSlides = swiperColored.querySelectorAll<HTMLDivElement>('.swiper-slide');

        allSwiperSlides.forEach((slide, index) => {
          const colorIndex = index % colors.length;
          slide.style.backgroundColor = colors[colorIndex] || '';
        });
      }
    });
  }
};
