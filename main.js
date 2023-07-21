const articleContents = document.querySelector(".article-contents");
const asideContents = document.querySelector(".aside-contents");
const aside = document.querySelector("aside");
const navClinentHeight = document.querySelector("nav").clientHeight;
const asideContentsWidth = asideContents.clientWidth;
window.addEventListener("scroll", function () {
  asideContents.style.position = "";
  if (asideContents.getBoundingClientRect().top <= navClinentHeight + 20 && asideContents.clientHeight + navClinentHeight + 20 <= articleContents.getBoundingClientRect().bottom ) {
    asideContents.style.position = "fixed";
    asideContents.style.top = navClinentHeight + 20 + "px";
    asideContents.style.width = asideContentsWidth + "px";
  } if ( asideContents.clientHeight + navClinentHeight + 20 >= articleContents.getBoundingClientRect().bottom ){
    aside.style.display = 'flex'
    aside.style.alignItems = 'flex-end'
  } else {
    aside.style.display = 'unset'
    aside.style.alignItems = 'unset'
  }
})



