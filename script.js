let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang="English"
    window.speechSynthesis.speak(text_speak);
}
let day = new Date();
let hour = day.getHours();
let minute = day.getMinutes();
let second = day.getSeconds();
function wishMe(){

 if(hour>0 && hour<12){
    speak("GOOD MORNING PRABHAT AND FAMILY ..");
    speak(`abhi time hua h ${hour , minute}`)
 }
  else if(hour>=12 && hour<16){
    speak("GODD AFTERNOON GUYS ..");
  }
  else if(hour>=16 && hour<20){
    speak("GOOD EVENING GUYS .. HAVE FUN ....")
  }
  else{
speak("GOOD NIGHT GUYS .....");
  }
}
window.addEventListener("load" ,()=>{
    // wishMe();
})
let speechRecog = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecog();
recognition.onresult = (event)=>{
    let currentIndex = event.resultIndex;
   let transcript =  event.results[currentIndex][0].transcript;
   content.innerText = transcript;
//    speak(transcript);
takeCommand(transcript.toLowerCase());
// console.log(event);
};
btn.addEventListener("click" , ()=>{
    recognition.start()
    btn.style.display="none";
    voice.style.display="block";
})

function takeCommand(message){
    btn.style.display="flex";
    voice.style.display="none";
if(message.includes("hello")){
    speak("HELLO SIR wAT CAN I HELP YOU..")
}
else if ( message.includes("who are you?") || message.includes("hu r u")){
    speak("i am a virtul assistence , create by Shiva Payasi")
}
else if(message.includes("open youtube")){
    speak("opening youtube !!");
    window.open("https://youtube.com");
}
else if(message.includes("open facebook")){
    speak("opening facebook !!");
    window.open("https://facebook.com");
}
else if(message.includes("open instagram")){
    speak("opening instagram !!");
    window.open("https://instagram.com");
}
else if(message.includes("open google")){
    speak("opening google !!");
    window.open("https://google.com");
}
else if(message.includes("open")){
    speak(`opening ${message}`)
    window.open(`https://www.google.com/search?q=${message}`)
}else if(message.includes("what is time")){
    let time =[hour , minute ,second]
    speak(time.toString());
}
else{
    speak(`This is what i found in internate regarding ${message}`)
    window.open(`https://www.google.com/search?q=${message}`);

}
}