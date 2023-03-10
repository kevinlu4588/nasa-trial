let fr = 3;
let data = [];
let nTwinkle = 120;

function setup() {
    let c = createCanvas(displayWidth, displayHeight*1.5);
    c.parent("twinkle");
    frameRate(fr);

    for (let i = 0; i < nTwinkle; i++ ) {

        let color;
        let radius;

        if (i%9 === 0) {
            color = "#F0CCAE"
        } else if (i%19 === 0) {
            color = "#A7C3FD"
        } else {
            color = "#FFFFFF"
        }

        if (i%12 === 0) {
            radius = random(6);
        } else {
            radius = random(2);
        }

        data.push({"x": random(displayWidth), "y": random(displayHeight*1.5), "color": color, "radius": radius});
    }
}

function draw() {

    background("#02030E");
    for (let i = 0; i < nTwinkle; i++ ) {

        if (i%7===0) {

            data[i].x = random(displayWidth);
            data[i].y = random(displayHeight);
            data[i].radius = random(6);
        }
        stroke(data[i].color);
        ellipse(data[i].x, data[i].y, data[i].radius, data[i].radius)
    }
}
