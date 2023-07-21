const articleContents = document.querySelector(".article-contents");
const asideContents = document.querySelector(".aside-contents");
const aside = document.querySelector("aside");
const navClinentHeight = document.querySelector("nav").clientHeight;
console.log(navClinentHeight)
console.log(aside.getBoundingClientRect().bottom - 20);

// スクロールイベントとリサイズイベントで
window.addEventListener("scroll", function () {
  // .aside-contents の左上がウィンドウトップからの位置を取得してください
  console.log(asideContents.getBoundingClientRect().top);
  asideContents.style.position = "";
  if (asideContents.getBoundingClientRect().top < navClinentHeight + 20) {
    // .aside-contents に style position fixed を付与してください

    asideContents.style.position = "fixed";
    asideContents.style.top = navClinentHeight + 20 + "px";
  } else {
    // .aside-contents に style position を空にしてください
    asideContents.style.position = "";
  }

})



