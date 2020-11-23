$(function() {
    $(".nav-placeholder").load("navbar.html");
    $(".footer-placeholder").load("footer.html");
});

function isMobile() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

$(document).ready(function(){ 
  if (isMobile()) {
    // $(".topics-dropdown-menu").css({"padding-bottom": "2%"});
    $(".code").css({"font-size": "52%"});
    $(".collapsible-contents-button").css({"bottom": "7%", "right": "3%"});
    $(".information").css({"padding-left": "6%", "padding-right": "6%"});
  }
});

window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  }
};

// function changeToClose() {
//     var elem = document.getElementsByClassName("algorithmic-analysis-collapse-button");
//     if (elem.value == "Table of Contents") {
//       elem.value = "Close";
//     }
//     else {
//       elem.value = "Table of Contents";
//     }
// }