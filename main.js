{
  'use strict';

  function handleScroll() {
    const articleContents = document.querySelector(".article-contents");
    const asideContents = document.querySelector(".aside-contents");
    const aside = document.querySelector("aside");
    const navClientHeight = document.querySelector("nav").clientHeight;
    const asideContentsWidth = asideContents.clientWidth;

    const scrollOffset = navClientHeight + 20;
    const bottomOffset = scrollOffset + asideContents.clientHeight;

    if (window.innerWidth <= 768) {
      asideContents.style.position = "";
      aside.style.display = 'unset';
      aside.style.alignItems = 'unset';
      return;
    }

    asideContents.style.position = "static";

    if (asideContents.getBoundingClientRect().top <= scrollOffset && bottomOffset <= articleContents.getBoundingClientRect().bottom) {
      asideContents.style.position = "fixed";
      asideContents.style.top = scrollOffset + "px";
      asideContents.style.width = asideContentsWidth + "px";
    }

    if (bottomOffset >= articleContents.getBoundingClientRect().bottom) {
      aside.style.display = 'flex';
      aside.style.alignItems = 'flex-end';
    } else {
      aside.style.display = 'unset';
      aside.style.alignItems = 'unset';
    }
  }

  window.addEventListener("scroll", handleScroll);
}
