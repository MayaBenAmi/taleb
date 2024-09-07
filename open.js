
window.addEventListener('load', ()=>{
    if (window.location.href.includes('open')) {
        let startBtn = document.getElementById('startArrow');
        startBtn.addEventListener('click', ()=> {
            window.location.href = 'instructions.html';
        });
    } else {
        let startBtn = document.getElementById('startArrow');
        startBtn.addEventListener('click', ()=> {
            window.location.href = 'menu.html';
        });
    }
});