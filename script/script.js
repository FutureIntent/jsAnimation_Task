const sand = document.getElementById("sand");
const deepWater = document.getElementById("deepWater");
const palm = document.getElementById("palm");
const sky = document.getElementById("sky");
const sun = document.getElementById("sun");
const clouds = document.getElementById("clouds");
const reflection = document.getElementById("reflection");
const wish = document.getElementById("wish");
const star = document.getElementById("star");


const dx = 1;
const dy = 1;
const dx_float = 0.1;
const dy_float = 0.1;

let myClouds = {
    forward: true,
    x: 20,
    T: 100
}

setInterval(clouds_floating, myClouds.T);

function clouds_floating(){
    if (myClouds.x == 55) myClouds.forward = false;
    if (myClouds.x == 20) myClouds.forward = true;

    if (myClouds.forward == true) {
        myClouds.x += dx;

    } else {
        myClouds.x -= dx;
    }

    clouds.style.left = myClouds.x + '%';
}

let myReflection = {
    forward: true,
    x: 20,
    T: 100
}

setInterval(reflection_floating, myReflection.T);

function reflection_floating() {
    if (myReflection.x == 55) myReflection.forward = false;
    if (myReflection.x == 20) myReflection.forward = true;

    if (myReflection.forward == true) {
        myReflection.x += dx;

    } else {
        myReflection.x -= dx;
    }

    reflection.style.left = myReflection.x + '%';
}

let myStar = {
    forward: true,
    angle: 0,
    scale: 1.0,
    T: 100
}

setInterval(myStar_glory, myStar.T);

function myStar_glory() {
    if (myStar.scale.toFixed(1) == 2.0.toFixed(1) && myStar.angle == 360) myStar.forward = false;
    if (myStar.scale.toFixed(1) == 1.0.toFixed(1) && myStar.angle == 0) myStar.forward = true;

    if (myStar.forward == true) {
        myStar.scale += dx_float;
        myStar.angle += 36;
    } else {
        myStar.scale -= dx_float;
        myStar.angle -= 36;
    }

    star.style.transform = `scale(${myStar.scale}) rotate(${myStar.angle}deg)`;
}

let mySand = {
    forward: true,
    r: 200,
    g: 160,
    b: 110,
    T: 100
}

setInterval(mySand_shadow, myStar.T);

function mySand_shadow() {
    if (mySand.r == 200 && mySand.g == 160 && mySand.b == 110) mySand.forward = true;
    if (mySand.r == 130 && mySand.g == 90 && mySand.b == 40) mySand.forward = false;

    if (mySand.forward == true) {
        mySand.r -= 2;
        mySand.g -= 2;
        mySand.b -= 2;
    } else {
        mySand.r += 2;
        mySand.g += 2;
        mySand.b += 2;
    }

    sand.style.backgroundColor = `rgb(${mySand.r}, ${mySand.g}, ${mySand.b})`;
}

let myWish = {
    forward: true,
    r: 200,
    g: 0,
    b: 100,
    opacity: 1,
    T: 100
}

setInterval(myWish_aDream, myWish.T);

function myWish_aDream() {
    if (myWish.opacity.toFixed(1) == 1.0.toFixed(1)) myWish.forward = true;
    if (myWish.opacity.toFixed(1) == 0.0.toFixed(1)) myWish.forward = false

    if (myWish.forward == true) {
        myWish.opacity -= dx_float;
    } else {
        myWish.opacity += dx_float;
    }

    wish.style.color = `rgba(${myWish.r}, ${myWish.g},${myWish.b}, ${myWish.opacity})`;
    
}


