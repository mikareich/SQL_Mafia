export default [
  {
    text: `Damals war deine Mafia die größte der Stadt, dann bist du ins Gefängnis gekommen. Jetzt bist du wieder draußen und musst die Stadt wiedererobern.`,
    task: `Finde heraus, welche Gruppen sich gebildet haben.`,
    sqlRequest: `SELECT * FROM Gruppen`,
    sqlResult: [
      ["Name", "Mitglieder", "Territorium"],
      ["awdgziawgd", "1", "1"],
      ["Die Ratten", "10", "2"],
      ["Die Vögel", "5", "3"],
    ],
    answer: `Du gehörst zur Gruppe awdgziawgd.`
  },
  {
    text: `Du hast herausgefunden, dass die Gruppe "Die Ratten" die Stadt kontrolliert. Du musst sie ausschalten.`,
    task: `Finde heraus, wo sich "Die Ratten" aufhalten.`,
    sqlRequest: `SELECT * FROM Gruppen WHERE name = "Die Ratten"`,
    sqlResult: ``,
    answer: `Die Ratten halten sich im Hafen auf.`,
  },
];
