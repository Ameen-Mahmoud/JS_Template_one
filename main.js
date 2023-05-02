//Creat Function

let creat = (el) => document.createElement(`${el}`);

//Creat element
let header = creat("header");
let logo = creat("h1");
let menu = creat("ul");
let content = creat("div");
let footer = creat("footer");

//Classes Name
header.className = "webside-head";
logo.className = "logo";
menu.className = "menu";
content.className = "content";
footer.className = "foot";

//add to page
document.body.append(header);
header.append(logo);
header.append(menu);
document.body.append(content);
document.body.append(footer);

//Loop for  menu list and content

for (i = 1; i <= 15; i++) {
  if (i <= 4) {
    let menuList = creat("li");
    menuList.className = `menu-list-${i}`;
    menu.append(menuList);
    menuList.style.cssText = "cursor:pointer";
  }
  let prodBox = creat("div");
  let prodNum = creat("span");
  prodBox.className = "product";
  prodBox.textContent = "product";
  prodNum.textContent = `${i}`;
  prodBox.prepend(prodNum);
  content.append(prodBox);

  //product style
  prodBox.style.cssText =
    "color:rgb(136,136,136); padding:20px;background-color:white;border:1px solid rgb(221,221,221);width:calc((100% - 40px) / 3); border-radius:.5rem;box-sizing:border-box;text-align:center";
  prodNum.style.cssText =
    "display:block;color:black;font-size:40px;margin-bottom:20px";
}

//add Text

logo.textContent = "@bo Ameen";
document.querySelector(".menu-list-1").textContent = "Home";
document.querySelector(".menu-list-2").textContent = "About";
document.querySelector(".menu-list-3").textContent = "Service";
document.querySelector(".menu-list-4").textContent = "Contact";
footer.textContent = "Copyright 2023";

//Website style
document.body.style.cssText =
  "margin:0px; font-family:Tahoma,Arial;background-color:rgb(236,236,236)";
header.style.cssText =
  "display:flex;justify-content:space-between;align-items:center;padding:20px;background:white";
logo.style.cssText = "color:rgb(35,169,110);font-size:50px";
menu.style.cssText =
  "display:flex;justify-content:space-between;gap:15px ;list-style:none";
content.style.cssText =
  "display:flex;flex-wrap:wrap;gap:20px;justify-content:center;box-sizing:border-box;margin-bottom:20px;";
footer.style.cssText =
  "text-align:center;padding:20px;background:rgb(35,169,110);color:white;font-size:40px;margin-bottom:20px;";
