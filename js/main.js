const list = document.querySelector('.list');
const btn = document.querySelector('.btn');
const listItems = list.querySelectorAll('li');


function handleClick() {
    setTimeout(function(){
        list.classList.remove('hidden');
        list.classList.add('show');
    },1000)
}


btn.addEventListener('click', handleClick);
