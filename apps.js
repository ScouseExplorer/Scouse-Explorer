const menu = document.querySelector('#mobile-menu')
const menulinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

// Display Mobile Menu
const mobilemenu = () => {
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')
}

menu.addEventListener('click',mobilemenu);

// show active menu when scrolling
const highlightmenu = () => {
  const elem = document.querySelector('.highlight')
  const homeMenu = document.querySelector('#home-page')
  const aboutMenu = document.querySelector('#about-page')
  const servicesMenu = document.querySelector('#services-page')
  let scrollpos = window.scrollY
  console.log(scrollpos)
  //adds 'highlight' class to my menu items
  if(window.innerWidth > 960 && scrollpos < 900){
    homeMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    return;
  } else if (window.innerWidth > 960 && scrollpos < 1400) {
    aboutMenu.classList.add ('highlight')
    homeMenu.classList.remove (highlight)
    servicesMenu.classList.remove(highlight)
    return;
  }else if (window.innerWidth > 960 && scrollpos < 2345) {
    servicesMenu.classList.add(highlight)
    aboutMenu.classList.remove('highlight')
    return;
  }

  if((elem && window.innerWidth<960 && scrollpos < 600) || elem)  {
     elem.classList.remove('highlight')
  }
};

window.add.addEventListener('scroll, highlightmenu')
window.add.addEventListener('click, highlightmenu')

// Close mobile menu when clicking on a menu item
const hidemobilemenu = () => {
  const menuBars = document.querySelector('.is-active')
  if(window.innerwidth <= 768 && menuBars) {
    menu.classList.toggle(is-active)
    menulinks.classList.remove('active')
  }
}

menulinks.addEventListener('click, hideMobileMenu')
navLogo.addEventListener('click, hideMobileMenu')