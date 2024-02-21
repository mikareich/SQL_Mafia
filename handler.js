import story from "./story.js";
import {
  consoleContainer,
  taskContainer,
  textArea,
  form,
  groupTable,
  victimTable,
  itemTable,
  memberTable,
} from "./elements.js";
import tables from "./tables.js";

let index = 0;

const init = () => {
  // render tables
  renderTables();

  renderStory();

  // submit event
  form.addEventListener("submit", (e) => {
    console.log(textArea.value, story[index].sqlRequest);

    // check if textArea is correct
    if (textArea.value === story[index].sqlRequest) renderNextStory();

    else renderConsole("Falsche Antwort", "error");

    e.preventDefault();
  });
};

const renderNextStory = () => {
  index++;
  renderStory();
};

const renderStory = () => {
  // console table
  if (index !== 0)
    consoleContainer.innerHTML += tablify("", story[index - 1].sqlResult);

  // render console
  renderConsole(story[index].text, "story");

  // render task
  renderTask();
};

const renderConsole = (text, type) => {
  const consoleText = document.createElement("p");
  consoleText.textContent = text;
  consoleText.classList.add(type);
  consoleContainer.appendChild(consoleText);
};

const renderTables = () => {
  // render tables
  groupTable.innerHTML = tablify("Gruppen", tables.groupTable);
  victimTable.innerHTML = tablify("Opfer", tables.victimTable);
  itemTable.innerHTML = tablify("Gegenstände", tables.itemTable);
  memberTable.innerHTML = tablify("Mitglieder", tables.memberTable);
};

const tablify = (title, table) => {
  let html = "";
  if (title !== "") html += `<h2>${title}</h2>`;

  if (!table) return "";

  html += "<table>";

  for (const row of table) {
    html += "<tr>";

    for (const cell of row) {
      html += `<td>${cell}</td>`;
    }

    html += "</tr>";
  }

  html += "</table>";

  return html;
};

const renderTask = () => {
  // render task
  taskContainer.innerHTML = story[index].task;

  // render console
  renderConsole(story[index].task, "task");
};

export { init, renderNextStory, renderStory, renderConsole, renderTask };
