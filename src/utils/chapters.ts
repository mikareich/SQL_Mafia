import { Chapter } from "@/types";

const chapters: Chapter[] = [
  {
    id: "1",
    task: "Finde heraus, welche Gruppen es alles gibt.",
    content: [
      "Nachdem Salvatore Martino über 12 Jahre wegen eines bewaffneten Überfalls auf einen Politiker im Gefängnis saßt, ist heute der Tag, an welchem du deine Freiheit wiedererlagnst. Du gehst auf die Straße und bewunderst, wie sehr sich die Stadt seit deiner Verhaftung verändert hat. Dein treuster Untertante aus deiner alten Gang kommt dich abholen und hilft dir, dich zurecht zu finden.",
      "Angelo: Wow Boss, du bist jetzt also auch mal aus'm Bau. Hat ja ewig gedauert! Du glaubst gar nicht, was hier bei uns alles passiert ist. Es haben haben sich echt viele neue Gangs gebildet und die Konkurrenz ist hart! ",
    ],
    sql: `SELECT * FROM Gruppen;`,
  },
];

export default chapters;
