var x =-1;
var y = 0;
var interval = setInterval( increment, 1000);
function increment(){
    x++;
    document.querySelector('h1#counter').textContent = x;
    y = 0;
}
increment();

document.getElementById("minus").addEventListener("click", function(){
  x--;
  document.querySelector('h1#counter').textContent = x;
});

document.getElementById("plus").addEventListener("click", function(){
  x++;
  document.querySelector('h1#counter').textContent = x;
});

document.getElementById("heart").addEventListener("click", function(){
  y++;
  var li = document.createElement("li");
  var node = document.createTextNode(x + " has been liked " + y + " time(s).")
  var likes = document.querySelector('.likes')
  var lastLike = document.querySelector('.likes').lastChild
  li.appendChild(node);
  if(y>1){
   lastLike.replaceWith(li)
  } 
  else {
    likes.appendChild(li);
  }
});

document.getElementById("pause").addEventListener("click", function(){
  if(document.querySelector('#pause').innerText == "pause") {
    clearInterval(interval)
    document.querySelector('#pause').innerText = "resume"
    document.getElementById("minus").disabled = true;
    document.getElementById("plus").disabled = true;
    document.getElementById("heart").disabled = true;
    document.getElementById("submit").disabled = true;
  } else {
    interval = setInterval( increment, 1000);
    document.querySelector('#pause').innerText = "pause"
    document.getElementById("minus").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("heart").disabled = false;
    document.getElementById("submit").disabled = false;
  }
});

document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault();
  var comment = document.querySelector('input#comment-input').value
  var commentsList = document.querySelector('.comments')
  var p = document.createElement("p");
  var node = document.createTextNode(comment)
  p.appendChild(node);
  commentsList.appendChild(p);
  document.querySelector('input#comment-input').value = ''
});