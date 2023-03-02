//Adapted from https://pixijs.io/examples/#/masks/filter.js

const app = new PIXI.Application({
    width: window.innerWidth - 500,
    height: window.innerHeight,
    backgroundColor: 0x2980b9
}
);

document.getElementById("telescope").appendChild(app.view);
const container = new PIXI.Container();
app.stage.addChild(container);

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

//const texture = PIXI.Texture.from(imgURL);

            /*
            const circle = new PIXI.Graphics()
                .beginFill(0xFF0000)
                .drawCircle(radius + blurSize, radius + blurSize, radius)
                .endFill();
            circle.filters = [new PIXI.filters.BlurFilter(blurSize)];
        
            const bounds = new PIXI.Rectangle(0, 0, (radius + blurSize) * 2, (radius + blurSize) * 2);
            const texture = app.renderer.generateTexture(circle, PIXI.SCALE_MODES.NEAREST, 1, bounds);
            const focus = new PIXI.Sprite(texture);
        
            app.stage.addChild(focus);
            background.mask = focus;
        
            app.stage.interactive = true;
            app.stage.hitArea = app.screen;
            app.stage.on('pointermove', (event) => {
                focus.position.x = event.global.x - focus.width / 2;
                focus.position.y = event.global.y - focus.height / 2;
            });
            */