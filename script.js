$(document).ready(function(){
  $("#nav-placeholder").load("nav.html");
});

$(document).ready(function(){
  $("#footer-placeholder").load("footer.html");
});

window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  }
};
