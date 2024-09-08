var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
var bubblyButtons = document.getElementsByClassName("bubbly-button");

var answers0 = [
  {
    'chosen': '',
    'correct': '4',
  },
  {
    'chosen': '',
    'correct': '2',
  }
];
var answers1 = [
  {
    'chosen': '',
    'correct': '2',
  },
  {
    'chosen': '',
    'correct': '4',
  }
];
var answers2 = [
  {
    'chosen': '',
    'correct': '3',
  },
  {
    'chosen': '',
    'correct': '3',
  }
];
var answers3 = [
  {
    'chosen': '',
    'correct': '4',
  },
  {
    'chosen': '',
    'correct': '1',
  }
];

var questions = [
  [
    {question: `איזה ידע לא נדרש לנהל במעל"ה?`,
      ans1: `חניכים- מעקב הישגים בחניכים ונוכחות במופעים המהווים תנאי סף להסמכתם (עץ הערכה)`,
      ans2: `חניכים- משובים וחוו"דים על החניך`,
      ans3: `מפקדים- תוכנית החניכה והערכה`,
      ans4:`לו"ז ההכשרה הספציפי`
    },
    {question: `סיכומים עיתיים הינם סיכומים שנדרש לבצע בעת לעת במהלך ההכשרה על מנת לקבל החלטות באשר להמשך ההכשרה ועל מנת להפיק לקחים למחזור ההכשרה הבא. באיזו תדירות הנך נדרש לבצע סיכום מתועד?`,
      ans1: `סיכום יומי`,
      ans2: `סיכום שבועי`,
      ans3: `סיכום שבועות עצימים`,
      ans4:`סיכום אמצע מחזור`
    }
  ],
  [
    {question: `על פי התקן תוך כמה זמן נדרש להחזיר לחניך את טופס הבחינה הבדוק ולפרסם ת התשובות הנכונות למבחנים?`,
      ans1: `עד שבועיים מיום הבחינה`,
      ans2: `עד שבוע מיום הבחינה`,
      ans3: `בהחלטת מפקד הפלוגה`,
      ans4:`אין חובת החזרת מבחנים`
    },
    {question: `אנליזה של מבחנים הינו תהליך ניתוח תשובות החניכים במטרה לזהות מגמות בהבנת החניכים את החומר הלימודי ועל מנת להעריך את טיב שאלות המבחן. מתי יש לבצע אנליזה על מבחן?`,
      ans1: `ביצוע אנליזה הינה אחריות קצינת הצפ"ה ולכן היא מחליטה מתי לבצע`,
      ans2: `כאשר יש למעלה מ50% נכשלים במבחן`,
      ans3: `כאשר יש מנעד ציונים נמוך`,
      ans4:`תשובות ב ו-ג נכונות`
    }
  ],
  [
    {question: `יניב הוא מפקד שעתיד לפתוח מחזור שני בקורס מפקדים. יניב ידוע כמפקד טוב ואחראי. במהלך הכנת הסגל יניב נעדר ליומיים בשל אירוע משפחתי והפסיד את הסגירה המקצועית לשבוע פק"לים וכן את בוחן הכש"ג והבוחן המקצועי. כיצד יש לנהוג?`,
      ans1: `יניב לא יוכל לפתוח את המחזור, יש לפנות למג"ד על מנת לאתר מפקד מחליף`,
      ans2: `יניב נדרש להשלים את בוחן הכש"ג בלבד. כיוון שהוא עתיד לפתוח מחזור שני הוא לא מחויב בסגירה מקצועית ובבוחן מקצועי.`,
      ans3: `יש להשלים ליניב את כלל המבחנים שלא ביצע וכן לוודא שהוא משלים את תוכן הסגירה המקצועית טרם פתיחת המחזור.`,
      ans4:`נדרש לבצע ליניב את הבחנים כתנאי לפתיחת המחזור. השלמת הסגירה המקצועית הינה אחריות אישית שלו בזמנו הפנוי.`
    },
    {question: `משך הכנת הסגל ועיתוי הביצוע שלה לא תמיד מאפשר לבצע הכנה רלוונטית ומעמיקה לכלל השבועות. מה אתה מחויב לבצע על מנת להתמודד עם האתגר (עפ"י תו התקן)?`,
      ans1: `לבנות תוכנית למידה עצמית למפקדים תוך כדי מחזור`,
      ans2: `לחלק את סגל המפקדים למגמות שונות`,
      ans3: `לבנות תוכנית הכנת מפקדים המתבצעת תוך כדי המחזור`,
      ans4:`להסתייע במדריכות אשר ילמדו ויתרגלו במקום המפקדים במקרה הצורך`
    }
  ],
  [
    {question: `חניך מתקשה הינו חניך שמאותר אצלו פער בעמידה בהישגים הנדרשים בהכשרה. לכל חניך מתקשה נדרש לבנות תוכנית אישית לקידומו. מה נדרשת התוכנית לכלול?`,
      ans1: `פירוט תחומי הקושי`,
      ans2: `פירוט דרכי הפעולה לקידום החניך`,
      ans3: `הגדרת יעדים עבור החניך לטווח הקצר`,
      ans4:`כל התשובות נכונות`
    },
    {question: `וועדת הערכה להרחקת חניך- כמה זמן טרם הוועדה יש לעדכן את החניך?`,
      ans1: `3 ימים`,
      ans2: `שבוע`,
      ans3: `יום לפני`,
      ans4:`תלוי בעילת ההרחקה`
    }
  ]

]
let answerArray;


window.addEventListener("load", ()=>{
    document.getElementById("back-btn").addEventListener('click', ()=> {
        window.location.href = 'subMenu.html';
    });
    for (var i = 0; i < bubblyButtons.length; i++) {
        // bubblyButtons[i].addEventListener('click', animateButton, false);
        bubblyButtons[i].addEventListener('click', checkAns);
      }
    answerArray = document.getElementsByClassName('answer');
    for (let i = 0; i< answerArray.length; i++) {
        answerArray[i].addEventListener('click', selectAns);
    }
    let questionArray = document.getElementsByClassName('question-text');
    for (let i = 0; i< questionArray.length; i++) {
      questionArray[i].innerText = questions[sessionStorage.getItem('topicNum')][i].question;
      for (let j=1; j<5; j++) {
        document.getElementById(`ans${i}${j}`).innerText = questions[sessionStorage.getItem('topicNum')][i][`ans${j}`];
      }
    }
});

let selectAns = (event) => {
  let questionNum = Number(event.target.id.charAt(3));
  for (let i = 1; i <= 4; i++) {
      document.getElementById(`ans${questionNum}${i}`).className = 'answer';
  }
  event.target.classList.add('chosen');
  window[`answers${sessionStorage.getItem('topicNum')}`][questionNum].chosen = event.target.id.charAt(4);
}

let checkAns = (event) => {
  let btnNum = Number(event.target.id.charAt(3));
  let topicNum = sessionStorage.getItem('topicNum');
  
  // somthing happens only if the user has selected an answer
  if (window[`answers${topicNum}`][btnNum].chosen !== '') {
    // checking if the user has clicked on the check button yet
    if (event.target.innerText === 'בדוק אותי') {
      // removing the option to choose a different answer
      for (let i = 1; i< 5; i++) {
        document.getElementById(`ans${btnNum}${i}`).removeEventListener('click', selectAns);
      }
      event.target.innerText = 'בא לי לנסות שוב';
      let chosenAns = window[`answers${topicNum}`][btnNum]['chosen'];
      if (window[`answers${topicNum}`][btnNum]['correct'] === window[`answers${topicNum}`][btnNum]['chosen']) {
        document.getElementById(`ans${btnNum}${chosenAns}`).classList.add('correct');
      } else {
        document.getElementById(`ans${btnNum}${chosenAns}`).classList.add('false');
      }
    } else {
      event.target.innerText = "בדוק אותי";
      window[`answers${topicNum}`][btnNum].chosen = '';
      for (let i = 1; i <= 4; i++) {
        document.getElementById(`ans${btnNum}${i}`).className = 'answer';
        document.getElementById(`ans${btnNum}${i}`).addEventListener('click', selectAns);
      }
    }

  }
}
