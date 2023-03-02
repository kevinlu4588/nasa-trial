//Adapted from https://pixijs.io/examples/#/masks/filter.js

const app = new PIXI.Application();
document.getElementById("telescope").appendChild(app.view);

// Inner radius of the circle
const radius = 100;

// The blur amount
const blurSize = 32;

var imgURL;
$.ajax({
    url:"https://api.nasa.gov/planetary/apod?api_key=jVQ018aAXegqAo7CE1WxklvjiHlpcswlQoHB3piO",
    success:function(returnJSON) {

        PIXI.Assets.load("https://cors.office.dataculturegroup.org/" + returnJSON.url).then((grassTexture) => {
            const background = new PIXI.Sprite(grassTexture);
            app.stage.addChild(background);
            background.width = app.screen.width;
            background.height = app.screen.height;
        
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
        });
        
       }
});
console.log(imgURL);

//const texture = PIXI.Texture.from(imgURL);

