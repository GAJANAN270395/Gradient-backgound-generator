let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.querySelector('#gradient');
let copyButton = document.querySelector('#copy');

function setGradient() {
  body.style.background =
    'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
    css.textContent = body.style.background + ';';
}
if(css.textContent == ''){
  copyButton.style.display = 'none';
}

copyButton.addEventListener('click', ()=>{
  let copyCss = css.textContent;
  
  navigator.clipboard.writeText(copyCss);
  alert('CSS Copied'+ copyCss);
});

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
