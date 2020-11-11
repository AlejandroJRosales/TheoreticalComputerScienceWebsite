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
    $("#psuedo-code").css({"font-size": "17px"});
    $("#collapsible-contents-button").css({"top": "10%", "right": "2%"});
    $("#category-header").css({"font-size": "50px"});
    $("#section-header").css({"font-size": "45px"});
    // $("#math-notation").css({"font-size": "35px"});
  }
});

// $(document).ready(function(){ 
//   if ((window.innerWidth <= 800) && (window.innerHeight <= 600)) {
//     $("p").css({"font-size": "22px"});
//     console.log("True");
//   } 
// });

$(document).ready(function(){
  $("#nav-placeholder").load("nav.html");
});

$(document).ready(function(){
  $("#footer-placeholder").load("footer.html");
});

$(document).ready(function(){
  $("#collapsible-table-of-contents-placeholder").load("collapsiblecontents.html");
});

window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  }
};
