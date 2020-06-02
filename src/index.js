import './style.scss';

let btns = document.querySelectorAll('.product__actions-item-toggle');
let clearBtns = document.querySelectorAll('.product__actions-form-clear');

btns.forEach(btn => {
    btn.addEventListener('click', event => {
        let parent = event.target.closest('.product__actions-item');
        if (parent.classList.contains('open')) {
            parent.classList.remove('open');
        } else {
            parent.classList.add('open');
        }
    })
});

clearBtns.forEach(clearBtn => {
    clearBtn.addEventListener('click', event => {
        event.target.parentNode.firstElementChild.value = '';
    })
});