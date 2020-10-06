//   Questions Array
let questions = [
  {
    id: 1,
    question: "What is the full form of HTML ?",
    answer: "Hyper Text Markup language",
    options: [
      "Hyper Toggle Mars language",
      "Hyper Text Markup language",
      "Hype Text Mark language",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "React is a Liabary or framework of javascript?",
    answer: "Liabary",
    options: [
      "Liabary",
      "framework",
      "user interface",
      "None of these"
    ]
  },
  {
    id: 3,
    question:"Inside which HTML element do we put the JavaScript tag?",
    answer: "script",
    options: [
      "javascript",
      "scripting",
      "js",
      "script"
    ]
  },
  {
    id: 4,
    question: "what is a full form of DOM",
    answer: "Document Object Model",
    options: [
      "District object Moduel",
      "Difference Object Model",
      "Document Object Model",
      "None of these"
    ]
  }
];

let question_count = 0;
let points = 0;

//  IF user reload browser ..
window.onload = function() {
  show(question_count);

};

//  next Question Function...
function next() {

  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    location.href = "end.html";
  }


  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
 question_count++;
  show(question_count);
}


//  Show options question Function...

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

// Active Function when user click any options...

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
