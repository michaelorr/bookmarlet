var recognizing = false;
var ignore_onend;

var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = false;
recognition.lang = "en";

// show listening status
recognition.onstart = function(){
    recognizing = true;
    var start_img = $('#start_img')[0];
    start_img.src = 'https://raw.github.com/GoogleChrome/webplatform-samples/master/webspeechdemo/mic-animate.gif';
}

// swallow the error
recognition.onerror = function(event){
    if(event.error == 'no-speech') {
        recognition.start();
    }
}

// hide listening status
recognition.onend = function(){
    recognizing = false;
    var start_img = $('#start_img')[0];
    start_img.src = 'https://raw.github.com/GoogleChrome/webplatform-samples/master/webspeechdemo/mic-slash.gif';
}

recognition.onresult = function(event){
    for (var i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
            highlight(event.results[i][0].transcript);
        }
    }
}

function highlight(words) {
    words = words.split(' ');
    cards = $('.card_key>span:first-child');
            console.log(card);
            console.log(word);
    for (card in cards) {
        for (word in words) {
        }
    }

    console.log('trying to highlight: ' + word);
}

function startButton(event) {
    if(recognizing){
        recognition.stop();
        return;
    }
    recognition.start();
    ignore_onend = false;
    var start_img = $('#start_img')[0];
    start_img.src = "https://raw.github.com/GoogleChrome/webplatform-samples/master/webspeechdemo/mic-slash.gif";
}

mic_button = '<button style="border: 0;background-color:transparent;padding: 0;float:left;" onclick="startButton(event)">' +
'<img id="start_img" src="https://raw.github.com/GoogleChrome/webplatform-samples/master/webspeechdemo/mic.gif">' +
'</button>'
$('body > h1:first').prepend(mic_button)
