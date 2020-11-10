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
