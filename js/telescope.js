//Adapted from https://pixijs.io/examples/#/masks/filter.js
export function draw(imagePath = '/assets/star_chart.png') {
    const app = new PIXI.Application();
    // Inner radius of the circle
    const radius = 100;
    // The blur amount
    const blurSize = 5;

    document.getElementById("telescope").appendChild(app.view);

    PIXI.Assets.load(imagePath).then((stars) => {
        const background = new PIXI.Sprite(stars);
        app.stage.addChild(background);
        background.width = app.screen.width;
        background.height = app.screen.height;
        // background.beginFill("#02030E")

        const circle = new PIXI.Graphics()
            .beginFill(0xFF0000)
            .drawCircle(radius + blurSize, radius + blurSize, radius)
            .endFill();
        circle.filters = [new PIXI.filters.BlurFilter(blurSize)];

        const bounds = new PIXI.Circle(0, 0, (radius + blurSize) * 2, (radius + blurSize) * 2);
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
