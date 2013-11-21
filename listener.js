var recognizing = false;


var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = false;
recognition.lang = "en";

// show listening status
recognition.onstart = function(){
    recognizing = true;
    start_img.src = 'https://raw.github.com/GoogleChrome/webplatform-samples/master/webspeechdemp/mic-animate.gif';
}

// swallow the error
recognition.onerror = function(event){}

// hide listening status
recognition.end = function(){}

recognition.onresult = function(event){
    alert('test')
    for (var i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
            alert(event.results[i][0].transcript);
        }
    }
}

function startButton(event) {
    if(recognizing){
        recognition.stop();
        return;
    }
    final_transcript = '';
    recognition.start();
    ignore_onend = false;
    start_img.src = "https://raw.github.com/GoogleChrome/webplatform-samples/master/webspeechdemo/mic-slash.gif";
}

mic_button = '<button style="border: 0;background-color:transparent;padding: 0;float:left;" onclick="startButton(event)">' +
'<img src="https://raw.github.com/GoogleChrome/webplatform-samples/master/webspeechdemo/mic.gif">' +
'</button>'
$('body > h1:first').prepend(mic_button)
