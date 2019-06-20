  
  //音声APIの初期定義
  SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'ja-JP';

  //フェードインの定義
  let fadein =() => {
    //$('.mirror_area').css('opacity','1');
    $('.mirror_area').css({'visibility' : 'visible','animation-name' : 'fadeIn','animation-duration' : '10s'});
    $('.mike_area').css('opacity','0');
  } 

  recognition.onresult = (event) => {
    console.log(event.results);
    let text = event.results[0][0].transcript;
    console.log(text);
    //鏡よ鏡...
    if(text == "カガミヨカガミ"){
          console.log("呼んだ？");
          fadein();
    }
  }

  //マイクアイコンのクリックイベント
$(function() {
  //ボタンをクリックしたら発動
  $('.mike_pic').click(function() {
    //クリックしたらアラートを表示
    console.log("録音開始");
    recognition.start();
  });
});

