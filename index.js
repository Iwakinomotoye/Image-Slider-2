var autoChange;
        autoChange = setInterval('change()', 3000);
        let first = document.getElementById("img1");
        let second = document.getElementById("img2");
        let third = document.getElementById("img3");
    function change() {
        if(second.style.opacity == 0 && third.style.opacity == 0) {
            second.style.opacity = 1.0;
        } else if (second.style.opacity == 1 && third.style.opacity == 0) {
            first.style.opacity = 0;
            third.style.opacity = 1.0;
            second.style.opacity = 0;
        } else {
            third.style.opacity = 0;
            first.style.opacity = 1;
        }
    }
    function changeLeft() {
        if(second.style.opacity == 0 && third.style.opacity == 0) {
            third.style.opacity = 1.0;
        } else if (second.style.opacity == 0 && third.style.opacity == 1) {
            third.style.opacity = 0;
            second.style.opacity = 1.0;
            first.style.opacity = 0;
        } else {
            second.style.opacity = 0;
            first.style.opacity = 1;
        }
    }
    document.getElementById("button").addEventListener('mouseover',offInterval);
    document.getElementById("button2").addEventListener('mouseover',offInterval);
    function offInterval() {
        clearInterval(autoChange);
    }
    document.getElementById("button").addEventListener('click',changeLeft);
    document.getElementById("button2").addEventListener('click',change);
    document.getElementById("button").addEventListener('mouseout',onInterval);
    document.getElementById("button2").addEventListener('mouseout',onInterval);
    function onInterval() {
        autoChange = setInterval('change()', 2000);
    }
