const list = document.querySelector('.list');
const btn = document.querySelector('.btn');

function showBenefits() {
    setTimeout(function(){
        list.classList.remove('hidden');
        list.classList.add('show');
    },1000)
}

btn.addEventListener('click', showBenefits);

