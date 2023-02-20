'use strict';


const btnShowModal = document.querySelectorAll('.btnOpen');
console.log(btnShowModal);

const overlay = document.querySelector('.overlay');
console.log(overlay);

const modal = document.querySelector('.modal');

const closeBtn = document.querySelector('.closeModal');
for (let i = 0; i < btnShowModal.length; i++) {
    btnShowModal[i].addEventListener('click', function () {
        modal.style.display="inline-block";
        overlay.style.display="inline-block";

    });
}

const hide = function(){
    modal.style.display="none";
    overlay.style.display="none";
}
overlay.addEventListener('click', function () {
    hide();
});
closeBtn.addEventListener('click', function () {
    hide();
});