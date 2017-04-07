// 背景色の設定
setBackdropColor("#5555ff");

//「円」の作成
var circle = new Circle({

  radius: random(20, 80), //20〜80の間で半径をランダムな数値に設定
  color: randomColor(), // ランダムなカラー値を設定
  x: randomX(), // X座標をランダムな値に設定
  y: randomY() // Y座標をランダムな値に設定
  
});


var timer = 10; // タイマーの初期値

// タイマーの表示用テキスト
var timerText = new Text({

  text: () => timer, // 表示用テキストの設定
  size: 62, // テキストサイズを設定
  color: "#ffffff", // テキストカラーを設定
  textAlign: "center", // テキストの配置
  x: 0, // テキストのX座標
  y: maxY - 40 // テキストのY座標

});


var score = 0; // スコアの初期値

// スコアの表示用テキスト
var scoreText = new Text({

  text: () => 'スコア：' + score,
  size: 48, 
  color: "#ffffff", 
  textAlign: "center",
  x: maxX - 170,
  y: minY + 50

});

// 1秒毎の
every(1, "second", () => {

  if(timer === 0) {
  
    freeze(); //タイマーが０になったらプログラムを停止
    
  }
  else {
  
    // タイマーをカウントダウンする
    timer--;
    
  }

})

//「円」をクリック／タッチした時の処理
circle.onMouseDown(() => {

  circle.x = randomX();
  circle.y = randomY();
  circle.color = randomColor();
  circle.radius = random(20, 80);
  score++; // スコアを加算
  
})
