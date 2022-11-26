// ==UserScript==
// @name       Social Web Tampermonkey Script
// @namespace  https://github.com/vitrvm/SocialWeb
// @version    0.1.1
// @description  Make the WWW the social web
// @match      *://*/*
// @updateURL  https://raw.githubusercontent.com/vitrvm/SocialWeb/main/script/socialweb.js
// @noframes
// @copyright  2022+ Frank Garrote Cruz
// ==/UserScript==

var body = document.body;
var newDiv = document.createElement("div")
newDiv.style.cssText = "position:fixed;width:60px;height:60px;bottom:40px;right:40px;background-color:#0C9;color:#FFF;border-radius:50px;text-align:center;box-shadow: 2px 2px 3px #999;"
const newContent = document.createTextNode("+");
newDiv.appendChild(newContent);
body.insertBefore(newDiv, body.firstChild);
console.log(body)