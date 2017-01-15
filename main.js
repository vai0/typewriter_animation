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

document.ready(function() {
  var str = "Jennifer Yuchi";
  var text = '';
  var aboutDescriptionElement = document.getElementById('hero');
  var typespeed = 50;

  //give site enough time to load, before executing typewriter animation
  setTimeout(function() {
    for (var i = 0; i <= str.length; i++) {
      (function(x){
        setTimeout(function() {
          aboutDescriptionElement.html(text + '|');
          text += str[x];
        }, typespeed * x);
      }(i));
    }
  }, 1200);

  setTimeout(function() {
    aboutDescriptionElement.html(str + '<span class="blinking-cursor">|</span>');
    console.log('end');
  }, 1600 + typespeed * str.length);
});
