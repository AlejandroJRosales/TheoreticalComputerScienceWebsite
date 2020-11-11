function detectMob() {
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
  if (detectMob()) {
    $("h1").css({"font-size": "70px"});
    // $("h5").css({"font-size": "40px"});
    $("p").css({"font-size": "30px"});
    $(".psuedo-code").css({"font-size": "17px"});
    $(".collapsible-contents-button").css({"top": "10%", "right": "2%"});
    $(".category-header").css({"font-size": "300%"});
    $(".section-header").css({"font-size": "230%"});
    $(".subsection-header").css({"font-size": "190%"});
    // $(".math-notation").css({"font-size": "120%"});
    $("#collapse").css({"overflow": "scroll"});
  }
});

// $(document).ready(function(){ 
//   if ((window.innerWidth <= 800) && (window.innerHeight <= 600)) {
//     $("p").css({"font-size": "22px"});
//     console.log("True");
//   } 
// });

$(document).ready(function(){
  $(".nav-placeholder").load("nav.html");
});

$(document).ready(function(){
  $(".footer-placeholder").load("footer.html");
});

window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  }
};
