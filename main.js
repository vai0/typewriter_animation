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
