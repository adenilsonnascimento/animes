const painel = document.querySelectorAll('.painel')

painel.forEach(painel => {
    painel.addEventListener('click', () => {
        removeActiveClasses()
        painel.classList.add('ativo')
    })
})

function removeActiveClasses() {
    painel.forEach(painel => {
        painel.classList.remove('ativo')  
    })
}

const carregando = document.querySelector('.carregando')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  carregando.innerText = `${load}%` 
  carregando.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

const ladoEsquerdo = document.querySelector('.ladoEsquerdo');
const ladoDireito = document.querySelector('.ladoDireito');
const container = document.querySelector('.containerDois');

ladoEsquerdo.addEventListener('mouseenter', () => container.classList.add('hover-left'));
ladoEsquerdo.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

ladoDireito.addEventListener('mouseenter', () => container.classList.add('hover-right'));
ladoDireito.addEventListener('mouseleave', () => container.classList.remove('hover-right'));
