let $modalButton  = document.querySelector('.modal .modal_button');
let $modalOverlay = document.querySelector('.background_text');

$modalButton.addEventListener('click', function () {
    $modalOverlay.style.opacity = 1;
    $modalOverlay.style.visibility = 'visible';
});

$modalOverlay.addEventListener('click', function () {
    $modalOverlay.style.opacity = 0;
    $modalOverlay.style.visibility = 'hidden';
});