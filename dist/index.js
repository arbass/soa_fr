"use strict";(()=>{var s=()=>{let e=document.getElementById("current-year");e&&(e.innerText=new Date().getFullYear()+"")};var i=()=>{document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("[data-burger-button]"),r=document.querySelectorAll("[data-menu-item]"),t=document.querySelector("[data-menu]"),o=992,l=()=>{t&&window.innerWidth<=o&&t.classList.toggle("open")};e&&e.addEventListener("click",l),r.forEach(n=>{n.addEventListener("click",()=>{window.innerWidth<=o&&e&&e.click()})}),window.addEventListener("resize",()=>{t&&window.innerWidth>o&&t.classList.contains("open")&&t.classList.remove("open")})})};var c=()=>{let e=document.querySelectorAll("[toggle-class-here]"),r=100;function t(){let o=window.scrollY>r;e.forEach(l=>{let n=l.getAttribute("toggle-class-here");n&&l.classList.toggle(n,o)})}window.addEventListener("scroll",t),t()};var d=()=>{let e=document.querySelectorAll("[colored-slider]");e&&e.length&&e.forEach(r=>{if(r){let t=r.getAttribute("colored-slider"),o=t?t.split(",").map(n=>n.trim()):[];r.querySelectorAll(".swiper-slide").forEach((n,u)=>{let a=u%o.length;n.style.backgroundColor=o[a]||""})}})};window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{s(),i(),d(),c()});})();
