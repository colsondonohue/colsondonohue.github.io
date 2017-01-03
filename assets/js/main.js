(function() {
  // get section dom nodes
  var sections = document.querySelectorAll('.section');
  var sectionsInner = document.querySelectorAll('.section-inner');

  // set section heights to initial viewport heights, fixes mobile chrome jumping from address bar
  function calcVH() {
    var vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    [].forEach.call(sectionsInner, function(section) {
      section.style.height = vH + 'px';
    });
    [].forEach.call(sections, function(section) {
      section.style.height = vH + 'px';
    });
  }
  calcVH();
  window.addEventListener('onorientationchange', calcVH);

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
  window.addEventListener('scroll', fixSection);
}())
