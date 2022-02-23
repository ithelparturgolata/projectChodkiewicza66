const slideContainer = document.querySelector('.container');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const indicatorParents = document.querySelector('.dots')

let slides = document.querySelectorAll('.slide');// возвращает нам список элементов и мы можем получить доступ к этим элементам как к массиву
let index = 1;
let newIndex = 0;
let slideId;
let blockSlide;

const firstClone = slides[0].cloneNode(true)  // Метод позволяет нам сделать клон html элемента который внутри скобок находится
const lastClone = slides[slides.length -1].cloneNode(true);

firstClone.id = 'first-clone'
lastClone.id = 'last-clone'

slide.append(firstClone);  //Размещаем последний клон на начало слайда
slide.prepend(lastClone);  //Размещаем первый клон на конец слайда
const slidesLenght = slides.length +  2
const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * newIndex}px)`;

const getSlides = ()=>slides = document.querySelectorAll('.slide');

slide.addEventListener('transitionend', ()=>{
    slides = getSlides()
  if(slides[index].id ===firstClone.id){
    slide.style.transition = 'none'; //После клонирования обьекта мы запрещаем ей делать смещение в начало
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
     }
    if(slides[index].id ===lastClone.id){
    slide.style.transition = 'none'; //После клонирования обьекта мы запрещаем ей делать смещение в начало
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
     }
});
const moveToSlide = (kuda) => {  //кнопка двигающая назад
  if (blockSlide)  {
        return;
    }
    blockSlide = true;
    setTimeout(() => {
      blockSlide = false;
    }, 700);
    countClicks(kuda)

    document.querySelector('.dots .active').classList.remove('active')
    indicatorParents.children[newIndex].classList.add('active')
    if(kuda === 'vlevo') {
      if(index <= 0) return;
      index--;
    } else if(kuda === 'vpravo') {
      slides = getSlides();
      if(index >= slides.length -1) return;
        index++;
    }
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = '.7s';

}

function createDots() {
    for (i=0;i < slides.length; i++){
      let draw = document.createElement('li');
      indicatorParents.append(draw)
    }
  };
createDots()
indicatorParents.children[0].classList.add('active')

document.querySelectorAll('.dots li').forEach(function(indicator, ind){
  indicator.addEventListener('click',function(){
    index = ind;
    document.querySelector('.dots .active').classList.remove('active');
    indicator.classList.add('active');
    if(index >= slides.length -1) return;
    index++;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = '.7s';
  });
});
const countClicks = (kuda) => {
  if (kuda === 'vlevo') newIndex = newIndex == 0 ? (slidesLenght-3) : newIndex - 1
  else newIndex = newIndex == (slidesLenght-3) ? 0 : newIndex + 1
}



nextBtn.addEventListener('click', () => moveToSlide('vpravo'))
prevBtn.addEventListener('click', () => moveToSlide('vlevo'))
