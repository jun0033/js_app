// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){

  // ふわっ
  $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

//スクロールをするたびにアニメーションを行う設定  
$('.fadeInUpTrigger').on('inview', function(event, isInView) {
    if (isInView) {//表示領域に入った時
      $(this).addClass('animate__animated animate__fadeInUp');//クラス名が付与
    } else {//表示領域から出た時
      $(this).removeClass('animate__animated animate__fadeInUp');//クラス名が除去
    }
  });

//スクロールをしたら1度だけアニメーションをする設定
  $('.fadeInUpTriggerOnce').on('inview', function(event, isInView) {
    if (isInView) {//表示領域に入った時
      $(this).addClass('animate__animated animate__fadeInUp');//クラス名が付与
    }
  });

//違う動きを追加設定  
$('.fadeInDownTrigger').on('inview', function(event, isInView) {
    if (isInView) {//表示領域に入った時
      $(this).addClass('animate__animated animate__fadeInDown');//クラス名が付与
    } else {//表示領域から出た時
      $(this).removeClass('animate__animated animate__fadeInDown');//クラス名が除去
    }
  });
var bar = new ProgressBar.Line(splash_text, {//id名を指定
  easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
  duration: 1000,//時間指定(1000＝1秒)
  strokeWidth: 0.2,//進捗ゲージの太さ
  color: '#555',//進捗ゲージのカラー
  trailWidth: 0.2,//ゲージベースの線の太さ
  trailColor: '#bbb',//ゲージベースの線のカラー
  text: {//テキストの形状を直接指定       
    style: {//天地中央に配置
      position: 'absolute',
      left: '50%',
      top: '50%',
      padding: '0',
      margin: '-30px 0 0 0',//バーより上に配置
      transform:'translate(-50%,-50%)',
      'font-size':'1rem',
      color: '#fff',
    },
    autoStyleContainer: false //自動付与のスタイルを切る
  },
  step: function(state, bar) {
    bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
  }
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
  $("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});  

tippy('.cap', {//指定した要素にツールチップが出現
  placement: 'top-start',//ツールチップの表示位置⇒top、top-start、top-end、right、right-start、right-end、bottom、bottom-start、bottom-end、left、left-start、left-end。指定をしなくてもtopに表示
  animation: 'shift-toward-subtle',//ツールチップ出現の動き。動きを指定するにはhttps://unpkg.com/browse/tippy.js@5.0.3/animations/から任意の動きを選び<head>内に読み込むことが必要。使用できる動き⇒shift-away、shift-away-subtle、shift-away-extreme、shift-toward、shift-toward-subtle、shift-toward-extreme、scale、scale-subtle、scale-extreme、perspective、perspective-subtle、perspective-extreme。指定をしなくてもfadeで表示
  theme: 'light-border',//ツールチップのテーマの色。色を指定するにはhttps://unpkg.com/browse/tippy.js@5.0.3/themes/からテーマを選び<head>内に読み込んで指定する。テーマの種類⇒light、light-border、material、translucent。指定をしなくても黒色で表示
  duration: 200,//ツールチップの出現の速さをミリ秒単位で指定
}
)

$('#box1').on('inview', function(event, isInView) {
  if (isInView) {
    //要素が見えたときに実行する処理
    $("#box1 .count-up").each(function(){
      $(this).prop('Counter',0).animate({//0からカウントアップ
            Counter: $(this).text()
        }, {
        // スピードやアニメーションの設定
            duration: 2000,//数字が大きいほど変化のスピードが遅くなる。2000=2秒
            easing: 'swing',//動きの種類。他にもlinearなど設定可能
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
  }
});

$('#box2').on('inview', function(event, isInView) {
  if (isInView) {
    //要素が見えたときに実行する処理
    $("#box2 .count-down").each(function(){
       $(this).prop('Counter',10).animate({//10からカウントダウン
            Counter: $(this).text()
        }, {
        // スピードやアニメーションの設定
            duration: 1000,//数字が大きいほど変化のスピードが遅くなる。1000=1秒
            easing: 'swing',//動きの種類。他にもlinearなど設定可能
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
  }
});

$('#box3').on('inview', function(event, isInView) {
  if (isInView) {
    //要素が見えたときに実行する処理
    $("#box3 .count-up").each(function(){
      $(this).prop('Counter',0).animate({//0からカウントアップ
            Counter: $(this).text()
        }, {
        // スピードやアニメーションの設定
            duration: 2000,//数字が大きいほど変化のスピードが遅くなる。2000=2秒
            easing: 'swing',//動きの種類。他にもlinearなど設定可能
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
  }
});

$('#box4').on('inview', function(event, isInView) {
  if (isInView) {
    //要素が見えたときに実行する処理
    $("#box4 .count-up").each(function(){
      $(this).prop('Counter',0).animate({//0からカウントアップ
            Counter: $(this).text()
        }, {
        // スピードやアニメーションの設定
            duration: 2000,//数字が大きいほど変化のスピードが遅くなる。2000=2秒
            easing: 'swing',//動きの種類。他にもlinearなど設定可能
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
  }
});

$('.title').on('click', function() {//タイトル要素をクリックしたら
  $('.box').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる
    
  var findElm = $(this).next(".box");//タイトル直後のアコーディオンを行うエリアを取得
    
  if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
    $(this).removeClass('close');//クラス名を除去    
  }else{//それ以外は
    $('.close').removeClass('close'); //クラス名closeを全て除去した後
    $(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
    $(findElm).slideDown(500);//アコーディオンを開く
  }
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function(){
  $('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
  $(".open").each(function(index, element){ //openクラスを取得
    var Title =$(element).children('.title'); //openクラスの子要素のtitleクラスを取得
    $(Title).addClass('close');       ///タイトルにクラス名closeを付与し
    var Box =$(element).children('.box'); //openクラスの子要素boxクラスを取得
    $(Box).slideDown(500);          //アコーディオンを開く
  });
});

$(window).on('load',function(){
  $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});

//開閉ボタンを押した時には
$(".open-btn1").click(function () {
    $(this).toggleClass('btnactive');//.open-btnは、クリックごとにbtnactiveクラスを付与＆除去。1回目のクリック時は付与
    $("#search-wrap").toggleClass('panelactive');//#search-wrapへpanelactiveクラスを付与
  $('#search-text').focus();//テキスト入力のinputにフォーカス
});