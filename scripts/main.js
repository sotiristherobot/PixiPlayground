/**
 * Created by sotiris on 10/9/16.
 */
'use strict';
(function () {
    // variables
    var circle;
    console.log(PIXI);
    var renderer = PIXI.autoDetectRenderer(500,500);

    document.body.appendChild(renderer.view);

    var stage = new PIXI.Container();

    //create circle
    circle = new PIXI.Graphics();
    circle.beginFill("0x66CCFF");
    circle.drawCircle(100,100,32);
    circle.endFill();


    //make circle interactive
    var texturedCircle = circle.generateTexture();
    var spriteCircle = new PIXI.Sprite(texturedCircle);

    spriteCircle.interactive = true;
    spriteCircle.buttonMode = true;


    spriteCircle.click = function(mouseData){
        console.log("I'm a circle and I'm clicked");

        this.x += 10;
        renderer.render(stage);
    };

    stage.addChild(spriteCircle);

    update();


    function update(){
        renderer.render(stage);
    }
}());



