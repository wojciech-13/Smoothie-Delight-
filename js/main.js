const list = document.querySelector('.list');
const btn = document.querySelector('.btn');
const submitBtn = document.querySelector('.submit-btn');
const formContainer = document.querySelector('.form-container');
const messageContainer = document.querySelector('.message-container');

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
