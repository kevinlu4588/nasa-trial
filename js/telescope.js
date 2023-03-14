const app = new PIXI.Application();

document.getElementById("telescope").appendChild(app.view);

//Adapted from https://pixijs.io/examples/#/masks/filter.js
export function draw(imagePath = 'https://widgets.astronomyapi.com/star-chart/generated/b111b8f44865f8d4efc686b4ce8904e3f98526b5f52b137d1fbf83cfdefe8db5.png') {
    // Inner radius of the circle
    const radius = 100;
    // The blur amount
    const blurSize = 5;

    PIXI.Assets.load("https://cors.office.dataculturegroup.org/" + imagePath).then((stars) => {
        const background = new PIXI.Sprite(stars);
        app.stage.addChild(background);
        background.width = app.screen.width;
        background.height = app.screen.height;

        const circle = new PIXI.Graphics()
            .beginFill(0xFF0000)
            .drawCircle(radius + blurSize, radius + blurSize, radius)
            .endFill();
        circle.filters = [new PIXI.filters.BlurFilter(blurSize)];

        const bounds = new PIXI.Circle(0, 0, (radius + blurSize) * 2, (radius + blurSize) * 2);
        const texture = app.renderer.generateTexture(circle, PIXI.SCALE_MODES.NEAREST, 1, bounds);
        const focus = new PIXI.Sprite(texture);
        background.mask = focus;

        app.stage.addChild(focus);
        focus.position.x = background.width/3;
        focus.position.y= background.height/3;

        app.stage.interactive = true;
        app.stage.hitArea = app.screen;
        app.stage.on('pointermove', (event) => {
            focus.position.x = event.global.x - focus.width / 2;
            focus.position.y = event.global.y - focus.height / 2;
        });
    });
}

// export function updateImage(imagePath) {

//     PIXI.Assets.load(imagePath).then((stars) => {
//         const background = new PIXI.Sprite(stars);
//         app.stage.addChild(background);
//     });
// }