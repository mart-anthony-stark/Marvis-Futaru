export const botname = "Marvis Futaru";
export const prefix = ">";
export const vips = [""];

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
${botname}
___________________________
Commands:
• ${prefix}help
----------------------
• ${prefix}verse
----------------------
• ${prefix}wiki [search parameter]
----------------------
• ${prefix}motivation
----------------------
• ${prefix}meme
----------------------
• ${prefix}marvis [msg]
----------------------
• ${prefix}jobseek [position] [place(optional)]
----------------------
• ${prefix}music [title]
----------------------
• ${prefix}solve [exp]
----------------------
• ${prefix}derivative [exp]
----------------------
• ${prefix}simplify [exp]
----------------------
• ${prefix}mean [dataset]
----------------------
• ${prefix}median [dataset]
----------------------
• ${prefix}mode [dataset]
----------------------
Created by: @Mart Salazar
https://github.com/mart-anthony-stark
`;
