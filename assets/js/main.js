(function() {
  // get section dom nodes
  var sections = document.querySelectorAll('.section');

  // debounces for performance - from David Walsh
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  // set current section to fixed
  function fixSection() {
    var windowOffset = window.pageYOffset;
    var height = sections[0].offsetHeight; // all sections are 100vh so heights are the same
    var fixed = Math.floor(windowOffset / height);
    [].forEach.call(sections, function(section, index) {
      if (index === fixed) {
        sections[index].classList.add('fixed');
      }
      else {
        sections[index].classList.remove('fixed')
      }
    });
  }

  // bind function to scroll
  window.addEventListener('scroll', fixSection);
}())
