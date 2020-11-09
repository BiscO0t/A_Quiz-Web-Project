
let questions = [
    {
      id: 1,
      question: "What must be added to each of the numbers 7, 11 and 19, so that the resulting numbers may be in continued proportion ?",
      answer: "-3",
      options: [
        "3",
        "5",
        "-3",
        "-5"
      ]
    },
    {
      id: 2,
      question: "If x varies inversely as (y2 - 1) and is equal to 24 when y = 10, the value of x when y =  5 will be ?",
      answer: "99",
      options: [
        "98",
        "99",
        "100",
        "None of these"
      ]
    },
    {
      id: 3,
      question: "A basket contains Rs 216 in the form of one rupee, 50 paise and 25 paise coins in the ratio of 3 : 4 : 4. The number of 50 paise coins is ?",
      answer: "144",
      options: [
        "96",
        "128",
        "144",
        "None of these"
      ]
    },
    {
      id: 4,
      question: "If the ratio of boys to girls in a class is B and the ratio of girls to boys is G; then 3 (B + G) is ?" ,
      answer: "more than 3",
      options: [
          "3",
          "less than 3",
          "more than 3",
          "None of the above 3"
      ]
    },
    {
      id: 5,
        question:"If (1/3)A = (1/4)B = (1/5)C. Then A : B : C is ",
        answer: "3:4:5",
        options: [
            "4:3:5",
            "5:4:3",
            "3:4:5",
            "20:15:12"
        ]

    }
  ];
  
  let question_count = 0;
  let points = 0;
  
  window.onload = function() {
    show(question_count);
  
  };
  
  function next() {
  
     
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
      sessionStorage.setItem("time", time);
      clearInterval(mytime);
      location.href = "end.html";
    }
    console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
      points += 100;
      sessionStorage.setItem("points", points);
    }
    else {
      points =points - 50;
      sessionStorage.setItem("points", points);
    }
    console.log(points);
  
    question_count++;
    show(question_count);
  }
  
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
  