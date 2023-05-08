const barsEl = document.getElementById('bars');
const sideEl = document.querySelector('.sidebar');


barsEl.addEventListener('click', function(){
    sideEl.classList.toggle('active');
});

