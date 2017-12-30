// Dean Attali / Beautiful Jekyll 2016

var main = {
  init : function() {
      window.addEventListener('scroll', function(e) {
          var navbar = document.getElementById("navbar-container");

          if (calculateHeightOffset(navbar) > 50) {
              navbar.classList.add("top-nav-short");
          } else {
              navbar.classList.remove("top-nav-short");
          }
      });
  }
};

// Native
function calculateHeightOffset (element) {
  return element.getBoundingClientRect().top
  + window.pageYOffset - document.documentElement.clientTop;
}

document.addEventListener('DOMContentLoaded', main.init);
