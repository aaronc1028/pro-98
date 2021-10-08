var SpeechRecognition=window.webkitSpeechRecognition
var recognition=new SpeechRecognition

function start(){
    recognition.start()
    document.getElementById("text1").innerHTML=""
}
recognition.onresult=function(event){
    console.log(event)
    console.log(event.results[0][0].transcript)
    var content=event.results[0][0].transcript
    document.getElementById("text1").innerHTML=content
}