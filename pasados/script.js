const questions = [
    { sentence: "Il ___ malade la semaine dernière.", answer: "était", translation: "Él ___ enfermo la semana pasada." },
    { sentence: "Nous ___ en retard pour le train.", answer: "étions", translation: "Nosotros ___ tarde para el tren." },
    { sentence: "Les étoiles ___ très brillantes hier soir.", answer: "étaient", translation: "Las estrellas ___ muy brillantes anoche." },
    { sentence: "Tu ___ fatigué après le voyage.", answer: "étais", translation: "Tú ___ cansado después del viaje." },
    { sentence: "Elle ___ très gentille avec tout le monde.", answer: "était", translation: "Ella ___ muy amable con todos." },
    { sentence: "Les enfants ___ sages pendant la cérémonie.", answer: "étaient", translation: "Los niños ___ bien portados durante la ceremonia." },
    { sentence: "La ville ___ calme après minuit.", answer: "était", translation: "La ciudad ___ tranquila después de la medianoche." },
    { sentence: "Mes grands-parents ___ en France en été.", answer: "étaient", translation: "Mis abuelos ___ en Francia en verano." },
    { sentence: "Son frère ___ médecin avant de prendre sa retraite.", answer: "était", translation: "Su hermano ___ médico antes de jubilarse." },
    { sentence: "Les voitures ___ garées devant la maison.", answer: "étaient", translation: "Los autos ___ estacionados frente a la casa." },
    { sentence: "Vous ___ en vacances en juillet.", answer: "étiez", translation: "Ustedes ___ de vacaciones en julio." },
    { sentence: "L’océan ___ très calme ce matin-là.", answer: "était", translation: "El océano ___ muy tranquilo esa mañana." },
    { sentence: "Les garçons ___ en train de courir dans le parc.", answer: "étaient", translation: "Los chicos ___ corriendo en el parque." },
    { sentence: "Nous ___ très occupés hier.", answer: "étions", translation: "Nosotros ___ muy ocupados ayer." },
    { sentence: "La fête ___ géniale !", answer: "était", translation: "¡La fiesta ___ genial!" },
    { sentence: "Le vin ___ délicieux.", answer: "était", translation: "El vino ___ delicioso." },
    { sentence: "Les invités ___ surpris de la nouvelle.", answer: "étaient", translation: "Los invitados ___ sorprendidos por la noticia." },
    { sentence: "Je ___ nerveux avant l’examen.", answer: "étais", translation: "Yo ___ nervioso antes del examen." },
    { sentence: "Le spectacle ___ fantastique.", answer: "était", translation: "El espectáculo ___ fantástico." },
    { sentence: "Les portes ___ fermées quand nous sommes arrivés.", answer: "étaient", translation: "Las puertas ___ cerradas cuando llegamos." },
    { sentence: "Elle ___ la seule à savoir la réponse.", answer: "était", translation: "Ella ___ la única que sabía la respuesta." },
    { sentence: "Les montagnes ___ couvertes de neige.", answer: "étaient", translation: "Las montañas ___ cubiertas de nieve." },
    { sentence: "Nous ___ surpris par son attitude.", answer: "étions", translation: "Nosotros ___ sorprendidos por su actitud." },
    { sentence: "La salle ___ pleine de monde.", answer: "était", translation: "La sala ___ llena de gente." },
    { sentence: "Les vêtements ___ sales après la randonnée.", answer: "étaient", translation: "La ropa ___ sucia después de la caminata." },
    { sentence: "Son idée ___ très originale.", answer: "était", translation: "Su idea ___ muy original." },
    { sentence: "Les lampes ___ allumées toute la nuit.", answer: "étaient", translation: "Las lámparas ___ encendidas toda la noche." },
    { sentence: "Vous ___ les premiers à arriver.", answer: "étiez", translation: "Ustedes ___ los primeros en llegar." },
    { sentence: "Les rues ___ mouillées après la pluie.", answer: "étaient", translation: "Las calles ___ mojadas después de la lluvia." },
    { sentence: "Le jardin ___ magnifique au printemps.", answer: "était", translation: "El jardín ___ hermoso en primavera." },
    { sentence: "Le téléphone ___ cassé après la chute.", answer: "était", translation: "El teléfono ___ roto después de la caída." },
    { sentence: "Le train ___ en retard ce matin.", answer: "était", translation: "El tren ___ retrasado esta mañana." },
    { sentence: "Les musiciens ___ très talentueux.", answer: "étaient", translation: "Los músicos ___ muy talentosos." },
    { sentence: "Elle ___ contente de voir ses amis.", answer: "était", translation: "Ella ___ feliz de ver a sus amigos." },
    { sentence: "Nous ___ dans un hôtel près de la plage.", answer: "étions", translation: "Nosotros ___ en un hotel cerca de la playa." },
    { sentence: "Le vent ___ fort hier soir.", answer: "était", translation: "El viento ___ fuerte anoche." },
    { sentence: "Les étudiants ___ concentrés pendant l’examen.", answer: "étaient", translation: "Los estudiantes ___ concentrados durante el examen." },
    { sentence: "J’___ chez moi tout le week-end.", answer: "étais", translation: "Yo ___ en casa todo el fin de semana." },
    { sentence: "Il ___ malade la semaine dernière.", answer: "était", translation: "Él ___ enfermo la semana pasada." },
    { sentence: "Nous ___ en retard pour le train.", answer: "étions", translation: "Nosotros ___ tarde para el tren." },
    { sentence: "Les étoiles ___ très brillantes hier soir.", answer: "étaient", translation: "Las estrellas ___ muy brillantes anoche." },
    { sentence: "Tu ___ fatigué après le voyage.", answer: "étais", translation: "Tú ___ cansado después del viaje." },
    { sentence: "Elle ___ très gentille avec tout le monde.", answer: "était", translation: "Ella ___ muy amable con todos." },
    { sentence: "Les enfants ___ sages pendant la cérémonie.", answer: "étaient", translation: "Los niños ___ bien portados durante la ceremonia." },
    { sentence: "La ville ___ calme après minuit.", answer: "était", translation: "La ciudad ___ tranquila después de la medianoche." },
    { sentence: "Mes grands-parents ___ en France en été.", answer: "étaient", translation: "Mis abuelos ___ en Francia en verano." },
    { sentence: "Son frère ___ médecin avant de prendre sa retraite.", answer: "était", translation: "Su hermano ___ médico antes de jubilarse." },
    { sentence: "Les voitures ___ garées devant la maison.", answer: "étaient", translation: "Los autos ___ estacionados frente a la casa." },
    { sentence: "Vous ___ en vacances en juillet.", answer: "étiez", translation: "Ustedes ___ de vacaciones en julio." },
    { sentence: "L’océan ___ très calme ce matin-là.", answer: "était", translation: "El océano ___ muy tranquilo esa mañana." },
    { sentence: "Les garçons ___ en train de courir dans le parc.", answer: "étaient", translation: "Los chicos ___ corriendo en el parque." },
    { sentence: "Nous ___ très occupés hier.", answer: "étions", translation: "Nosotros ___ muy ocupados ayer." },
    { sentence: "La fête ___ géniale !", answer: "était", translation: "¡La fiesta ___ genial!" },
    { sentence: "Le vin ___ délicieux.", answer: "était", translation: "El vino ___ delicioso." },
    { sentence: "Les invités ___ surpris de la nouvelle.", answer: "étaient", translation: "Los invitados ___ sorprendidos por la noticia." },
    { sentence: "Je ___ nerveux avant l’examen.", answer: "étais", translation: "Yo ___ nervioso antes del examen." },
    { sentence: "Le spectacle ___ fantastique.", answer: "était", translation: "El espectáculo ___ fantástico." },
    { sentence: "Les portes ___ fermées quand nous sommes arrivés.", answer: "étaient", translation: "Las puertas ___ cerradas cuando llegamos." },
    { sentence: "Elle ___ la seule à savoir la réponse.", answer: "était", translation: "Ella ___ la única que sabía la respuesta." },
    { sentence: "Les montagnes ___ couvertes de neige.", answer: "étaient", translation: "Las montañas ___ cubiertas de nieve." },
    { sentence: "Nous ___ surpris par son attitude.", answer: "étions", translation: "Nosotros ___ sorprendidos por su actitud." },
    { sentence: "La salle ___ pleine de monde.", answer: "était", translation: "La sala ___ llena de gente." },
    { sentence: "Les vêtements ___ sales après la randonnée.", answer: "étaient", translation: "La ropa ___ sucia después de la caminata." },
    { sentence: "Son idée ___ très originale.", answer: "était", translation: "Su idea ___ muy original." },
    { sentence: "Les lampes ___ allumées toute la nuit.", answer: "étaient", translation: "Las lámparas ___ encendidas toda la noche." },
    { sentence: "Vous ___ les premiers à arriver.", answer: "étiez", translation: "Ustedes ___ los primeros en llegar." },
    { sentence: "Les rues ___ mouillées après la pluie.", answer: "étaient", translation: "Las calles ___ mojadas después de la lluvia." },
    { sentence: "Le jardin ___ magnifique au printemps.", answer: "était", translation: "El jardín ___ hermoso en primavera." },
    { sentence: "Le téléphone ___ cassé après la chute.", answer: "était", translation: "El teléfono ___ roto después de la caída." },
    { sentence: "Le train ___ en retard ce matin.", answer: "était", translation: "El tren ___ retrasado esta mañana." },
    { sentence: "Les musiciens ___ très talentueux.", answer: "étaient", translation: "Los músicos ___ muy talentosos." },
    { sentence: "Elle ___ contente de voir ses amis.", answer: "était", translation: "Ella ___ feliz de ver a sus amigos." },
    { sentence: "Nous ___ dans un hôtel près de la plage.", answer: "étions", translation: "Nosotros ___ en un hotel cerca de la playa." },
    { sentence: "Le vent ___ fort hier soir.", answer: "était", translation: "El viento ___ fuerte anoche." },
    { sentence: "Les étudiants ___ concentrés pendant l’examen.", answer: "étaient", translation: "Los estudiantes ___ concentrados durante el examen." },
    { sentence: "J’___ chez moi tout le week-end.", answer: "étais", translation: "Yo ___ en casa todo el fin de semana." },
    { sentence: "La musique ___ trop forte.", answer: "était", translation: "La música ___ demasiado alta." },
    { sentence: "Les plats ___ prêts à être servis.", answer: "étaient", translation: "Los platos ___ listos para ser servidos." },
    { sentence: "Il ___ content de son succès.", answer: "était", translation: "Él ___ contento con su éxito." },
    { sentence: "Les élèves ___ attentifs en classe.", answer: "étaient", translation: "Los alumnos ___ atentos en clase." },
    { sentence: "Le chien ___ très affectueux avec les enfants.", answer: "était", translation: "El perro ___ muy cariñoso con los niños." },
    { sentence: "Les fleurs ___ fanées à cause de la chaleur.", answer: "étaient", translation: "Las flores ___ marchitas por el calor." },
    { sentence: "Nous ___ partis plus tôt que prévu.", answer: "étions", translation: "Nosotros ___ salido más temprano de lo previsto." },
    { sentence: "Tu ___ toujours pressé le matin.", answer: "étais", translation: "Tú ___ siempre apurado por la mañana." },
    { sentence: "La maison ___ entourée d'arbres magnifiques.", answer: "était", translation: "La casa ___ rodeada de árboles magníficos." },
    { sentence: "Les oiseaux ___ perchés sur la branche.", answer: "étaient", translation: "Los pájaros ___ posados en la rama." },
    { sentence: "Vous ___ déjà en route pour l’aéroport.", answer: "étiez", translation: "Ustedes ___ ya en camino al aeropuerto." },
    { sentence: "Le ciel ___ couvert de nuages noirs.", answer: "était", translation: "El cielo ___ cubierto de nubes negras." },
    { sentence: "Les joueurs ___ fatigués après le match.", answer: "étaient", translation: "Los jugadores ___ cansados después del partido." },
    { sentence: "Il ___ seul dans la grande salle.", answer: "était", translation: "Él ___ solo en la gran sala." },
    { sentence: "Les fruits ___ mûrs et délicieux.", answer: "étaient", translation: "Las frutas ___ maduras y deliciosas." },
    { sentence: "Nous ___ bloqués dans un embouteillage.", answer: "étions", translation: "Nosotros ___ atrapados en un embotellamiento." },
    { sentence: "La glace ___ fondue sous le soleil.", answer: "était", translation: "El helado ___ derretido bajo el sol." },
    { sentence: "Les chats ___ endormis sur le canapé.", answer: "étaient", translation: "Los gatos ___ dormidos en el sofá." },
    { sentence: "Tu ___ très courageux face au danger.", answer: "étais", translation: "Tú ___ muy valiente frente al peligro." },
    { sentence: "La rivière ___ calme et paisible.", answer: "était", translation: "El río ___ tranquilo y pacífico." },
    { sentence: "Les touristes ___ émerveillés par le paysage.", answer: "étaient", translation: "Los turistas ___ maravillados por el paisaje." },
    { sentence: "Vous ___ habillés très élégamment.", answer: "étiez", translation: "Ustedes ___ vestidos muy elegantes." },
    { sentence: "Le café ___ froid quand nous sommes arrivés.", answer: "était", translation: "El café ___ frío cuando llegamos." },
    { sentence: "Les fenêtres ___ ouvertes pour laisser entrer l’air frais.", answer: "étaient", translation: "Las ventanas ___ abiertas para dejar entrar el aire fresco." },
    { sentence: "Nous ___ préoccupés par son silence.", answer: "étions", translation: "Nosotros ___ preocupados por su silencio." },
    { sentence: "La lumière ___ tamisée dans la pièce.", answer: "était", translation: "La luz ___ atenuada en la habitación." },
    { sentence: "Les livres ___ rangés sur l’étagère.", answer: "étaient", translation: "Los libros ___ ordenados en el estante." },
    { sentence: "Il ___ impatient de revoir ses amis.", answer: "était", translation: "Él ___ impaciente por volver a ver a sus amigos." },
    { sentence: "Les chemins ___ recouverts de feuilles mortes.", answer: "étaient", translation: "Los caminos ___ cubiertos de hojas secas." },
    { sentence: "Tu ___ assis près de la fenêtre au restaurant.", answer: "étais", translation: "Tú ___ sentado cerca de la ventana en el restaurante." },
    { sentence: "La mer ___ agitée pendant la tempête.", answer: "était", translation: "El mar ___ agitado durante la tormenta." },
    { sentence: "Les voisins ___ bruyants hier soir.", answer: "étaient", translation: "Los vecinos ___ ruidosos anoche." },
    { sentence: "Nous ___ coincés dans l’ascenseur pendant une heure.", answer: "étions", translation: "Nosotros ___ atrapados en el ascensor durante una hora." },
    { sentence: "Le gâteau ___ décoré avec soin.", answer: "était", translation: "El pastel ___ decorado con cuidado." },
    { sentence: "Les photos ___ accrochées au mur du salon.", answer: "étaient", translation: "Las fotos ___ colgadas en la pared de la sala." },
    { sentence: "Vous ___ charmants lors de la réception.", answer: "étiez", translation: "Ustedes ___ encantadores durante la recepción." },
    { sentence: "Le film ___ captivant du début à la fin.", answer: "était", translation: "La película ___ cautivadora desde el principio hasta el final." },
    { sentence: "Les chaussures ___ trop serrées pour ses pieds.", answer: "étaient", translation: "Los zapatos ___ demasiado apretados para sus pies." },
    { sentence: "Nous ___ distraits par le bruit de la rue.", answer: "étions", translation: "Nosotros ___ distraídos por el ruido de la calle." },
    { sentence: "La neige ___ épaisse sur les montagnes.", answer: "était", translation: "La nieve ___ espesa en las montañas." },
    { sentence: "Les clés ___ cachées sous le pot de fleurs.", answer: "étaient", translation: "Las llaves ___ escondidas bajo la maceta." },
    { sentence: "Il ___ prêt à partir en voyage.", answer: "était", translation: "Él ___ listo para partir de viaje." },
    { sentence: "Les biscuits ___ encore chauds sortis du four.", answer: "étaient", translation: "Las galletas ___ aún calientes recién salidas del horno." },
    { sentence: "Tu ___ fasciné par les étoiles dans le ciel.", answer: "étais", translation: "Tú ___ fascinado por las estrellas en el cielo." },
    { sentence: "La table ___ mise pour six personnes.", answer: "était", translation: "La mesa ___ puesta para seis personas." },
    { sentence: "Les vélos ___ alignés contre le mur.", answer: "étaient", translation: "Las bicicletas ___ alineadas contra la pared." }
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
                    <option value="étais">étais</option>
                    <option value="était">était</option>
                    <option value="étions">étions</option>
                    <option value="étiez">étiez</option>
                    <option value="étaient">étaient</option>
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