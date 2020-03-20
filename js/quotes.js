var quotes = ['“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.” – Winston Churchill',
' “Don’t let yesterday take up too much of today.” – Will Rogers', 
  ' “You learn more from failure than from success. Don’t let it stop you. Failure builds character.” ',
  ' “It’s not whether you get knocked down, it’s whether you get up.” - Vince Lombardi', 
  '“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.” – Steve Jobs',
'“People who are crazy enough to think they can change the world, are the ones who do.” – Rob Siltanen',
'“The only limit to our realization of tomorrow will be our doubts of today.” – Franklin D. Roosevelt'];

var pause=5000, p=0;
window.onload = function sl(){
document.getElementById('slideshow').innerHTML = (quotes[p]);
p = (p+1)%quotes.length;
setTimeout(sl, pause);
};