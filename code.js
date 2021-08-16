var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["84cf5662-049c-4d87-9ac6-26b91c01908b","5c522644-6299-48db-ad74-176ad30d45fb","06fb5297-8f16-469d-a293-6d0791325822","172e28dc-51e4-4337-887a-cfcaacfbb995","dec93b10-cce0-41cd-8ac8-4b45bc3501f5","99b52962-9f07-4d8d-93f5-59c40db89fd2","3fe06ea0-24d9-46e1-bbf0-cb7e968355a3","1144c8d1-6d45-480b-bd3e-4debb85c4b6a","740468dc-ea5a-455b-b7f4-8f25635a47b9","7011a636-e447-4c0c-b648-f49417dddf0f","a272dc7a-00f7-4f97-8c7d-1f1fa71e0bff","0c845996-8656-4595-887c-ed1b38d7afba","7e71d1aa-9a88-40a1-a55e-8764e97c5ca8","ac214703-962a-4555-9fdd-2f364bc36b22","a6d6a3fa-86fa-4d98-b347-6b96aa07e2c8","852550dc-2ddd-471c-97a4-9acdb1015ab7","db2ae296-3bd3-4ea0-aa12-ead4881070e5","5e92c4e0-1939-419f-8592-e4fe26de5e70"],"propsByKey":{"84cf5662-049c-4d87-9ac6-26b91c01908b":{"name":"pikachu start","sourceUrl":null,"frameSize":{"x":500,"y":400},"frameCount":21,"looping":true,"frameDelay":12,"version":"cGh3ktnFXl_XrCvi6EnuVK6F4Xs1p4DY","loadedFromSource":true,"saved":true,"sourceSize":{"x":2000,"y":2400},"rootRelativePath":"assets/84cf5662-049c-4d87-9ac6-26b91c01908b.png"},"5c522644-6299-48db-ad74-176ad30d45fb":{"name":"ash","sourceUrl":"assets/v3/animations/4Xp5_V3VqlSwzt_vFs1lA97qNzUfBNQrYiqaUSXk4Jw/5c522644-6299-48db-ad74-176ad30d45fb.png","frameSize":{"x":340,"y":340},"frameCount":1,"looping":true,"frameDelay":4,"version":"P1hn8o3nSXHp5NFKGlPpMQonU2SssqXv","loadedFromSource":true,"saved":true,"sourceSize":{"x":340,"y":340},"rootRelativePath":"assets/v3/animations/4Xp5_V3VqlSwzt_vFs1lA97qNzUfBNQrYiqaUSXk4Jw/5c522644-6299-48db-ad74-176ad30d45fb.png"},"06fb5297-8f16-469d-a293-6d0791325822":{"name":"pikachu run","sourceUrl":null,"frameSize":{"x":450,"y":321},"frameCount":8,"looping":true,"frameDelay":2,"version":"Z4hjSOZmL4XGjsgagx7tWAsdtRDKChly","loadedFromSource":true,"saved":true,"sourceSize":{"x":900,"y":1284},"rootRelativePath":"assets/06fb5297-8f16-469d-a293-6d0791325822.png"},"172e28dc-51e4-4337-887a-cfcaacfbb995":{"name":"pikachu run_copy_1","sourceUrl":null,"frameSize":{"x":450,"y":321},"frameCount":9,"looping":true,"frameDelay":3,"version":"bJ30olQKJJIsuOqlCKnbyzLmRlaqHXCr","loadedFromSource":true,"saved":true,"sourceSize":{"x":1350,"y":963},"rootRelativePath":"assets/172e28dc-51e4-4337-887a-cfcaacfbb995.png"},"dec93b10-cce0-41cd-8ac8-4b45bc3501f5":{"name":"coin","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":12,"looping":true,"frameDelay":12,"version":"u9VVI46yE0Wqf63HUzYRW8gitIC9wm7Q","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":800},"rootRelativePath":"assets/dec93b10-cce0-41cd-8ac8-4b45bc3501f5.png"},"99b52962-9f07-4d8d-93f5-59c40db89fd2":{"name":"floor 2","sourceUrl":"assets/v3/animations/4Xp5_V3VqlSwzt_vFs1lA97qNzUfBNQrYiqaUSXk4Jw/99b52962-9f07-4d8d-93f5-59c40db89fd2.png","frameSize":{"x":317,"y":57},"frameCount":1,"looping":true,"frameDelay":4,"version":"EgA9a62hHopciD.h.chCzV4OJdWSj2Sw","loadedFromSource":true,"saved":true,"sourceSize":{"x":317,"y":57},"rootRelativePath":"assets/v3/animations/4Xp5_V3VqlSwzt_vFs1lA97qNzUfBNQrYiqaUSXk4Jw/99b52962-9f07-4d8d-93f5-59c40db89fd2.png"},"3fe06ea0-24d9-46e1-bbf0-cb7e968355a3":{"name":"floor 2(1)","sourceUrl":null,"frameSize":{"x":133,"y":56},"frameCount":2,"looping":true,"frameDelay":10,"version":"932rZ_Qk6GmxCFEUrgR9z63w1ZKicdHT","loadedFromSource":true,"saved":true,"sourceSize":{"x":133,"y":112},"rootRelativePath":"assets/3fe06ea0-24d9-46e1-bbf0-cb7e968355a3.png"},"1144c8d1-6d45-480b-bd3e-4debb85c4b6a":{"name":"team rocket ball","sourceUrl":null,"frameSize":{"x":299,"y":320},"frameCount":2,"looping":true,"frameDelay":12,"version":"N_JxchjtTVoFh1tLHkrbOK0npYoTfyCW","loadedFromSource":true,"saved":true,"sourceSize":{"x":299,"y":640},"rootRelativePath":"assets/1144c8d1-6d45-480b-bd3e-4debb85c4b6a.png"},"740468dc-ea5a-455b-b7f4-8f25635a47b9":{"name":"pikachu fly","sourceUrl":null,"frameSize":{"x":335,"y":335},"frameCount":8,"looping":true,"frameDelay":12,"version":"HNje5syXuBu8Yffc0Hiil.TVd9OrFF4m","loadedFromSource":true,"saved":true,"sourceSize":{"x":1005,"y":1005},"rootRelativePath":"assets/740468dc-ea5a-455b-b7f4-8f25635a47b9.png"},"7011a636-e447-4c0c-b648-f49417dddf0f":{"name":"meowth","sourceUrl":null,"frameSize":{"x":92,"y":63},"frameCount":72,"looping":true,"frameDelay":3,"version":"tnxcr_eXnCsuVLEXULlVaslYec3IO1PX","loadedFromSource":true,"saved":true,"sourceSize":{"x":644,"y":693},"rootRelativePath":"assets/7011a636-e447-4c0c-b648-f49417dddf0f.png"},"a272dc7a-00f7-4f97-8c7d-1f1fa71e0bff":{"name":"floor1","sourceUrl":null,"frameSize":{"x":498,"y":152},"frameCount":5,"looping":true,"frameDelay":12,"version":"5NXtGqK1Pfo6YMj2ydz3___PjNOS0by8","loadedFromSource":true,"saved":true,"sourceSize":{"x":498,"y":760},"rootRelativePath":"assets/a272dc7a-00f7-4f97-8c7d-1f1fa71e0bff.png"},"0c845996-8656-4595-887c-ed1b38d7afba":{"name":"yveltal","sourceUrl":null,"frameSize":{"x":500,"y":414},"frameCount":10,"looping":true,"frameDelay":3,"version":"K0d2RrwBVrJUucFA.XebEFjIU9C7yUsC","loadedFromSource":true,"saved":true,"sourceSize":{"x":1500,"y":1656},"rootRelativePath":"assets/0c845996-8656-4595-887c-ed1b38d7afba.png"},"7e71d1aa-9a88-40a1-a55e-8764e97c5ca8":{"name":"1 Live","sourceUrl":null,"frameSize":{"x":104,"y":104},"frameCount":2,"looping":true,"frameDelay":12,"version":"igh3MV3qgPYc0clienFLfYzBmpSHUUl0","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":208},"rootRelativePath":"assets/7e71d1aa-9a88-40a1-a55e-8764e97c5ca8.png"},"ac214703-962a-4555-9fdd-2f364bc36b22":{"name":"2 Lives","sourceUrl":null,"frameSize":{"x":214,"y":104},"frameCount":1,"looping":true,"frameDelay":12,"version":"ESdiWzR62r4Ft.nAHvGHDwDbKMadWApg","loadedFromSource":true,"saved":true,"sourceSize":{"x":214,"y":104},"rootRelativePath":"assets/ac214703-962a-4555-9fdd-2f364bc36b22.png"},"a6d6a3fa-86fa-4d98-b347-6b96aa07e2c8":{"name":"3 Lives","sourceUrl":null,"frameSize":{"x":321,"y":104},"frameCount":1,"looping":true,"frameDelay":12,"version":"0MfIFY5bPUuEKm47gm06RTrfiqrUTZXJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":321,"y":104},"rootRelativePath":"assets/a6d6a3fa-86fa-4d98-b347-6b96aa07e2c8.png"},"852550dc-2ddd-471c-97a4-9acdb1015ab7":{"name":"4 Lives","sourceUrl":null,"frameSize":{"x":427,"y":105},"frameCount":1,"looping":true,"frameDelay":12,"version":"db2nnSiE.cilmLrloHlLKIR8mqeCD_GI","loadedFromSource":true,"saved":true,"sourceSize":{"x":427,"y":105},"rootRelativePath":"assets/852550dc-2ddd-471c-97a4-9acdb1015ab7.png"},"db2ae296-3bd3-4ea0-aa12-ead4881070e5":{"name":"5 Lives","sourceUrl":null,"frameSize":{"x":533,"y":106},"frameCount":1,"looping":true,"frameDelay":12,"version":"vrN5wDH5e1fKpFpQHPpMTdxPAhe4MHYK","loadedFromSource":true,"saved":true,"sourceSize":{"x":533,"y":106},"rootRelativePath":"assets/db2ae296-3bd3-4ea0-aa12-ead4881070e5.png"},"5e92c4e0-1939-419f-8592-e4fe26de5e70":{"name":"coin1","sourceUrl":"assets/v3/animations/4Xp5_V3VqlSwzt_vFs1lA97qNzUfBNQrYiqaUSXk4Jw/5e92c4e0-1939-419f-8592-e4fe26de5e70.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"0MIHJZBVt9TwBg9fgZ6t18Au0IkxwwpR","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/4Xp5_V3VqlSwzt_vFs1lA97qNzUfBNQrYiqaUSXk4Jw/5e92c4e0-1939-419f-8592-e4fe26de5e70.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

playSound("assets/Jason-Paige-Pokmon-Theme-Song-mi.mp3");
var floor1=createSprite(50,390,20,20);
floor1.setAnimation("floor1");
floor1.scale=0.3;
var floor2=createSprite(150,390,20,20);
floor2.setAnimation("floor1");
floor2.scale=0.3;
var floor3=createSprite(350,390,20,20);
floor3.setAnimation("floor1");
floor3.scale=0.3;
var floor4=createSprite(50,250,20,20);
floor4.setAnimation("floor 2");
floor4.scale=0.5;
var floor5=createSprite(160,250,20,20);
floor5.setAnimation("floor 2(1)");
floor5.scale=0.5;
var floor6=createSprite(350,150,20,20);
floor6.setAnimation("floor 2");
floor6.scale=0.5;
var floor7=createSprite(200,150,20,20);
floor7.setAnimation("floor 2");
floor7.scale=0.5;
var floor8=createSprite(80,70,20,20);
floor8.setAnimation("floor 2");
floor8.scale=0.5;
//floors

var yveltal=createSprite(250,320);
yveltal.setAnimation("yveltal");
yveltal.scale=0.25;
var trball =createSprite(330,115);
trball.setAnimation("team rocket ball");
trball.scale=0.1;
//obstacles

var coin1=createSprite(40,220);
coin1.setAnimation("coin");
coin1.scale=0.2;
var coin2=createSprite(370,115);
coin2.setAnimation("coin");
coin2.scale=0.2;
var coin3=createSprite(100,220);
coin3.setAnimation("coin");
coin3.scale=0.2;
var coin4=createSprite(100,350);
coin4.setAnimation("coin");
coin4.scale=0.2;
var coin5=createSprite(100,35);
coin5.setAnimation("coin");
coin5.scale=0.2;
//coins

var pikachu=createSprite(30,36);
pikachu.setAnimation("pikachu start");
pikachu.scale=0.15;

var ash=createSprite(356,330);
ash.setAnimation("ash");
ash.scale=0.25;
//characters

var Lives=5;
var Coins=0;
//score

var lives=createSprite(316,36);
//lives sprite
var coin=createSprite(316,65);
coin.setAnimation("coin1");
coin.scale=0.07;
yveltal.setVelocity(0,8);
trball.setVelocity(5,0);
function draw() {
background("cyan");
 createEdgeSprites();
 
 pikachu.collide(edges);
 pikachu.collide(floor1);
pikachu.collide(floor2);
pikachu.collide(floor3);
pikachu.collide(floor4);
pikachu.collide(floor5);
pikachu.collide(floor6);
pikachu.collide(floor7);
pikachu.collide(floor8);

fill("black");
textSize(25);
text(Coins,280, 73);


 if (keyDown(RIGHT_ARROW)) {
   pikachu.setAnimation("pikachu run");
   pikachu.x=pikachu.x+10;
 }
 if (keyWentUp(RIGHT_ARROW)) {
   pikachu.setAnimation("pikachu start");
 }
if (keyDown(LEFT_ARROW)) {
   pikachu.setAnimation("pikachu run_copy_1");
   pikachu.x=pikachu.x-10;
 }
 if (keyWentUp(LEFT_ARROW)) {
   pikachu.setAnimation("pikachu start");
 }
 if (keyDown(DOWN_ARROW)) {
   pikachu.setAnimation("pikachu fly");
   pikachu.y=pikachu.y+10;
}
 if (keyWentUp(DOWN_ARROW)) {
   pikachu.setAnimation("pikachu start");
 }
 if (keyDown(UP_ARROW)) {
   pikachu.setAnimation("pikachu fly");
   pikachu.y=pikachu.y-10;
}
 if (keyWentUp(UP_ARROW)) {
   pikachu.setAnimation("pikachu start");
 }

if (pikachu.isTouching(coin1)) {
  playSound("assets/category_bell/notification_4.mp3");
  coin1.x=100000;
Coins=Coins+1;
}

if (pikachu.isTouching(coin2)) {
 playSound("assets/category_bell/bells_win.mp3");
  coin2.x=100000;
Coins=Coins+1;
}
if (pikachu.isTouching(coin3)) {
 playSound("assets/category_bell/notification_4.mp3");
  coin3.x=100000;
Coins=Coins+1;
}
if (pikachu.isTouching(coin4)) {
  playSound("assets/category_bell/notification_4.mp3");
  coin4.x=100000;
Coins=Coins+1;
}
if (pikachu.isTouching(coin5)) {
  playSound("assets/category_bell/notification_4.mp3");
  coin5.x=100000;
Coins=Coins+1;
}   
if (pikachu.isTouching(ash)) {
  trball.setVelocity(0,0);
      textSize(40);
      text("You Win🏆",200,200);
      
    }
    
trball.bounceOff(rightEdge);
trball.bounceOff(leftEdge);

if (pikachu.isTouching(trball)||pikachu.isTouching(yveltal)) {
playSound("assets/category_digital/ping.mp3");
reset();
}

if (Lives===5){
lives.setAnimation("5 Lives");
lives.scale=0.2;
}

if (Lives===5){
lives.setAnimation("5 Lives");
lives.scale=0.2;
}

if (Lives===4){
lives.setAnimation("4 Lives");
lives.scale=0.2;
}

if (Lives===3){
lives.setAnimation("3 Lives");
lives.scale=0.2;
}

if (Lives===2){
lives.setAnimation("2 Lives");
lives.scale=0.2;
}

if (Lives===1){
lives.setAnimation("1 Live");
lives.scale=0.2;
}

if (Lives===0){
  trball.setVelocity(0,0);restart();
if (keyDown("r")) {
    pressR();
  }
    
 
    
}
 drawSprites();

}

function reset() {
  pikachu.x=30;
  pikachu.y=36;
  coin1.x=40;
  coin2.x=370;
  coin3.x=100;
  coin4.x=100;
  coin5.x=100;
Coins=0;
Lives=Lives-1;
  
}

function restart(){
   pikachu.x=30;
  pikachu.y=36;
 fill("black");
 textSize(50);
  text("GAME OVER", 100, 200);
  fill("black");
  textSize(20);
text("Press R to restart",100,100);
  Lives=0;
  Coins=0;
}

function pressR() {
   Lives=5;
  Coins=0;
trball.setVelocity(5,0);
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
