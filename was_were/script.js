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
    { sentence: "The movie ___ very interesting.", answer: "was", translation: "La película ___ muy interesante." },
    { sentence: "The flowers ___ beautiful in the garden.", answer: "were", translation: "Las flores ___ hermosas en el jardín." },
    { sentence: "She ___ at the concert last night.", answer: "was", translation: "Ella ___ en el concierto anoche." },
    { sentence: "The boys ___ tired after the game.", answer: "were", translation: "Los chicos ___ cansados después del juego." },
    { sentence: "I ___ surprised to see him.", answer: "was", translation: "Yo ___ sorprendido de verlo." },
    { sentence: "The chairs ___ broken after the party.", answer: "were", translation: "Las sillas ___ rotas después de la fiesta." },
    { sentence: "He ___ the best player on the team.", answer: "was", translation: "Él ___ el mejor jugador del equipo." },
    { sentence: "The lights ___ on all night.", answer: "were", translation: "Las luces ___ encendidas toda la noche." },
    { sentence: "She ___ my best friend in school.", answer: "was", translation: "Ella ___ mi mejor amiga en la escuela." },
    { sentence: "They ___ happy to see their family.", answer: "were", translation: "Ellos ___ felices de ver a su familia." },
    { sentence: "My phone ___ missing yesterday.", answer: "was", translation: "Mi teléfono ___ desaparecido ayer." },
    { sentence: "We ___ early for the meeting.", answer: "were", translation: "Nosotros ___ temprano para la reunión." },
    { sentence: "The baby ___ asleep in the crib.", answer: "was", translation: "El bebé ___ dormido en la cuna." },
    { sentence: "The answers ___ correct on the test.", answer: "were", translation: "Las respuestas ___ correctas en el examen." },
    { sentence: "It ___ a beautiful day at the beach.", answer: "was", translation: "___ un día hermoso en la playa." },
    { sentence: "All the dishes ___ clean after dinner.", answer: "were", translation: "Todos los platos ___ limpios después de la cena." },
    { sentence: "The door ___ locked at night.", answer: "was", translation: "La puerta ___ cerrada con llave por la noche." },
    { sentence: "My parents ___ very proud of me.", answer: "were", translation: "Mis padres ___ muy orgullosos de mí." },
    { sentence: "The storm ___ very strong last night.", answer: "was", translation: "La tormenta ___ muy fuerte anoche." },
    { sentence: "The kids ___ at school when it started to rain.", answer: "were", translation: "Los niños ___ en la escuela cuando empezó a llover." },
    { sentence: "The cake ___ delicious at the party.", answer: "was", translation: "El pastel ___ delicioso en la fiesta." },
    { sentence: "Her shoes ___ too big for her.", answer: "were", translation: "Sus zapatos ___ demasiado grandes para ella." },
    { sentence: "I ___ excited to go on vacation.", answer: "was", translation: "Yo ___ emocionado por ir de vacaciones." },
    { sentence: "The books ___ dusty on the shelf.", answer: "were", translation: "Los libros ___ polvorientos en el estante." },
    { sentence: "My sister ___ very scared during the movie.", answer: "was", translation: "Mi hermana ___ muy asustada durante la película." },
    { sentence: "The fans ___ cheering loudly at the game.", answer: "were", translation: "Los fanáticos ___ animando fuertemente en el juego." },
    { sentence: "The food ___ ready on the table.", answer: "was", translation: "La comida ___ lista en la mesa." },
    { sentence: "The children ___ curious about the animals.", answer: "were", translation: "Los niños ___ curiosos sobre los animales." },
    { sentence: "The show ___ amazing!", answer: "was", translation: "¡El espectáculo ___ increíble!" },
    { sentence: "The streets ___ empty early in the morning.", answer: "were", translation: "Las calles ___ vacías temprano en la mañana." },
    { sentence: "It ___ hard to say goodbye.", answer: "was", translation: "___ difícil decir adiós." },
    { sentence: "The projects ___ completed on time.", answer: "were", translation: "Los proyectos ___ completados a tiempo." },
    { sentence: "Her hair ___ wet from the rain.", answer: "was", translation: "Su cabello ___ mojado por la lluvia." },
    { sentence: "We ___ very hungry after the hike.", answer: "were", translation: "Nosotros ___ muy hambrientos después de la caminata." },
    { sentence: "The moon ___ bright in the sky.", answer: "was", translation: "La luna ___ brillante en el cielo." },
    { sentence: "All of us ___ happy with the results.", answer: "were", translation: "Todos nosotros ___ felices con los resultados." },
    { sentence: "The bottle ___ full of water.", answer: "was", translation: "La botella ___ llena de agua." },
    { sentence: "The animals ___ calm at the zoo.", answer: "were", translation: "Los animales ___ tranquilos en el zoológico." },
    { sentence: "The car ___ parked outside.", answer: "was", translation: "El auto ___ estacionado afuera." },
    { sentence: "Her paintings ___ beautiful on the wall.", answer: "were", translation: "Sus pinturas ___ hermosas en la pared." },
];

// Cargar solo 5 preguntas al azar
const selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 5);

// Cargar archivos de audio
const audioExito = new Audio("exito.mp3");
const audioFracaso = new Audio("fracaso.mp3");

function loadQuestions() {
    const questionsContainer = document.getElementById("questions");
    selectedQuestions.forEach((q, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");

        // Crear la oración con un menú desplegable y agregar la traducción en español
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
    let allCorrect = true;

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
            allCorrect = false; // Marca como incorrecta si falla alguna respuesta
        }
    });

    // Reproduce el sonido de éxito o fracaso dependiendo de si todas las respuestas son correctas
    if (allCorrect) {
        audioExito.play();
    } else {
        audioFracaso.play();
    }
}

// Cargar preguntas al iniciar la página
window.onload = loadQuestions;