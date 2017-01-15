// $(function() {
  // $(document).foundation();
  //
  // //slideout.js menu bar instance
  // var slideout = new Slideout({
  //   'panel': document.getElementById('main-panel'),
  //   'menu': document.getElementById('slideout-menu'),
  //   'padding': 256,
  //   'tolerance': 70
  // });
  //
  // //hack for fixed header so the slideout.js menu works properly
  // slideout.on('beforeopen', function() {
  //   document.querySelector('.fixed').classList.add('fixed-open');
  // });
  //
  // slideout.on('beforeclose', function() {
  //   document.querySelector('.fixed').classList.remove('fixed-open');
  // });
  //
  // document.querySelector('.toggle-button').addEventListener('click', function() {
  //   slideout.toggle();
  // });

  //code for typewriter animation

// });

(function() {
    var str = "JUSTIN CHI";
    var text = '';
    var herotext = document.getElementById('hero-text');
    var typespeed = 0;
    var mintypespeed = 60;
    var maxtypespeed = 400;
    var blinkingcursor = document.createElement('span');
    blinkingcursor.innerHTML = '\♥';
    blinkingcursor.id = 'blinking-cursor';

    for (var i = 0; i <= str.length; i++) {
        (function(x) {
            typespeed += Math.random() * (maxtypespeed - mintypespeed) + mintypespeed;
            setTimeout(function() {
                herotext.innerHTML = text;
                herotext.appendChild(blinkingcursor);
                text += str[x];
            }, typespeed);
        }(i));
    }
})();
