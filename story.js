export default [
  {
    text: "Nachdem du über 12 Jahre wegen eines bewaffneten Überfalls auf einen Politiker im Gefängnis saßt, ist heute der Tag, an welchem du deine Freiheit wiedererlagnst. Du gehst auf die Straße und bewunderst, wie sehr sich die Stadt seit deiner Verhaftung verändert hat. Dein treuster Untertante aus deiner alten Gang kommt dich abholen und hilft dir, dich zurecht zu finden.",
    text:"Angelo: Wow Boss, du bist jetzt also auch mal aus'm Bau. Hat ja ewig gedauert! Du glaubst gar nicht, was hier bei uns alles passiert ist. Es haben haben sich echt viele neue Gangs gebildet und die Konkurrenz ist hart! ",
    task: `Finde heraus, welche Gruppen es alles gibt.`,
    sqlRequest: `SELECT * FROM Gruppen`,
    sqlResult: [
      ["Name", "Mitglieder", "Territorium"],
      ["awdgziawgd", "1", "1"],
      ["Die Ratten", "10", "2"],
      ["Die Vögel", "5", "3"],
    ]
  },
  {
    text: `Du hast herausgefunden, dass die Gruppe "Die Ratten" die Stadt kontrolliert. Du musst sie ausschalten.`,
    task: `Finde heraus, wo sich "Die Ratten" aufhalten.`,
    sqlRequest: `SELECT * FROM Gruppen WHERE name = "Die Ratten"`,
    sqlResult: ``,
    answer: `Die Ratten halten sich im Hafen auf.`,
    y,
  },
];
