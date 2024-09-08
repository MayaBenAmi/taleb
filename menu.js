

window.addEventListener('load', () => {

    
    if (window.location.href.includes('menu.html')) {
        topics = document.getElementsByClassName("topic");
        for (let i = 0; i< topics.length; i++) {
           topics[i].addEventListener('click', displaySubMenu);
        }
        document.getElementById('test-btn').addEventListener('click', ()=> {
            window.location.href = 'preTest.html';
        });
    } else {
        let backBtn = document.getElementById('back-btn');
        backBtn.addEventListener('click', ()=> {
            window.location.href = 'menu.html';
        });
        let practiceBtn = document.getElementById('practice-btn');
        practiceBtn.addEventListener('click', ()=> {
            let myTimer = setTimeout(()=> {
                window.location.href = 'practice.html';
            }, 500);
           
        });
        let topicNum = sessionStorage.getItem('topicNum');

        if (topicNum !== null) {
            topicNum = Number(topicNum);
            let topicsContainer = document.getElementById('topics-container');
            // Clear previous content
            topicsContainer.innerHTML = '';
            if (Array.isArray(window[`topic${topicNum}`])) {
                for (let i = 0; i < window[`topic${topicNum}`].length; i++) {
                    let subTopicText = window[`topic${topicNum}`][i];
                    let subTopic = document.createElement('div');
                    subTopic.innerText = subTopicText;
                    subTopic.classList.add('topic');
                    subTopic.setAttribute('id', `sub${i}`);
                    subTopic.addEventListener('click', displayText);
                    topicsContainer.appendChild(subTopic);
                }
            }
        }
    }
});


let displaySubMenu = (event) => {
    sessionStorage.setItem('topicNum', Number(event.currentTarget.id.charAt(5)));
    window.location.href = 'subMenu.html';
}


let displayText = (event) => {
    sessionStorage.setItem('subTopicNum', Number(event.currentTarget.id.charAt(3)));
    let myTimer = setTimeout(()=> {window.location.href = 'info.html';}, 600);
    let subTopics = document.getElementsByClassName('topic');
    for (let i=0; i<subTopics.length; i++) {
        subTopics[i].removeEventListener('click', displayText);
    }
}
