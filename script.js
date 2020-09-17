const programming = [
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const harryPotter = [
  {
    question: "Сколько существует книг про Мальчика-который-выжил?",
    a: "5",
    b: "6",
    c: "8",
    d: "7",
    correct: "d",
  },
  {
    question:
      "На каком факультете нужно отгадать загадку для того, чтобы попасть в гостиную?",
    a: "Хаффлпаф",
    b: "Слизерин",
    c: "Рейвенкло",
    d: "Гриффиндор",
    correct: "c",
  },
  {
    question: "У кого Геллерт Гриндевальд украл Бузинную палочку?",
    a: "Оливандер",
    b: "Дамблдор",
    c: "Григорович",
    d: "Диппет",
    correct: "c",
  },
  {
    question:
      "Кто притворялся Аластором Грюмом в книге/фильме Гарри Поттер и Кубок Огня?",
    a: "Люциус Малфой",
    b: "Барти Крауч Младший",
    c: "Руфус Скримджер",
    d: "Питтер Петтигрю",
    correct: "b",
  },
  {
    question: "Какое заклинание было первым, что услышал Гарри Поттер?",
    a: "Алохомора",
    b: "Акцио",
    c: "Репаро",
    d: "Вингардиум Левиоса",
    correct: "c",
  },
  {
    question: "Сколько крестражей создал Том Рэддл?",
    a: "3",
    b: "5",
    c: "7",
    d: "9",
    correct: "c",
  },
  {
    question: "Какого из этих имён не было у Альбуса Дамблдора?",
    a: "Персиваль",
    b: "Геллерт",
    c: "Вулфрик",
    d: "Брайан",
    correct: "b",
  },
  {
    question: "Какая из этих вещиц никогда не была крестражем?",
    a: "Диадема Ровены Рейвенкло",
    b: "Чаша Хельги Хаффлпаф",
    c: "Медалььон Салазара Слизерина",
    d: "Меч Годрика Грффиндора",
    correct: "d",
  },
  {
    question: "Кто из Мародёров оказался предателем?",
    a: "Джеймс Поттер",
    b: "Сириус Блэк",
    c: "Питтер Петтигрю",
    d: "Римус Люпин",
    correct: "c",
  },
];

const history = [
  {
    question: "Кто разработал первый успешный печатный станок в Эвропе?",
    a: "Иоганн Гутенберг",
    b: "Никола Тесла",
    c: "Луи Пастер",
    d: "Галилео Галилей",
    correct: "a",
  },
  {
    question: "Когда началась Первая мировая война?",
    a: "1918",
    b: "1914",
    c: "1920",
    d: "1917",
    correct: "b",
  },
  {
    question: "Какой западный путешественник первым добрался до Китая?",
    a: "Марко Поло",
    b: "Фердинанд Магеллан",
    c: "Христофор Колумб",
    d: "Васко да Гама",
    correct: "a",
  },
  {
    question: "Кто открыл закон притяжения, увидев падающее яблоко?",
    a: "Галилео Галилей",
    b: "Исаак Ньютон",
    c: "Архимед",
    d: "Цезарь",
    correct: "b",
  },
  {
    question: "Когда была открыта Америка?",
    a: "1492",
    b: "1692",
    c: "1592",
    d: "1792",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const error = document.querySelector(".error");
const themes = document.querySelectorAll(".themes-container > button");

let currentQuiz = 0;
let score = 0;

class Quiz {
  constructor(quizData) {
    this.quizData = quizData;
  }

  loadQuiz() {
    this.deselectAnswers();

    const currentQuizData = this.quizData[currentQuiz];

    themes.forEach(function (item) {
      item.setAttribute("disabled", "disabled");
      item.style.cursor = "auto";
    });

    quiz.style.display = "block";
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }

  getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });

    return answer;
  }

  deselectAnswers() {
    answerEls.forEach((answerEl) => {
      answerEl.checked = false;
    });
  }

  showResult() {
    // check to see the answer
    const answer = this.getSelected();

    if (answer) {
      error.innerHTML = "";
      if (answer === this.quizData[currentQuiz].correct) {
        score++;
      }

      currentQuiz++;
      if (currentQuiz < this.quizData.length) {
        this.loadQuiz();
      } else {
        quiz.innerHTML = `
              <h2>You answered correctly at ${score}/${this.quizData.length} questions.</h2>

              <button onclick="location.reload()">End</button>
          `;
      }
    }

    if (!answer) {
      error.innerHTML = "Please choose answer!";
    }
  }
}

function createQuiz(data) {
  const quiz = new Quiz(data);

  quiz.loadQuiz();

  submitBtn.addEventListener("click", quiz.showResult.bind(quiz));
}

themes.forEach(function (item) {
  item.addEventListener("click", function () {
    this.style.border = "2px solid #39eaee";
    this.style.transform = "scale(1.1)";
    const quizTheme = this.getAttribute("data-quiz");

    switch (quizTheme) {
      case "programming":
        createQuiz(programming);
        break;

      case "harry-potter":
        createQuiz(harryPotter);
        break;

      case "history":
        createQuiz(history);
        break;
    }
  });
});
