window.onscroll = () => {
  const nav = document.querySelector('header');
  if(this.scrollY <= document.querySelector('main').offsetHeight*0.93) {
    nav.className = ''; 
  } else {
    nav.className = 'scroll';
  }
};

window.addEventListener("hashchange", function () {
  window.scrollTo(0, window.scrollY - 100);
});