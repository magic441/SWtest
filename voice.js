  
  SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'ja-JP';
  recognition.continuous = true; // これこれ

  recognition.onresult = (event) => {
    console.log(event.results);
  }

  recognition.start();
