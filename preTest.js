window.addEventListener("load", ()=> {
    document.getElementById('next').addEventListener('click', ()=> {
        let myTimer = setTimeout(()=> {
            window.location.href = 'test.html';
        }, 300);
        
    });
    document.getElementById('back').addEventListener('click', ()=> {
        let myTimer = setTimeout(()=> {
            window.location.href = 'menu.html';
        }, 300);
    });
});