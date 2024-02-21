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

let index = 0;

const init = () => {
  renderStory();

  // submit event
  form.addEventListener("submit", (e) => {
    console.log(textArea.value, story[index].sqlRequest);

    // check if textArea is correct
    if (textArea.value === story[index].sqlRequest) renderNextStory();

    e.preventDefault();
  });
};

const renderNextStory = () => {
  index++;
  renderStory();
};

const renderStory = () => {
  // render console
  renderConsole(story[index].text, "story");

  // render task
  renderTask();

  // render tables
  renderTables();
};

const renderConsole = (text, type) => {
  const consoleText = document.createElement("p");
  consoleText.textContent = text;
  consoleText.classList.add(type);
  consoleContainer.appendChild(consoleText);
};

const renderTables = () => {
  // render tables
  if (story[index].groupTable) groupTable.innerHTML = tablify("Gruppen", story[index].groupTable)
  if (story[index].victimTable) victimTable.innerHTML = tablify("Opfer", story[index].victimTable)
  if (story[index].itemTable) itemTable.innerHTML = tablify("Gegenstand", story[index].itemTable)
  if (story[index].memberTable) memberTable.innerHTML = tablify("Mitglied", story[index].memberTable)
};

const tablify = (title, table) => {
  let html = `<h2>${title}</h2>`;

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
