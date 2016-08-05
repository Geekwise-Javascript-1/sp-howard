var btn = document.createElement('button');
btn.innerHTML = "Click Me";
document.body.appendChild(btn);

btn.onclick = function() {
  console.log(prompt('Enter your phone number'));
}
