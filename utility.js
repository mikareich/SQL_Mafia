const table1 = document.getElementById("table1");
const table2 = document.getElementById("table2");
const table3 = document.getElementById("table3");
const table4 = document.getElementById("table4");

const taskContainer = document.getElementById("task");
const consoleContainer = document.getElementById("console");

const input = document.getElementById("input_text");
const form = document.getElementById("input_form");

let index = 0;

// const name = prompt("Gib dein namen ein!")
const name = "Max Mustermann";


const story = [
  {
    text: `Damals war deine Mafia die größte der Stadt, dann bist du, ${name}, ins Gefängnis gekommen. jetzt bist du wieder draußen und musst die Stadt wiedererobern.`,
    task: `Finde heraus, welche Gruppen sich gebildet haben.`,
    sqlRequest: `SELECT * FROM Gruppen`,
    sqlResult: ``,
    answer: `Du gehörst zur Gruppe awdgziawgd.`,
  },
  {
    text: `Du hast herausgefunden, dass die Gruppe "Die Ratten" die Stadt kontrolliert. Du musst sie ausschalten.`,
    task: `Finde heraus, wo sich "Die Ratten" aufhalten.`,
    sqlRequest: `SELECT * FROM Gruppen WHERE name = "Die Ratten"`,
    sqlResult: ``,
    answer: `Die Ratten halten sich im Hafen auf.`,
  },
];

const init = () => {
  renderStory();

  // submit event
  form.addEventListener("submit", (e) => {
    console.log(input.value, story[index].answer);

    // check if input is correct
    if (input.value === story[index].sql) renderNextStory();

    e.preventDefault();
  });
};

const renderNextStory = () => {
  index++;
  renderStory();
}

const renderStory = () => {
  // render console
  renderConsole(story[index].text);

  // render task
  renderTask();
};

const renderConsole = (text) => {
  const consoleText = document.createElement("p");
  consoleText.textContent = text;
  consoleContainer.appendChild(consoleText);
};

const renderTask = () => {
  // render task
  taskContainer.innerHTML = story[index].task;

  // render console
  renderConsole(story[index].task);
};

init();
