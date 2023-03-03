//Adapted from https://pixijs.io/examples/#/masks/filter.js
//setup Pixi renderer
var renderer = PIXI.autoDetectRenderer(600, 400, {
    backgroundColor: 0x000000
  });
  document.getElementById('telescope').appendChild(renderer.view);
  var stage = new PIXI.Container();

var imgArr  = [];
var imgURL;
$.ajax({
    url: "https://api.nasa.gov/planetary/apod?api_key=jVQ018aAXegqAo7CE1WxklvjiHlpcswlQoHB3piO&count=5",
    success: function(returnJSON) {
        var imgArr = [];
        for (var i = 0; i < 5; i += 1) {
            PIXI.Assets.load("https://cors.office.dataculturegroup.org/" + returnJSON[i].url).then((APOD1) => {
                const bunny = new PIXI.Sprite(APOD1);
                bunny.anchor.set(0.5);
                bunny.x = Math.random() * (1000 - 100) + 100;
                bunny.y = Math.random() * (1000 - 100) + 100;
                var widthRatio = 200 / bunny.width;
                bunny.width = bunny.width * widthRatio;
                bunny.height = bunny.height * widthRatio;
                stage.addChild(bunny);
            });
        }

    }
});



let stars = [];

let nStars = 120;

for (let i = 0; i < nStars; i++) {

    let color;
    let radius;

    if (i % 9 === 0) {
        color = "#1D299F"
    } else if (i % 19 === 0) {
        color = "#98312C"
    } else {
        color = "#FFFFFF"
    }

    if (i % 12 === 0) {
        radius = 2;
    } else {
        radius = 1;
    }
    let obj = new PIXI.Graphics();
    obj.beginFill(0xffffff);
    const texture = PIXI.Texture.from('/assets/star.png');
    var starx = Math.random() * (1000 - 100) + 100;
    var stary = Math.random() * (1000 - 100) + 100;
    obj.drawRect(starx, stary, 70, 2);
    obj.alpha = 0.5;

    // designate circle as being interactive so it handles events
    obj.interactive = true;

    // create hit area, needed for interactivity
    obj.hitArea = new PIXI.Circle(0, 150, 100);

    // make circle non-transparent when mouse is over it
    obj.mouseover = function(mouseData) {
        console.log("hi");
        this.alpha = 1;
    }

    // make circle half-transparent when mouse leaves
    obj.mouseout = function(mouseData) {
        this.alpha = 0.5;
        console.log("hi");

    }
    obj.click = function(mouseData) {
        console.log("clicked");
    }
    //onsole.log(obj);
    stage.addChild(obj);
}
// start animating
animate();

function animate() {
  requestAnimationFrame(animate);
  // render the root container
  renderer.render(stage);
};






