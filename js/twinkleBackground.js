let fr = 10;

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

        let x = random(displayWidth);
        let y = random(displayHeight);
        data.push({"x": x, "y": y, "color": color})
    }
    console.log(data)
}

function draw() {

    background(0);
    for (let i = 0; i < nTwinkle; i++ ) {
        stroke(data[i].color);
        rect(data[i].x, data[i].y, 1, 1)
    }
}
