const table1 = document.getElementById("table1");
const table2 = document.getElementById("table2");
const table3 = document.getElementById("table3");
const table4 = document.getElementById("table4");

const taskContainer = document.getElementById("task")
const consoleContainer = document.getElementById("console")

const input = document.getElementById("input_text");
const button = document.getElementById("input_button")

let index  = 0;

const name = prompt("Gib dein namen ein!")

const story = [
    {
        text: `Damals war deine Mafia die größte der Stadt, dann bist du, ${name}, ins Gefängnis gekommen. jetzt bist du wieder draußen und musst die Stadt wiedererobern.`,
        task: `Finde heraus, welche Gruppen sich gebildet haben.`,
        sql: `SELECT * FROM Gruppen`,
        answer: `Du gehörst zur Gruppe awdgziawgd.`
    }
]
