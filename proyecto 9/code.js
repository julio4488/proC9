var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["69cf6c8e-194a-4737-a422-12f0ad0795c5","a2394d4c-2999-448b-98c2-0138710be43a","5c29354d-a5e8-4b2c-8459-47855490f308","0702b833-af01-496b-ac47-69916c0d10e6","14847dea-27e4-407e-aac7-5f2f5028b32b","87db23e5-d1ee-4e06-80af-1629a830e564","b90df9b8-07e3-409d-a5a7-7e578d540f16","47279901-102e-4c8c-a2c0-94d263316ac8","77e15739-fbc2-4fe8-bc4d-6efe26236d8a","fb4589c9-2d0a-4082-ab6f-7464048db520","0091c005-3b79-40e2-9ca4-6a234537ca0d","f8823012-1f66-430d-934d-5dc9e59513ad","f8160286-676d-41d1-a0e1-1bec8dd3b084","b57ff9a6-db6b-4774-990e-e2b3885df85b","79a0e1a1-7b4a-4d42-bd22-62f266e4d1eb","5dc38a8f-465a-43cc-8d1d-38ce9640fbc1","f84dc524-75c7-4117-9187-42b4ea553220","128633e6-5a97-4a13-bed3-e7173c09b0ce","21900577-1378-4b10-b202-034a54776eb1","22f4b2f2-48a3-40be-a9ef-44b671734245","668bb0a1-56ad-4758-8e79-799b23814c5d","f67fe7d9-01e5-4f63-bcac-88633d847653"],"propsByKey":{"69cf6c8e-194a-4737-a422-12f0ad0795c5":{"name":"monstruo1","sourceUrl":"assets/api/v1/animation-library/gamelab/lxiETVheIZF7OMSXgUbVr62rhAq5Q6rR/category_fantasy/monster_05.png","frameSize":{"x":196,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"lxiETVheIZF7OMSXgUbVr62rhAq5Q6rR","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":196,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lxiETVheIZF7OMSXgUbVr62rhAq5Q6rR/category_fantasy/monster_05.png"},"a2394d4c-2999-448b-98c2-0138710be43a":{"name":"monstruo2","sourceUrl":"assets/api/v1/animation-library/gamelab/sbHblZVG76lVwv_v9hNs_iyDImtykKTh/category_fantasy/monster_07.png","frameSize":{"x":339,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"sbHblZVG76lVwv_v9hNs_iyDImtykKTh","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":339,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/sbHblZVG76lVwv_v9hNs_iyDImtykKTh/category_fantasy/monster_07.png"},"5c29354d-a5e8-4b2c-8459-47855490f308":{"name":"monstruo3","sourceUrl":"assets/api/v1/animation-library/gamelab/e.a8plNBkpf0D3VC0w1G6Z1UKaQSefBW/category_fantasy/monster_12.png","frameSize":{"x":195,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"e.a8plNBkpf0D3VC0w1G6Z1UKaQSefBW","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":195,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/e.a8plNBkpf0D3VC0w1G6Z1UKaQSefBW/category_fantasy/monster_12.png"},"0702b833-af01-496b-ac47-69916c0d10e6":{"name":"monstruo4","sourceUrl":"assets/api/v1/animation-library/gamelab/SMCJmpJ0VRui7g3k8aU5.C4d_Qa_cc5./category_fantasy/monster_11.png","frameSize":{"x":252,"y":385},"frameCount":1,"looping":true,"frameDelay":2,"version":"SMCJmpJ0VRui7g3k8aU5.C4d_Qa_cc5.","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":252,"y":385},"rootRelativePath":"assets/api/v1/animation-library/gamelab/SMCJmpJ0VRui7g3k8aU5.C4d_Qa_cc5./category_fantasy/monster_11.png"},"14847dea-27e4-407e-aac7-5f2f5028b32b":{"name":"monstruo5","sourceUrl":"assets/api/v1/animation-library/gamelab/na7i8b5CoI4YTMNG8sXR_36Es0CfzvFd/category_fantasy/monster_13.png","frameSize":{"x":248,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"na7i8b5CoI4YTMNG8sXR_36Es0CfzvFd","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/na7i8b5CoI4YTMNG8sXR_36Es0CfzvFd/category_fantasy/monster_13.png"},"87db23e5-d1ee-4e06-80af-1629a830e564":{"name":"monstruo6","sourceUrl":"assets/api/v1/animation-library/gamelab/jdIdcxg7BWRjFZ5PLbgJwr4.OcMu5k9m/category_fantasy/monster_15.png","frameSize":{"x":161,"y":373},"frameCount":1,"looping":true,"frameDelay":2,"version":"jdIdcxg7BWRjFZ5PLbgJwr4.OcMu5k9m","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":161,"y":373},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jdIdcxg7BWRjFZ5PLbgJwr4.OcMu5k9m/category_fantasy/monster_15.png"},"b90df9b8-07e3-409d-a5a7-7e578d540f16":{"name":"monstruo7","sourceUrl":"assets/api/v1/animation-library/gamelab/oD34RkIwNuJFFF1cmNyy31uklFh8lNPL/category_fantasy/monster_16.png","frameSize":{"x":208,"y":366},"frameCount":1,"looping":true,"frameDelay":2,"version":"oD34RkIwNuJFFF1cmNyy31uklFh8lNPL","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":208,"y":366},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oD34RkIwNuJFFF1cmNyy31uklFh8lNPL/category_fantasy/monster_16.png"},"47279901-102e-4c8c-a2c0-94d263316ac8":{"name":"monstruo8","sourceUrl":"assets/api/v1/animation-library/gamelab/2de9sEWYWWzKx26s6d8L64mN3b5hcuSw/category_fantasy/monster_18.png","frameSize":{"x":292,"y":385},"frameCount":1,"looping":true,"frameDelay":2,"version":"2de9sEWYWWzKx26s6d8L64mN3b5hcuSw","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":292,"y":385},"rootRelativePath":"assets/api/v1/animation-library/gamelab/2de9sEWYWWzKx26s6d8L64mN3b5hcuSw/category_fantasy/monster_18.png"},"77e15739-fbc2-4fe8-bc4d-6efe26236d8a":{"name":"monstruo9","sourceUrl":"assets/api/v1/animation-library/gamelab/IZygDeyZWWN7cOC674xagrMabMM2S.Yf/category_fantasy/monster_19.png","frameSize":{"x":192,"y":358},"frameCount":1,"looping":true,"frameDelay":2,"version":"IZygDeyZWWN7cOC674xagrMabMM2S.Yf","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":192,"y":358},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IZygDeyZWWN7cOC674xagrMabMM2S.Yf/category_fantasy/monster_19.png"},"fb4589c9-2d0a-4082-ab6f-7464048db520":{"name":"cave","sourceUrl":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png"},"0091c005-3b79-40e2-9ca4-6a234537ca0d":{"name":"niño","sourceUrl":"assets/api/v1/animation-library/gamelab/FW0CI4iuqpnTrc1d6kSj3miix6MgU7I6/category_faces/pupilportrait_03.png","frameSize":{"x":282,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"FW0CI4iuqpnTrc1d6kSj3miix6MgU7I6","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/FW0CI4iuqpnTrc1d6kSj3miix6MgU7I6/category_faces/pupilportrait_03.png"},"f8823012-1f66-430d-934d-5dc9e59513ad":{"name":"diamante","sourceUrl":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png","frameSize":{"x":400,"y":383},"frameCount":1,"looping":true,"frameDelay":2,"version":"dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":383},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png"},"f8160286-676d-41d1-a0e1-1bec8dd3b084":{"name":"monster1","sourceUrl":"assets/api/v1/animation-library/gamelab/Mz9t_vVZ_K7DL7e61UbY1ivgFlG0hkqh/category_fantasy/alien_04.png","frameSize":{"x":347,"y":392},"frameCount":1,"looping":true,"frameDelay":2,"version":"Mz9t_vVZ_K7DL7e61UbY1ivgFlG0hkqh","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":347,"y":392},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Mz9t_vVZ_K7DL7e61UbY1ivgFlG0hkqh/category_fantasy/alien_04.png"},"b57ff9a6-db6b-4774-990e-e2b3885df85b":{"name":"monster2","sourceUrl":"assets/api/v1/animation-library/gamelab/rpGRRBbPHqXkhxRDkSnlEfGzNymHea6Q/category_fantasy/alien_15.png","frameSize":{"x":343,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"rpGRRBbPHqXkhxRDkSnlEfGzNymHea6Q","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":343,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/rpGRRBbPHqXkhxRDkSnlEfGzNymHea6Q/category_fantasy/alien_15.png"},"79a0e1a1-7b4a-4d42-bd22-62f266e4d1eb":{"name":"monster3","sourceUrl":"assets/api/v1/animation-library/gamelab/qGpeJJg0r_caGeHtgyB2vvvKJBU6ApVC/category_fantasy/alien_14.png","frameSize":{"x":329,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"qGpeJJg0r_caGeHtgyB2vvvKJBU6ApVC","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":329,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qGpeJJg0r_caGeHtgyB2vvvKJBU6ApVC/category_fantasy/alien_14.png"},"5dc38a8f-465a-43cc-8d1d-38ce9640fbc1":{"name":"monster4","sourceUrl":"assets/api/v1/animation-library/gamelab/YZJ8zB597zBIgcZIO8zOE0S75e918A2P/category_fantasy/alien_11.png","frameSize":{"x":393,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"YZJ8zB597zBIgcZIO8zOE0S75e918A2P","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YZJ8zB597zBIgcZIO8zOE0S75e918A2P/category_fantasy/alien_11.png"},"f84dc524-75c7-4117-9187-42b4ea553220":{"name":"monster5","sourceUrl":"assets/api/v1/animation-library/gamelab/nVBK1OnWogFitvGAbWs4ey1tFRWCwaVl/category_fantasy/alien_01.png","frameSize":{"x":365,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"nVBK1OnWogFitvGAbWs4ey1tFRWCwaVl","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nVBK1OnWogFitvGAbWs4ey1tFRWCwaVl/category_fantasy/alien_01.png"},"128633e6-5a97-4a13-bed3-e7173c09b0ce":{"name":"cave2","sourceUrl":"assets/api/v1/animation-library/gamelab/E0idw.1TCsifYp9.wBCGiUEEOv6cU3qn/category_backgrounds/background_landscape04.png","frameSize":{"x":400,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"E0idw.1TCsifYp9.wBCGiUEEOv6cU3qn","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/E0idw.1TCsifYp9.wBCGiUEEOv6cU3qn/category_backgrounds/background_landscape04.png"},"21900577-1378-4b10-b202-034a54776eb1":{"name":"niño2","sourceUrl":"assets/api/v1/animation-library/gamelab/_pnzOaMejiNWn0gEbHtT8nuRGsq22uqi/category_people/brown_sweater_hand_in_pocket.png","frameSize":{"x":126,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"_pnzOaMejiNWn0gEbHtT8nuRGsq22uqi","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":126,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_pnzOaMejiNWn0gEbHtT8nuRGsq22uqi/category_people/brown_sweater_hand_in_pocket.png"},"22f4b2f2-48a3-40be-a9ef-44b671734245":{"name":"diamante2","sourceUrl":"assets/api/v1/animation-library/gamelab/1ve8xcSUavvVvLC6Vl.mojAV9PqyYTDU/category_stickers/sticker_14.png","frameSize":{"x":246,"y":192},"frameCount":1,"looping":true,"frameDelay":2,"version":"1ve8xcSUavvVvLC6Vl.mojAV9PqyYTDU","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":246,"y":192},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1ve8xcSUavvVvLC6Vl.mojAV9PqyYTDU/category_stickers/sticker_14.png"},"668bb0a1-56ad-4758-8e79-799b23814c5d":{"name":"pueblo","sourceUrl":"assets/api/v1/animation-library/gamelab/eoh_kg5NP1Kj0MRPa_OrPsAFMWthREZl/category_backgrounds/bg_landscape06.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"eoh_kg5NP1Kj0MRPa_OrPsAFMWthREZl","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/eoh_kg5NP1Kj0MRPa_OrPsAFMWthREZl/category_backgrounds/bg_landscape06.png"},"f67fe7d9-01e5-4f63-bcac-88633d847653":{"name":"lol","sourceUrl":"assets/api/v1/animation-library/gamelab/wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe/category_video_games/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe/category_video_games/textGameOver.png"}}};
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

var life = 0;

var cave = createSprite (200,200);
cave.setAnimation ("cave");

var  monstruo1 = createSprite(100,100);
monstruo1.setAnimation("monstruo1");
monstruo1.scale = 0.2;

var  monstruo2 = createSprite(200,100);
monstruo2.setAnimation("monstruo2");
monstruo2.scale = 0.2;

var  monstruo3 = createSprite(300,100);
monstruo3.setAnimation("monstruo3");
monstruo3.scale = 0.2;

var  monstruo4 = createSprite(100,200);
monstruo4.setAnimation("monstruo4");
monstruo4.scale = 0.2;

var  monstruo5 = createSprite(200,200);
monstruo5.setAnimation("monstruo5");
monstruo5.scale = 0.2;

var  monstruo6 = createSprite(300,200);
monstruo6.setAnimation("monstruo6");
monstruo6.scale = 0.2;

var  monstruo7 = createSprite(100,300);
monstruo7.setAnimation("monstruo7");
monstruo7.scale = 0.2;

var  monstruo8 = createSprite(200,300);
monstruo8.setAnimation("monstruo8");
monstruo8.scale = 0.2;

var  monstruo9 = createSprite(300,300);
monstruo9.setAnimation("monstruo9");
monstruo9.scale = 0.2;

var elElegido = createSprite(50,350);
elElegido.setAnimation("niño");
elElegido.scale = 0.1;

var diamante = createSprite(350,50);
diamante.setAnimation("diamante");
diamante.scale = 0.1;

var gameState = "inicio";

function draw() {
  
createEdgeSprites();
 background("grey");
  
  if (gameState == "inicio") {
    
    monstruo1.visible = false;
    monstruo2.visible = false;
    monstruo3.visible = false;
    monstruo4.visible = false;
    monstruo5.visible = false;
    monstruo6.visible = false;
    monstruo7.visible = false;
    monstruo8.visible = false;
    monstruo9.visible = false;
    elElegido.visible = false;
    diamante.visible = false;
    cave.visible = false;
    
    textSize(20);
    fill ("white");
    text("bienvenido. el Pueblo de peter fue", 15, 48);
    text ("maldecido y ahora esta condenado a", 15,68);
    text ("vivir en eterna oscuridad, pero ahora", 15, 88);
    text ("peter descubrio que el es elegido por una", 15, 108);
    text ("antigua profesia dictada por los antiguos", 15, 128);
    text ("fundadores del pueblo, y ahora debes", 15, 148);
    text ("ayudarlo a encontrar tres diamantes en ", 15, 168);
    text ("difernetes dimensiones para salvar a su", 15, 188);
    text ("pueblo, pero ten cuidado ya que en el",15,208);
    text ("camino podras encontrarte con criaturas", 15, 228);
    text ("aterradoras de la noche.", 15, 248);
    text ("para moverte debes presionar las flechas", 15, 278);
    text ("del teclado y para avanzar debes agarrar", 15, 298);
    text ("el diamante", 15, 318);
    
    textSize (30);
    text("Presiona enter para jugar", 15, 358);
    
    if (keyDown ("enter")) {
      gameState = "nivel 1";
    }
  }
  
  if (gameState == "nivel 1") {
    
    
    monstruo1.visible = true;
    monstruo2.visible = true;
    monstruo3.visible = true;
    monstruo4.visible = true;
    monstruo5.visible = true;
    monstruo6.visible = true;
    monstruo7.visible = true;
    monstruo8.visible = true;
    monstruo9.visible = true;
    elElegido.visible = true;
    diamante.visible = true;
    cave.visible = true;
    
    movimientosPeter();
    
    monstruo1.velocityX = 4; 
    if (monstruo1.collide(rightEdge)) {
      
      monstruo1.destroy();
      monstruo1 = createSprite (0,100);
      monstruo1.setAnimation("monstruo1");
      monstruo1.scale = 0.2;
    }
    
     monstruo3.velocityX = -4; 
    if (monstruo3.collide(leftEdge)) {
      
      monstruo3.destroy();
      monstruo3 = createSprite (400,100);
      monstruo3.setAnimation("monstruo3");
      monstruo3.scale = 0.2;
    }
    
     monstruo5.velocityX = 4; 
    if (monstruo5.collide(rightEdge)) {
      
      monstruo5.destroy();
      monstruo5 = createSprite (0,200);
      monstruo5.setAnimation("monstruo5");
      monstruo5.scale = 0.2;
    }
    
     monstruo7.velocityX = 4; 
    if (monstruo7.collide(rightEdge)) {
      
      monstruo7.destroy();
      monstruo7 = createSprite (0,300);
      monstruo7.setAnimation("monstruo7");
      monstruo7.scale = 0.2;
    }
    
     monstruo9.velocityX = -3; 
    if (monstruo7.collide(leftEdge)) {
      
      monstruo9.destroy();
      monstruo9 = createSprite (400,300);
      monstruo9.setAnimation("monstruo9");
      monstruo9.scale = 0.2;
    }
    
     monstruo4.velocityY = 4; 
    if (monstruo4.collide(bottomEdge)) {
      
      monstruo4.destroy();
      monstruo4 = createSprite (100,0);
      monstruo4.setAnimation("monstruo4");
      monstruo4.scale = 0.2;
    }
  
       monstruo2.velocityY = 3; 
    if (monstruo2.collide(bottomEdge)) {
      
      monstruo2.destroy();
      monstruo2 = createSprite (200,0);
      monstruo2.setAnimation("monstruo2");
      monstruo2.scale = 0.2;
    }
  
       monstruo6.velocityY = -4; 
    if (monstruo6.collide(topEdge)) {
      
      monstruo6.destroy();
      monstruo6 = createSprite (300,400);
      monstruo6.setAnimation("monstruo6");
      monstruo6.scale = 0.2;
    }
  
       monstruo8.velocityY = -3; 
    if (monstruo8.collide(topEdge)) {
      
      monstruo8.destroy();
      monstruo8 = createSprite (200,400);
      monstruo8.setAnimation("monstruo8");
      monstruo8.scale = 0.2;
    }
    
    if (elElegido.collide(monstruo1)) {
      
      life = life +1 ;
      elElegido.destroy ();
      elElegido = createSprite(50,350);
      elElegido.setAnimation("niño");
      elElegido.scale = 0.1;
      
    }
    
    if (elElegido.collide(monstruo2)) {
      
      life = life +1 ;
      elElegido.destroy ();
      elElegido = createSprite(50,350);
      elElegido.setAnimation("niño");
      elElegido.scale = 0.1;
      
    }
    
    if (elElegido.collide(monstruo3)) {
      
      life = life +1 ;
      elElegido.destroy ();
      elElegido = createSprite(50,350);
      elElegido.setAnimation("niño");
      elElegido.scale = 0.1;
      
    }
    
    if (elElegido.collide(monstruo4)) {
      
      life = life +1 ;
      elElegido.destroy ();
      elElegido = createSprite(50,350);
      elElegido.setAnimation("niño");
      elElegido.scale = 0.1;
      
    }
    
    if (elElegido.collide(monstruo5)) {
      
      life = life +1 ;
      elElegido.destroy ();
      elElegido = createSprite(50,350);
      elElegido.setAnimation("niño");
      elElegido.scale = 0.1;
      
    }
    
    if (elElegido.collide(monstruo6)) {
      
      life = life +1 ;
      elElegido.destroy ();
      elElegido = createSprite(50,350);
      elElegido.setAnimation("niño");
      elElegido.scale = 0.1;
      
    }
    
    if (elElegido.collide(monstruo7)) {
      
      life = life +1 ;
      elElegido.destroy ();
      elElegido = createSprite(50,350);
      elElegido.setAnimation("niño");
      elElegido.scale = 0.1;
      
    }
    
    if (elElegido.collide(monstruo8)) {
      
      life = life +1 ;
      elElegido.destroy ();
      elElegido = createSprite(50,350);
      elElegido.setAnimation("niño");
      elElegido.scale = 0.1;
      
    }
    
    if (elElegido.collide(monstruo9)) {
    
      elElegido.destroy ();
      elElegido = createSprite(50,350);
      elElegido.setAnimation("niño");
      elElegido.scale = 0.1;
      
    }
    
   
      if (elElegido.collide(diamante)) {
        
        gameState = "final";
      }
  

       if (gameState == "final") {
         
           monstruo1.visible = false;
    monstruo2.visible = false;
    monstruo3.visible = false;
    monstruo4.visible = false;
    monstruo5.visible = false;
    monstruo6.visible = false;
    monstruo7.visible = false;
    monstruo8.visible = false;
    monstruo9.visible = false;
    elElegido.visible = false;
    diamante.visible = false;
    cave.visible = false;
    
    var pueblo = createSprite(200,200);
    pueblo.setAnimation("pueblo");
    
    elElegido = createSprite(200,350);
    elElegido.setAnimation ("niño");
    elElegido.scale = 0.4;
    
    var lol = createSprite(200,125);
    lol.setAnimation("lol");
    
   
       }
       
         
  }
  drawSprites();

}

function movimientosPeter() { 
  
    if (keyDown(LEFT_ARROW)) {
      elElegido.velocityX = -5;
    }
    
       if (keyWentUp(LEFT_ARROW)) {
   
    elElegido.velocityX = 0;
    
  }
  
     if (keyDown(UP_ARROW)) {
      elElegido.velocityY = -5;
    }
    
       if (keyWentUp(UP_ARROW)) {
   
    elElegido.velocityY = 0;
    
  }
  
     if (keyDown(RIGHT_ARROW)) {
      elElegido.velocityX = 5;
    }
    
       if (keyWentUp(RIGHT_ARROW)) {
   
    elElegido.velocityX = 0;
    
  }
  
     if (keyDown(DOWN_ARROW)) {
      elElegido.velocityY = 5;
    }
    
       if (keyWentUp(DOWN_ARROW)) {
   
    elElegido.velocityY = 0;
    
  
  }

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
