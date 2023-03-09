const questions = [
  {
    letter: "a",
    answer: ["abducir", "Aguacate", "Azotea"],
    status: 0,
    question: [
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
      "CON LA A. ¿Qué fruta es conocida por ser rica en potasio y es muy popular entre los atletas?",
      "CON LA A. ¿Qué palabra se utiliza para describir la parte superior de un edificio o estructura?",
    ],
  },
  {
    letter: "b",
    answer: ["bingo", " Bombardino", "Boligrafo"],
    status: 0,
    question: [
      "CON LA B. Juego que ha sacado de quicio a todos los 'Coders' en las sesiones de precurso",
      "CON LA B. ¿Cómo se llama el instrumento musical de viento compuesto por un tubo largo y curvo con una campana en su extremo?",
      "CON LA B. ¿Cómo se llama el objeto que se utiliza para escribir y que consta de una mina y un cuerpo de madera o plástico?",
    ],
  },
  {
    letter: "c",
    answer: ["churumbel", "Copa", "Condor"],
    status: 0,
    question: [
      "CON LA C. CON LA C. Niño, crío, bebé",
      "CON LA C. ¿Cómo se llama el objeto de forma cilíndrica que se utiliza para contener líquidos y que tiene una abertura en la parte superior por donde se bebe?",
      "CON LA C. ¿Cómo se llama el animal que tiene el cuerpo cubierto de plumas, un pico córneo y que puede volar?",
    ],
  },
  {
    letter: "d",
    answer: ["diarrea", "Durazno", "Dado"],
    status: 0,
    question: [
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
      "CON LA D. ¿Cómo se llama la fruta que es redonda y tiene una piel fina de color naranja o amarillo, y una pulpa jugosa y dulce?",
      "CON LA D. ¿Cómo se llama la herramienta que se utiliza para hacer agujeros en materiales como el papel, el cuero o la tela?",
    ],
  },
  {
    letter: "e",
    answer: ["ectoplasma", "Enrutador", "Escultura"],
    status: 0,
    question: [
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
      "CON LA E. ¿Cómo se llama el dispositivo que se utiliza para conectarse a una red inalámbrica de internet?",
      "CON LA E. ¿Cómo se llama la técnica de decoración que consiste en tallar figuras en relieve sobre madera, piedra u otros materiales?",
    ],
  },
  {
    letter: "f",
    answer: ["facil", "Fresco", "Fogon"],
    status: 0,
    question: [
      "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
      "CON LA F. ¿Cómo se llama la técnica de pintura que se realiza con pigmentos disueltos en aceite, y que permite mezclar colores y obtener efectos luminosos y de profundidad?",
      "CON LA F. ¿Cómo se llama el utensilio que se utiliza para calentar líquidos o alimentos y que consta de un recipiente y una fuente de calor debajo? ",
    ],
  },
  {
    letter: "g",
    answer: ["galaxia", "garganta", "Guitarra"],
    status: 0,
    question: [
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
      "CON LA G. ¿Cómo se llama el órgano que ayuda a producir sonidos al hablar, cantar o gritar?",
      "CON LA G. ¿Cómo se llama el instrumento musical que se toca con las manos y consta de una caja de resonancia y cuerdas de metal o nylon que se puntean o rasguean?",
    ],
  },
  {
    letter: "h",
    answer: ["harakiri", "Holograma", "hamaca"],
    status: 0,
    question: [
      "CON LA H. Suicidio ritual japonés por desentrañamiento",
      "CON LA H. ¿Cómo se llama el fenómeno óptico en el que la luz se descompone en diferentes colores al atravesar un prisma o un objeto con forma triangular?",
      "CON LA H. Tela resistente que se cuelga de sus extremos y se utiliza como cama. ",
    ],
  },
  {
    letter: "i",
    answer: ["iglesia", "imperdible", "Ilves"],
    status: 0,
    question: [
      "CON LA I. Templo cristiano",
      "CON LA I. Alfiler que se abrocha quedando su punta dentro de un gancho.",
      "CON LA I. Apellido del político que fue presidente de Estonia entre los años 2006 y 2016",
    ],
  },
  {
    letter: "j",
    answer: ["jabali", "jinete", "Judión"],
    status: 0,
    question: [
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
      "CON LA J. Persona que monta a caballo",
      "CON LA J.Variedad de judía de vainas anchas y semilla grande",
    ],
  },
  {
    letter: "k",
    answer: ["kamikaze", "karaoke", "Kilogramo"],
    status: 0,
    question: [
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
      "CON LA K. Diversión consistente en interpretar una canción grabada, mientras se sigue la letra que aparece en una pantalla",
      "CON LA K. Unidad básica de masa del Sistema Internacional de Unidades",
    ],
  },
  {
    letter: "l",
    answer: ["licantropo", "Linaje", "litera"],
    status: 0,
    question: [
      "CON LA L. Hombre lobo",
      "CON LA L.  Ascendencia o descendencia de una familia, especialmente noble",
      "CON LA L. Mueble formado por dos camas puestas una encima de la otra.",
    ],
  },
  {
    letter: "m",
    answer: ["misantropo", "Madriguera", "mayonesa"],
    status: 0,
    question: [
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
      "CON LA M.  Cueva en la que habitan ciertos animales, especialmente los conejos",
      "CON LA M.  Salsa que se hace batiendo huevo y aceite.",
    ],
  },
  {
    letter: "n",
    answer: ["necedad", "Navato", "nuca"],
    status: 0,
    question: [
      "CON LA N. Demostración de poca inteligencia",
      "CON LA N. Espinazo de los vertebrados",
      "CON LA N. Parte posterior de la cabeza situada encima del cuello.",
    ],
  },
  {
    letter: "ñ",
    answer: ["señal", "Acuñar", "teñir"],
    status: 0,
    question: [
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
      "CONTIENE LA Ñ. Hacer o fabricar moneda ",
      "CONTIENE LA Ñ. Dar color al pelo con un tinte especial, permanente o que se vatras algunos lavados.",
    ],
  },
  {
    letter: "o",
    answer: ["orco", "Onírico", "orilla"],
    status: 0,
    question: [
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
      "CON LA O. Perteneciente o relativo a los sueños",
      "CON LA O. Borde del mar, de un lago o de un río",
    ],
  },
  {
    letter: "p",
    answer: ["protoss", "Piolet", "planchar"],
    status: 0,
    question: [
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
      "CON LA P. Instrumento con forma de pico que utilizan los alpinistas para asegurar sus movimientos sobre la nieve o el hielo",
      "CON LA P. Quitar las arrugar a una prenda.",
    ],
  },
  {
    letter: "q",
    answer: ["queso", "Equilátero", "quitamancha"],
    status: 0,
    question: [
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
      "Contiene la Q. Triángulo que tiene todos sus lados iguales ",
      "CON LA Q. Producto natural o preparado que sirve para quitar manchas.",
    ],
  },
  {
    letter: "r",
    answer: ["raton", "Risaralda", "racimo"],
    status: 0,
    question: [
      "CON LA R. Roedor",
      "CON LA R. Departamento de Colombia con capital en la ciudad de Pereira ",
      "CON LA R. Conjunto de uvas sostenidas en un mismo tallo.",
    ],
  },
  {
    letter: "s",
    answer: ["stackoverflow", "Sentar", "sembra"],
    status: 0,
    question: [
      "CON LA S. Comunidad salvadora de todo desarrollador informático",
      "CON LA S. Poner o colocar a alguien en una silla o banco, de manera que quede apoyado y descansando sobre las nalgas",
      "CON LA S. Enterrar semillas en la tierra para que crezcan.",
    ],
  },
  {
    letter: "t",
    answer: ["terminator", "Tipi", "taburete"],
    status: 0,
    question: [
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
      "CON LA T. Tienda de piel de forma cónica que utilizaban como vivienda los indios de las praderas de América del Norte",
      "CON LA T. Asiento sin respaldo",
    ],
  },
  {
    letter: "u",
    answer: ["unamuno", "Unilateral", "untar"],
    status: 0,
    question: [
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
      "CON LA U. Que se refiere o se circunscribe solamente a una parte o a un aspecto de algo",
      "CON LA U. Extender mantequilla sobre una rebanada de pan.",
    ],
  },
  {
    letter: "v",
    answer: ["vikingos", "Vilano", "vecino"],
    status: 0,
    question: [
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
      "CON LA V. Flor del cardo",
      "CON LA V. Persona que vive en el mismo barrio o edificio que otra.",
    ],
  },
  {
    letter: "w",
    answer: ["sandwich", "karaoke", "wifi"],
    status: 0,
    question: [
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
      "CON LA W. Un seminario o presentación que se lleva a cabo en línea a través de internet.",
      "CON LA W. Sistema de conexión inalámbrica para conectarse a internet.",
    ],
  },
  {
    letter: "x",
    answer: ["botox", "Dux", "fenix"],
    status: 0,
    question: [
      "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
      "CONTIENE LA X. En las repúblicas de Venecia o Génova, príncipe o magistrado supremo",
      "CONTIENE LA X. Ave fabulosa que los antiguos creyeron que era única y renacíade sus cenizas.",
    ],
  },
  {
    letter: "y",
    answer: ["peyote", "Ensayar", "yunque"],
    status: 0,
    question: [
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
      "Contiene la Y. Preparar el montaje y ejecución de un espectáculo antes de ofrecerlo al público",
      "Contiene la Y.Hueso que se encuentra dentro del oído, situado entre el martillo y el estribo.",
    ],
  },
  {
    letter: "z",
    answer: ["zen", "Zumbado", "zumbido"],
    status: 0,
    question: [
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
      "CON LA Z. Participio del verbo zumbar",
      "CON LA Z. Sonido que producen algunos insectos como la abeja o el mosquito.",
    ],
  },
];
let players = [
  {
    name: "David20",
    incorrectAnswer: 12,
    corectAnswer: 9,
  },
  {
    name: "IsaacBcN",
    incorrectAnswer: 12,
    corectAnswer: 12,
  },
];

const playGame = () => {
  ////////////////

  const randomQuestionsID = Math.floor(Math.random() * 3);

  const askName = () => {
    const name = window.prompt(`Cual es su nombre o nickname?`);
    if (name === null) {
      return askName();
    } else if (name.length < 1) {
      return askName();
    } else if (name.length > 0) {
      alert(
        `Bienvenido/a ${name}! 
Hoy vamos a jugar a Pasapalabra Game. Consiste en responder 
con una palabra que empiece por cada letra del alfabeto,
en función de las definiciones que se presenten. Si no conoces
la respuesta, puedes contestar "pasapalabra". Y si prefieres 
terminar el juego en cualquier momento, escribe "END".
¡Empecemos!
      `
      );
    } else return askName();
    players.push({ name: name, corectAnswer: 0, incorrectAnswer: 0 });
  };
  ////////////////////////
  let corectAnswer = 0;
  let incorrectAnswer = 0;
  let questionIndex = 0;

  //////////////////////
  const showQuestion = () => {
    if (questionIndex <= questions.length - 1) {
      const answer = window.prompt(
        questions[questionIndex].question[randomQuestionsID]
      );
      if (answer === null) {
        alert(
          `Responda la pregunta o puede introducir "pasapalabra" para saltar a la seguente.`
        );
        return showQuestion();
      } else if (
        answer.toLowerCase() ===
        questions[questionIndex].answer[randomQuestionsID].toLowerCase()
      ) {
        corectAnswer++;
        questionIndex++;
        console.log("Correcto!!!");
        showQuestion();
      } else if (answer.toLowerCase() === "pasaparabla") {
        questionIndex++;
        showQuestion();
      } else if (answer.length < 1) {
        showQuestion();
      } else if (answer.toUpperCase() === "END") {
        alert(`Has acertado ${corectAnswer} preguntas`);
        players.pop();
        return;
      } else {
        questionIndex++;
        incorrectAnswer++;
        console.log("Nooooo!!!");
        showQuestion();
      }
    } else {
      showResults();
    }
  };
  //////////////////////////
  const showResults = () => {
    players[players.length - 1].corectAnswer = corectAnswer;
    players[players.length - 1].incorrectAnswer = incorrectAnswer;

    const showResults = players.sort((a, b) => {
      return a.corectAnswer - b.corectAnswer;
    });

    let results = " Ranking de los Jugadores :";
    for (let index = showResults.length - 1; index >= 0; index--) {
      results = `${results} \n Nombre : ${showResults[index].name} , parablas acertadas : ${showResults[index].corectAnswer} `;
    }
    console.log(results);
    alert(results);
  };

  ////////////////////
  const playAgain = () => {
    const message = window.confirm("Queres jugar otra vez?");
    if (message) {
      playGame();
    } else alert(`Hasta pronto!`);
    return;
  };
  askName();
  showQuestion();
  playAgain();
};

playGame();
