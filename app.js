// Draw ruler marks based on screen width
function buildRuler(){
  const ruler = document.getElementById('ruler');
  ruler.innerHTML = "";
  const width = ruler.offsetWidth;
  const pxPerCm = width / 10; // assume full width = 10 cm visual scale
  for(let i=0;i<=10;i++){
    const x = i * pxPerCm;
    const tick = document.createElement('div');
    tick.className = 'tick';
    tick.style.left = x + 'px';
    tick.style.height = (i % 1 === 0 ? '30px' : '15px');
    ruler.appendChild(tick);

    const label = document.createElement('div');
    label.className = 'label';
    label.innerText = i + ' cm';
    label.style.left = x + 'px';
    ruler.appendChild(label);
  }
}

window.addEventListener('resize', buildRuler);
window.addEventListener('load', buildRuler);
