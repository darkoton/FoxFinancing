const header = document.getElementById('header');
const menuBurger = document.getElementById('menuBurger');
const burgerOpen = document.getElementById('burgerOpen');
const burgerClose = document.getElementById('burgerClose');

// Tailwind CSS
function openMenu(value = undefined) {
  document.body.classList.toggle('overflow-hidden');
  menuBurger.toggleClasses(
    ['-translate-y-full', 'pointer-events-none', 'opacity-0'],
    value,
  );

  if (header.hasAttribute('data-fixed')) {
    header.toggleClasses(['bg-dark/60', 'backdrop-blur-[5px]'], value);
  }
}

// Native style
// function openMenu() {
//   document.body.classList.toggle('_lock-scroll');
//   openIcon.classList.toggle('active');
//   closeIcon.classList.toggle('active');
//   burgerMenu.classList.toggle('active');
//   burgerMenuBackdrop.classList.toggle('active');

//   if (header.hasAttribute('data-fixed')) {
//     header.classList.toggle('fixed');
//   }
// }

// burgerMenu.querySelectorAll('[data-anchor]').forEach(anchor => {
//   anchor.addEventListener('click', () => {
//     openMenu();
//   });
// });

burgerOpen.addEventListener('click', () => openMenu(false));
burgerClose.addEventListener('click', () => openMenu(true));
