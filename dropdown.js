let giveValBtn = document.querySelector('.give__valute-button');
let giveValList = document.querySelector('.give__valute-list');
let giveValListItems = giveValList.querySelectorAll('.give__valute-list-item');
let giveValInpHidden = document.querySelector('.give__valute__input-hidden');

let giveValInp = document.querySelector('.give__valute-inp');

let typeOfValuteBtn = document.querySelector('.typeOfValute-button');
let typeOfValuteListBtc = document.querySelector('.typeOfValute-list-bitcoin');
let typeOfValuteListTtr = document.querySelector('.typeOfValute-list-tether');
let typeOfValuteListEtrm = document.querySelector('.typeOfValute-list-ethereum');
let typeOfValuteListLtc = document.querySelector('.typeOfValute-list-litecoin');
let typeOfValuteListItem = document.querySelectorAll('.typeOfValute-list-item');
let typeOfValuteInpHidden = document.querySelector('.typeOfValute__input-hidden');

let giveWarnTxt = document.querySelector('.give__warning-text');

giveValBtn.addEventListener('click', function(){
    giveValList.classList.toggle('give__valute-list--visible');
});

typeOfValuteBtn.addEventListener('click', function (){
    changeTypeOfValute().classList.toggle('typeOfValute-list--visible');
});

function changeTypeOfValute(){
    if(giveValInpHidden.value == "bitcoin"){
        return typeOfValuteListBtc;
    }
    if(giveValInpHidden.value == "tether"){
        return typeOfValuteListTtr;
    }
    if(giveValInpHidden.value == "ethereum"){
        return typeOfValuteListEtrm;
    }
    if(giveValInpHidden.value == "litecoin"){
        return typeOfValuteListLtc;
    }
}

giveValListItems.forEach(function(listItem){
    listItem.addEventListener('click', function(){
        giveValBtn.innerText = this.innerText;
        giveValBtn.focus();
        giveValInpHidden.value = this.dataset.value;
        giveValList.classList.remove('give__valute-list--visible');
        changeWarning();
    });
});



typeOfValuteListItem.forEach(function(listItem){
    listItem.addEventListener('click', function(){
        typeOfValuteBtn.innerText = this.innerText;
        typeOfValuteBtn.focus();
        typeOfValuteInpHidden.value = this.dataset.value;
        changeTypeOfValute().classList.remove('typeOfValute-list--visible');
        changeWarning();
    });
});

document.addEventListener('click', function(e){
    if(e.target !== giveValBtn){
        giveValList.classList.remove('give__valute-list--visible');
    }
});

document.addEventListener('click', function(e){
    if(e.target !== typeOfValuteBtn){
        changeTypeOfValute().classList.remove('typeOfValute-list--visible');
    }
});

function changeWarning(){
    
    if(giveValInpHidden.value == "bitcoin"){
        giveWarnTxt.textContent = 'Требуется два подтверждения от сети Bitcoin.';
        giveValInp.value = 0.0025753;
        adaptWarning(giveWarnTxt);
    }

    if(typeOfValuteInpHidden.value == "bep20"){
        giveWarnTxt.textContent = 'Требуются 15 подтверждений от сети BSC.';
        adaptWarning(giveWarnTxt);
    }


    if(giveValInpHidden.value == "tether"){
    giveWarnTxt.textContent = 'Пожалуйста, убедитесь, что вывод производится в рамках сети TRC-20, в противном случае, средства не зачислятся на наш кошелек. Требуется 12 подтверждений от сети.';
    giveValInp.value = 66.27;
    adaptWarning(giveWarnTxt);
    }
    
    if(giveValInpHidden.value == "ethereum"){
        giveWarnTxt.textContent = 'Для отправки на наши кошельки используйте только сеть erc20, использование другой сети повлечет за собой потерю средств!';
        giveValInp.value = 0.03861141;
        adaptWarning(giveWarnTxt);
    }
    if(giveValInpHidden.value == "litecoin"){
        giveValInp.value = 0.77263327;
        giveWarnTxt.textContent = 'Требуется два подтверждения от сети Litecoin.';
        adaptWarning(giveWarnTxt);
    }
}

function adaptWarning(txt){
    txt.style.background = '#ffffff';
    txt.style.margin = '0';
    txt.style.padding = '5px 0';
    txt.style.borderRadius = '5px';
}
