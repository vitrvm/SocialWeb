// ==UserScript==
// @name        Social Web Tampermonkey Script
// @namespace   https://github.com/vitrvm/SocialWeb
// @version     0.1.2
// @description Make the WWW the social web
// @match       *://*/*
// @downloadURL https://raw.githubusercontent.com/vitrvm/SocialWeb/main/script/socialweb.js
// @updateURL   https://raw.githubusercontent.com/vitrvm/SocialWeb/main/script/socialweb.js
// @resource    IMPORTED_CSS https://raw.githubusercontent.com/vitrvm/SocialWeb/main/script/style.css
// @grant       GM_getResourceText
// @grant       GM_addStyle
// @noframes
// @copyright   2022+ Frank Garrote Cruz
// ==/UserScript==

function createBar(css) {
    var body = document.body;
    var mainBar = document.createElement("div");
    mainBar.className("main")
    body.appendChild(mainBar)

}


(function() {
    'use strict';
    const css = GM_getResourceText("IMPORTED_CSS");
    GM_addStyle(css);
    const bar = createBar();
})
