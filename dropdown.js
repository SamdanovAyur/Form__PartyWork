let giveValBtn = document.querySelector('.give__valute-button');
let giveValList = document.querySelector('.give__valute-list');
let giveValListItems = giveValList.querySelectorAll('.give__valute-list-item')
let giveValInp = document.querySelector('.give__valute__input-hidden');

giveValBtn.addEventListener('click', function(){
    giveValList.classList.toggle('give__valute-list--visible');
});

giveValListItems.forEach(function(listItem){
    listItem.addEventListener('click', function(e){
        e.stopPropagation();
        giveValBtn.innerText = this.innerText;
        giveValBtn.focus();
        giveValInp.value = this.dataset.value;
        giveValList.classList.remove('give__valute-list--visible');
    });
});

document.addEventListener('click', function(e){
    if(e.target !== giveValBtn){
        giveValList.classList.remove('give__valute-list--visible');
    }
});