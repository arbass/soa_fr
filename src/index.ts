import { footerYear } from '$utils/footerYear';
import { menuBurger } from '$utils/menuBurger';
import { menuColor } from '$utils/menuColor';
import { popup } from '$utils/popup';
import { sliderColors } from '$utils/sliderColors';

window.Webflow ||= [];
window.Webflow.push(() => {
  footerYear();
  menuBurger();
  sliderColors();
  menuColor();
  popup();
});
