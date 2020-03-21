function ageindays(){
    alert('Quote for today is: "Beauty lies in the eyes of beholder."');
};

function callme() {
    alert('Please Call my number as mentioned or Email me anytime. Thank you.');
};

/*
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  */

 // Simple Chatbot

 /* Simple chat bot
Author: Claudio Vidal
 */

 function chatbot(){
  var input = ""
  var input = prompt (
  "Hello, what can I do for you?")
  input = input.toLowerCase()
  if ( input == "nothing" ){
     input = prompt ("Come on, be more positive! What can I do for you?") 
     input = input.toLowerCase()
  }
  var input = input.replace("you","I")
  var input = input.replace("me", "you")
  var input = input.replace("my","your")
  var input = prompt ( "Why you think that " + input +"?") 
  input = input.toLowerCase()
  var insults=["stupid","moron","whore","bitch"]
  var insulted = insults .indexOf(input )
  if (insulted > -1)
    {
       var input = prompt("You are so angry, can you deal with that?") 
       input = input.toLowerCase()
    }
  nice = ["beauty","nice","smart","cleaver","cute","gorgeus"]
  var niced = nice.indexOf(input)
  if(niced > -1){
     var input = prompt ("You are so nice! I think that you are a nice person. Don't you?") 
     input = input.toLowerCase()
  }
  if (input =="because you are a chatbot"){
     input = prompt ("You are so smart! You really know me. Do you think the same?")
      input = input.toLowerCase()
  }
  input = prompt ("What's your favorite programming language?'")
  alert("I like "+ input + " too.") 
  var string = "javascript"; if(input.indexOf(string ) !== -1){
      alert("I like javascript too.")
  }
  
  alert("Pleased to chat with you. Good bye.")
 }


 function retirementAge(){
   var input = prompt('What is your birth year?');
   if(input == null){
     alert('Please enter a valid birth year. Thank you!');
   }
   else{
    var age = 2020 - input;
    alert(' You have ' + (65-age) + ' years until retirement.  ');
   }
   
 }



 //Quote Generator


/*
 var quotes = ['“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.” – Winston Churchill',
      ' “Don’t let yesterday take up too much of today.” – Will Rogers', 
        ' “You learn more from failure than from success. Don’t let it stop you. Failure builds character.” ',
        ' “It’s not whether you get knocked down, it’s whether you get up.” - Vince Lombardi', 
        '“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.” – Steve Jobs',
    '“People who are crazy enough to think they can change the world, are the ones who do.” – Rob Siltanen',
     '“The only limit to our realization of tomorrow will be our doubts of today.” – Franklin D. Roosevelt'];

 var pause=5000, p=0;
 function quote(){
    document.getElementById('slideshow').innerHTML = (quotes[p]);
    p = (p+1)%quotes.length;
    setTimeout(quote, pause);
};



 