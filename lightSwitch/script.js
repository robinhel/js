let lightIsOn = false;

function turnOnLight() {
    lightIsOn = true;
}

function turnOffLight() {
    lightIsOn = false;
}


function toggleLight() {
    if (lightIsOn == true) {
        lightIsOn = false;
    }
    else {
        lightIsOn = true;
    }
}


function isLightOn() {
    if (lightIsOn == true) {
        console.log("True!")
    }
    else {
        console.log("false!")
    }
}