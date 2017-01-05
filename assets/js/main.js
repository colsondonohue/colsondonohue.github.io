(function() {
  // get section dom nodes and initial animation values
  var sections = document.querySelectorAll('.section'),
      sectionsInner = document.querySelectorAll('.section-inner'),
      lastYOffset = 0,
      vH = 0,
      animating = false,
      forNodes = function(nodeList, callback) {
        return Array.prototype.forEach.call(nodeList, callback)
      };

  // set section heights to fraction of initial viewport heights, fixes mobile chrome jumping from address bar
  function calcVH() {
    vH = 0.7 * Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    forNodes(sectionsInner, function(section) {
      section.style.height = vH + 'px';
    });
    forNodes(sections, function(section) {
      section.style.height = vH + 'px';
    });
  }
  calcVH();
  window.addEventListener('onorientationchange', calcVH);

  // callback for scroll event
  function onScroll() {
    lastYOffset = window.pageYOffset;
    requestAnim();
  }

  // only calls rAF if it hasn't already been called
  function requestAnim() {
    if (!animating) {
      requestAnimationFrame(fixSection);
      animating = true;
    }
  }

  // set current section to fixed
  function fixSection() {
    var fixed = Math.floor(lastYOffset / vH);
    forNodes(sections, function(section, index) {
      if (index === fixed) {
        sections[index].classList.add('fixed');
      }
      else {
        sections[index].classList.remove('fixed');
      }
    });
    animating = false;
  }
  window.addEventListener('scroll', onScroll);
}())
