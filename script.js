window.onload = function () {

    //Array with questions objects. Each objecthas set of properties (Question text, answer variants and correct answer)

    let questions = [
        {
            text: "From which language is the word ‘ketchup’ derived?",
            variants: [USA, Denmark, Italy, China],
            answer: China
        },

        {
            text: "Which is the country with the biggest population in Europe?",
            variants: [Ukraine, Russia, Poland, Germany],
            answer: Russia
        },

        {
            text: "Complete the title of the play by Shakespeare – ‘The Merchant of …’?",
            variants: [Venice, Rome, London, Berlin],
            answer: Venice
        },

        {
            text: "What are made and repaired by a cobbler?",
            variants: [shoes, jacket, umbrella, hat],
            answer: shoes
        },

        {
            text: "What colour are the four stars on the flag of New Zealand?",
            variants: [blue, red, yellow, green],
            answer: red
        },

        {
            text: "How many states make up the United States of America?",
            variants: [25, 50, 40, 65],
            answer: 50
        },

        {
            text: "H2O is the chemical formula for what?",
            variants: [water, air, ferrum, gold],
            answer: water
        }
    ]

    let test_container = document.getElementById("test_container");
    let answer_button = document.getElementById("answer_button");
    let result_container = document.getElementById("result_container");

    let quest_num = 0; //Questions counter
    let correct_answers = 0; //Correct answers counter

    for (let question of questions) {  //Iteration of the object with questions

        quest_num++; //Questions number counter increase

        let new_question = document.createElement("div"); //Separate block and html elements set is created for each question
        new_question.className = "card"; //Classes are added to tags created for their typography
        let questions_box = document.createElement("div");
        questions_box.className = "card-body";
        let question_text = document.createElement("div"); //The block for the separate question is created
        question_text.className = "card-header"
        question_text.innerHTML = quest_num + ") "+ question.text; //Question text is inserted

        for (let i = 0; i < question.variants.length; i++) { //Variants of answers to separate questions are iterated
            let answer_div = document.createElement("div");
            answer_div.className = "form-check"
            let answer = document.createElement("input");   //Input with radio type is created
            answer.type = "radio";
            answer.value = question.variants[i];            //Answer variant is added to 'value' of 'input' tag
            answer.name = "question" + quest_num;
            answer.className = "form-check-input"           //Generated name for group is added to each 'input' tag
            answer.setAttribute("id", "quest" + quest_num + "ans" + i);     //A unique 'id' value is added to each answer,
                                                                            //under which it will be joined to 'label' tag
            let label = document.createElement("label");
            label.className = "form-chack-label"
            label.setAttribute("for", "quest" + quest_num + "ans" + i);

            answer_div.appendChild(answer);     //'Input' and 'label' tags are inserted into their 'div' block
            answer_div.appendChild(label);

            questions_box.appendChild(answer_div);  //'div' block with answer are added to block with all answers to specific question
        };

        new_question.appendChild(question_text);
        new_question.appendChild(question_box);
        test_container.appendChild(new_question);   //Block for each separate question is inserted into general block for all questions
    }

    answer_button.addEventListener("click", function () {   //Event handler is added when pushing 'Answer' button

    let questions_blocks = document.getElementsByClassName("card"); //Search of all blocks with questions

    correct_answers = 0;    //When pushing the correct answers counter is updated

    for (let i = 0; i < questions_blocks.length; i++) {     //A cycle for iterations quantity is created which is equal to questions quantity

        let variants = questions_blocks[i].querySelectorAll("input[type='radio']")  //all 'input' tags with 'radio' type in separate questions block

        for (let j = 0; j < variants.length; j++) {     //Input iterations cycle
            if (variants[j].checked) {      //chosen answer
                if (variants[j].value == questions[i].answer) { //Answer is compared with correct answer, which is in the object
                    correct_answers++;  // If the answer matches, the correct answers is increased
                }
            }
        }
    }
        let percent_result = Math.floor((correct_answers / quest_num) * 100); //Correct answers quantity calculation in %

        result_container.innerHTML = "Correct answers quantity - " + correct_answers + ", which comprises " + percent_result + "%.<br/>";
        if (percent_result >= 70) {
            result_container.innerHTML += "Congrats, you succeed!"; // The text is shown in the screen dependent from result
            result_container.className = "alert alert-success";
        }
        else {
            result_container.innerHTML += "You are failed."
            result_container.className = "alert alert-danger";
        }

        let all_questions = document.querySelectorAll("input[type='radio']");   //Search all 'input' tags with 'radio' type on page

        for (i - 0; i < all_questions.length; i++) {    //All questions returned to unanswered state after result display
            all_questions[i].checked = false;
        }
    },false)
}