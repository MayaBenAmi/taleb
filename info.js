let currPage = 0;
let next;
let back;
let info;

window.addEventListener('load', ()=> {
    let backBtn = document.getElementById('back-btn');
    backBtn.addEventListener('click', ()=> {
        window.location.href = 'subMenu.html';
    });
    info = document.getElementById('info-text');
    info.innerHTML = '';
    for (let i=0; i<window[`subTopic${sessionStorage.getItem('topicNum')}${sessionStorage.getItem('subTopicNum')}`].length; i++) {
        let title = document.createElement('div');
        title.innerText = window[`subTopic${sessionStorage.getItem('topicNum')}${sessionStorage.getItem('subTopicNum')}`][i].title;
        title.classList.add('title');
        info.appendChild(title);
        let bodyText = document.createElement('div');
        bodyText.innerText = window[`subTopic${sessionStorage.getItem('topicNum')}${sessionStorage.getItem('subTopicNum')}`][i].body;
        info.appendChild(bodyText);
    }
});




// window.addEventListener('load', ()=> {
//     info = document.getElementById('info-text');
//     info.innerText = window[`subTopic${sessionStorage.getItem('topicNum')}${sessionStorage.getItem('subTopicNum')}`][currPage];
//     next = document.getElementById('next');
//     back = document.getElementById('back');
//     next.addEventListener('click', nextInfo);
//     back.addEventListener("click", backInfo);
//     back.style.display = 'none';
//     document.getElementById('arrows').style.justifyContent = 'end';
// });

// let nextInfo = (event) => {
//     currPage++;
//     info.innerText = window[`subTopic${sessionStorage.getItem('topicNum')}${sessionStorage.getItem('subTopicNum')}`][currPage];
//     if (currPage === window[`subTopic${sessionStorage.getItem('topicNum')}${sessionStorage.getItem('subTopicNum')}`].length -1) {
//         next.style.display = 'none';
//         document.getElementById('arrows').style.justifyContent = 'space-between';
//     } else {
//         next.style.display = 'block';
//         document.getElementById('arrows').style.justifyContent = 'space-between';
//     }
//     if (currPage === 0) {
//         back.style.display = 'none';
//         document.getElementById('arrows').style.justifyContent = 'end';
//     } else {
//         back.style.display = 'block';
//         document.getElementById('arrows').style.justifyContent = 'space-between';
//     }
// }

// let backInfo = (event) => {
//     currPage --;
//     info.innerText = window[`subTopic${sessionStorage.getItem('topicNum')}${sessionStorage.getItem('subTopicNum')}`][currPage];
//     if (currPage === 0) {
//         document.getElementById('arrows').style.justifyContent = 'end';
//         back.style.display = 'none';
//     } else {
//         back.style.display = 'block';
//         document.getElementById('arrows').style.justifyContent = 'space-between';
//     }
//     if (currPage === window[`subTopic${sessionStorage.getItem('topicNum')}${sessionStorage.getItem('subTopicNum')}`].length -1) {
//         next.style.display = 'none';
//         document.getElementById('arrows').style.justifyContent = 'space-between';
//     } else {
//         next.style.display = 'block';
//         document.getElementById('arrows').style.justifyContent = 'space-between';
//     }
// }