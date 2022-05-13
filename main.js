var speechrecognition=window.webkitSpeechRecognition;
var recognition=new speechrecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
}
Webcam.set({
    width:400,
    height:350,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
});
}
function take_snapshot(){
    console.log(img_id)
    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'"/>';
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'"/>';
        }
    });
}
function speak(){
setTimeout(function()
{
    img_id="selfie1";
    take_snapshot();
    speak_data="taking your next selfie in 10 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 5000);
    setTimeout(function()
{
    img_id="selfie2";
    take_snapshot();
    speak_data="taking your next selfie in 10 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 5000);
}