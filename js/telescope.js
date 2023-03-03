//Adapted from https://pixijs.io/examples/#/masks/filter.js

const app = new PIXI.Application({
    width: window.innerWidth - 500,
    height: window.innerHeight,
}
);
function random(max) {
    return Math.floor(Math.random() * max);
  }
var displayWidth = app.width;
var displayHeight = app.height;

document.getElementById("telescope").appendChild(app.view);
const container = new PIXI.Container();
app.stage.addChild(container);

let stars = [];

let nStars = 120;

    for (let i = 0; i < nStars; i++ ) {

        let color;
        let radius;

        if (i%9 === 0) {
            color = "#1D299F"
        } else if (i%19 === 0) {
            color = "#98312C"
        } else {
            color = "#FFFFFF"
        }

        if (i%12 === 0) {
            radius = 2;
        } else {
            radius = 1;
        }
        let obj = new PIXI.Graphics();
        obj.beginFill(0xFFFFFF);
        const texture = PIXI.Texture.from('/assets/star.png');
        var starx = Math.random() * (1000 - 100) + 100;
        var stary =  Math.random() * (1000 - 100) + 100;
        obj.drawRect(starx, stary, 2, 2);
        obj.alpha = 0.5;

// designate circle as being interactive so it handles events
obj.interactive = true;

// create hit area, needed for interactivity
obj.hitArea = new PIXI.Circle(150, 150, 100);

// make circle non-transparent when mouse is over it
obj.mouseover = function(mouseData) {
  this.alpha = 1;
}

// make circle half-transparent when mouse leaves
obj.mouseout = function(mouseData) {
  this.alpha = 0.5;
}
obj.click = function(mouseData){
    console.log("clicked");
}
        console.log(obj);
        app.stage.addChild(obj);
    }
    console.log(stars)

function draw() {

    background(0);
    for (let i = 0; i < nTwinkle; i++ ) {
        stroke(data[i].color);
        rect(data[i].x, data[i].y, data[i].radius, data[i].radius)
    }
}










// Inner radius of the circle
const radius = 100;

// The blur amount
const blurSize = 32;

var imgURL;
$.ajax({
    url:"https://api.nasa.gov/planetary/apod?api_key=jVQ018aAXegqAo7CE1WxklvjiHlpcswlQoHB3piO&count=5",
    success:function(returnJSON) {
        var imgArr = [];
        for(var i = 0; i < 5; i += 1){
            console.log("prefi" + i);
            console.log(returnJSON[i].url);
            var xcoord = i*40;
            console.log(xcoord);
            var ycoord = 400;
            
            PIXI.Assets.load("https://cors.office.dataculturegroup.org/" + returnJSON[i].url).then((APOD1) => {
                const bunny = new PIXI.Sprite(APOD1);
                bunny.anchor.set(0.5);
                bunny.x = Math.random() * (1000 - 100) + 100;
                bunny.y =  Math.random() * (1000 - 100) + 100;
                var widthRatio = 200/bunny.width;
                bunny.width = bunny.width * widthRatio;
                bunny.height = bunny.height*widthRatio;
                console.log(bunny.x);
                app.stage.addChild(bunny);
            });
        }
        console.log(imgArr);
        container.x = app.screen.width / 2;
        container.y = app.screen.height / 2;
        
        
        
       }
});
console.log(imgURL);


            
            const circle = new PIXI.Graphics()
                .beginFill(0xFFFFFF)
                .drawCircle(radius + blurSize, radius + blurSize, radius)
                .endFill();
            circle.filters = [new PIXI.filters.BlurFilter(blurSize)];
        
            const bounds = new PIXI.Rectangle(0, 0, (radius + blurSize) * 2, (radius + blurSize) * 2);
            const texture = app.renderer.generateTexture(circle, PIXI.SCALE_MODES.NEAREST, 1, bounds);
            const focus = new PIXI.Sprite(texture);
        
            app.stage.addChild(focus);
            app.mask = focus;
        
            app.stage.interactive = true;
            app.stage.hitArea = app.screen;
            app.stage.on('pointermove', (event) => {
                focus.position.x = event.global.x - focus.width / 2;
                focus.position.y = event.global.y - focus.height / 2;
            });
            