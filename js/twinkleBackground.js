let fr = 3;

let data = []

let nTwinkle = 120;

function setup() {
    createCanvas(displayWidth, displayHeight);
    frameRate(fr);

    for (let i = 0; i < nTwinkle; i++ ) {

        let color;

        if (i%9 === 0) {
            color = "#1D299F"
        } else if (i%18 === 0) {
            color = "#98312C"
        } else {
            color = "#FFFFFF"
        }

        if (i%12 === 0) {
            radius = 2;
        } else {
            radius = 1;
        }

        data.push({"x": random(displayWidth), "y": random(displayHeight), "color": color, "radius": radius})
    }
    console.log(data)
}

function draw() {

    background(0);
    for (let i = 0; i < nTwinkle; i++ ) {

        if (i%7===0) {

            data[i].x = random(displayWidth);
            data[i].y = random(displayHeight);
            data.push({"x": random(displayWidth), "y": random(displayHeight), "color": "#FFFFFF"})
        }
        stroke(data[i].color);
        rect(data[i].x, data[i].y, data[i].radius, data[i].radius)
    }
}
