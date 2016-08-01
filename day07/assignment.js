var btn = document.getElementById('btn'),
    input1 = document.getElementById('input1'),
    input2 = document.getElementById('input2'),
    span = document.getElementById('span');

btn.onclick = handleGoBtnClick;

function handleGoBtnClick() {
  input1.value = "Hello Javascript!";
  if()
  alert(input1.value);
  span.innerHTML = input2.value;
}
