export const BOTNAME = "Marvis Futaru";
export const PREFIX = ">";
export const VIPS = [""];

export const badwords = [
  "sapak",
  "suntok",
  "suntukan",
  "suntukin",
  "tanga",
  "bobo",
  "shunga",
  "engot",
  "epal",
  "taena",
  "putangina",
  "tangina",
  "inamo",
  "puke",
  "tite",
  "titi",
  "puki",
  "puta",
  "pota",
  "gago",
  "gagu",
  "shit",
  "kingina",
];

export const generateAnsReply = (answer: string): string => {
  const replies = [
    `I got it! it's ${answer}`,
    `My answer to that is: ${answer}`,
    `That would be: ${answer}`,
  ];
  return replies[Math.floor(Math.random() * replies.length)];
};

export const helpStr = `____________________________
${BOTNAME}
___________________________
Commands:
• ${PREFIX}help
----------------------
• ${PREFIX}verse
----------------------
• ${PREFIX}wiki [search parameter]
----------------------
• ${PREFIX}motivation
----------------------
• ${PREFIX}meme
----------------------
• ${PREFIX}marvis [msg]
----------------------
• ${PREFIX}jobseek [position] [place(optional)]
----------------------
• ${PREFIX}music [title]
----------------------
• ${PREFIX}solve [exp]
----------------------
• ${PREFIX}derivative [exp]
----------------------
• ${PREFIX}simplify [exp]
----------------------
• ${PREFIX}mean [dataset]
----------------------
• ${PREFIX}median [dataset]
----------------------
• ${PREFIX}mode [dataset]
----------------------
Created by: @Mart Salazar
https://github.com/mart-anthony-stark
`;
