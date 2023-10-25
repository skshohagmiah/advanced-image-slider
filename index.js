const img = document.querySelector('.slider img');
const dotsContainer = document.querySelector('.dots');
const leftChevron = document.querySelector('.chevron-left');
const rightChevron = document.querySelector('.chevron-right');
const body = document.querySelector('body');

// console.log(img,dotsContainer,leftChevron,rightChevron)

const data = [
    'https://images.unsplash.com/photo-1682036654690-af8a6cfdfefe?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1679498815865-38e8f03c8ed5?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1680302206960-d63a946a34cf?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1656067335605-f77c04152854?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]

let index = 0;

function checkIndex(){

    if(index > data.length -1){
        index = 0;
    }
    if(index < 0){
        index = data.length - 1;
    }
    return index;
}

function renderImg(){
    img.style.filter = 'blur(10px)';
    setTimeout(() => {
        img.style.filter = 'none'; 
        img.src = data[index];
    }, 200);
}

leftChevron.addEventListener('click', (e) => {
    index--;
    index = checkIndex();
    renderImg();
    changeDots()

})

rightChevron.addEventListener('click', (e) => {
    index++;
    index = checkIndex();
    renderImg();
    changeDots()
   

})

function createDots(){
    data.forEach(img => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot)
     })

     updateDots()
}

function changeDots(){
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'))
    dots[index].classList.add('active')
}

function updateDots(){
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, ind) => {
        dot.addEventListener('click', () => {
            dots.forEach(dot => dot.classList.remove('active'))
            index = ind;
            renderImg()
            dots[index].classList.add('active')
        })
    })
}



function changeceAutocatically(){
    setInterval(()=>{
        index++;
        index = checkIndex();
        renderImg();
        changeDots()
    },5000)
}




document.addEventListener('DOMContentLoaded',(e) => {
    img.src = data[1];
    createDots()
    changeceAutocatically()
    const dots = document.querySelectorAll('.dot');
    dots[index].classList.add('active')
})