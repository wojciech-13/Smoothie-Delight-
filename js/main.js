const list = document.querySelector('.list');
const btn = document.querySelector('.btn');
const submitBtn = document.querySelector('.submitBtn');
const formContainer = document.querySelector('.formContainer');
const messageContainer = document.querySelector('.messageContainer');

function showBenefits() {
    setTimeout(function(){
        list.classList.remove('hide');
        list.classList.add('show');
    },1000)
    setTimeout(function(){
        list.classList.remove('show');
        list.classList.add('hide');
    },6000);
}

function afterSubmit(e){
    e.preventDefault();
    setTimeout(function(){
        formContainer.classList.add('hide');
        messageContainer.classList.remove('hide');
    },500)

}

btn.addEventListener('click', showBenefits);
formContainer.addEventListener('submit', afterSubmit)
