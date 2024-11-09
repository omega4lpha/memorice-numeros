const questions = [
    { sentence: "He ___ at the park yesterday.", answer: "was", translation: "Él ___ en el parque ayer." },
    { sentence: "They ___ playing soccer last week.", answer: "were", translation: "Ellos ___ jugando fútbol la semana pasada." },
    { sentence: "The dog ___ barking loudly.", answer: "was", translation: "El perro ___ ladrando fuerte." },
    { sentence: "You ___ very happy yesterday.", answer: "were", translation: "Tú ___ muy feliz ayer." },
    { sentence: "I ___ at home during the storm.", answer: "was", translation: "Yo ___ en casa durante la tormenta." },
    { sentence: "We ___ in the same class last year.", answer: "were", translation: "Nosotros ___ en la misma clase el año pasado." },
    { sentence: "The cat ___ sleeping on the chair.", answer: "was", translation: "El gato ___ durmiendo en la silla." },
    { sentence: "They ___ late for the meeting.", answer: "were", translation: "Ellos ___ tarde para la reunión." },
    { sentence: "It ___ raining all day.", answer: "was", translation: "___ lloviendo todo el día." },
    { sentence: "My friends ___ on vacation.", answer: "were", translation: "Mis amigos ___ de vacaciones." },
    { sentence: "She ___ very tired last night.", answer: "was", translation: "Ella ___ muy cansada anoche." },
    { sentence: "We ___ excited for the trip.", answer: "were", translation: "Nosotros ___ emocionados por el viaje." },
    { sentence: "The books ___ on the table.", answer: "were", translation: "Los libros ___ sobre la mesa." },
    { sentence: "The teacher ___ absent last week.", answer: "was", translation: "El profesor ___ ausente la semana pasada." },
    { sentence: "The kids ___ playing outside.", answer: "were", translation: "Los niños ___ jugando afuera." },
    { sentence: "She ___ the best student in class.", answer: "was", translation: "Ella ___ la mejor estudiante de la clase." },
    { sentence: "We ___ at the beach last weekend.", answer: "were", translation: "Nosotros ___ en la playa el fin de semana pasado." },
    { sentence: "It ___ very cold yesterday.", answer: "was", translation: "___ muy frío ayer." },
    { sentence: "He ___ the last to arrive.", answer: "was", translation: "Él ___ el último en llegar." },
    { sentence: "The windows ___ open all night.", answer: "were", translation: "Las ventanas ___ abiertas toda la noche." },
];

// Selecciona aleatoriamente 5 preguntas de las 20
const selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 5);

function loadQuestions() {
    const questionsContainer = document.getElementById("questions");
    selectedQuestions.forEach((q, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");

        // Crear la oración con el menú desplegable y agregar la traducción en español
        questionElement.innerHTML = `
            ${q.sentence.replace("___", `
                <select data-index="${index}">
                    <option value="">--Elige--</option>
                    <option value="was">was</option>
                    <option value="were">were</option>
                </select>
            `)}
            <div class="translation">${q.translation}</div>
        `;
        
        questionsContainer.appendChild(questionElement);
    });
}

function checkAnswers() {
    document.querySelectorAll(".question").forEach((question, index) => {
        const selectElement = question.querySelector("select");
        const selectedAnswer = selectElement.value;
        const correctAnswer = selectedQuestions[index].answer;
        
        if (selectedAnswer === correctAnswer) {
            question.classList.add("correct");
            question.classList.remove("incorrect");
        } else {
            question.classList.add("incorrect");
            question.classList.remove("correct");
        }
    });
}

// Cargar preguntas al iniciar la página
window.onload = loadQuestions;
