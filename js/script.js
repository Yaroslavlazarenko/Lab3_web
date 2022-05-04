let $modalButton  = document.querySelector('.modal .modal_button');
let $modalOverlay = document.querySelector('.background_text');

let modalHidden   = -101;
let modalDisplay  = 0;

$modalButton.addEventListener('click', function () {
    $modalOverlay.style.top = modalDisplay;
});

$modalOverlay.addEventListener('click', function () {
    $modalOverlay.style.top = modalHidden + '%';
});