import { FCAEvent } from "../types";

import fetch from "node-fetch";
import { removeFirstWord } from "./helpers";

export const jobseek = async (input: string, api: any, event: FCAEvent) => {
  const args = removeFirstWord(input).split(" ");

  if (args.length == 0)
    return api.sendMessage(
      "Invalid argument, please specify your job position\n jobseek [position] [place(optional)]",
      event.threadID,
      event.messageID
    );

  try {
    const page = Math.floor(Math.random() * 10);
    const position = args[0];
    const place = args.length == 2 ? args[1] : "";
    const res = await fetch(
      `https://jobs-hunter-api.herokuapp.com/jobs?job=${position}&place=${place}&page=${page}`
    );
    const data: any = await res.json();
    const jobs = data.jobs.jobs;

    if (jobs.length == 0)
      return api.sendMessage(
        "Sorry, I haven't found a job opportunity in that position",
        event.threadID,
        event.messageID
      );
    const picked = jobs[Math.floor(Math.random() * jobs.length)];

    const reply = `---Job Opportunity---
Job title: ${picked.job_title}
Company: ${picked.company_name}
Location: ${picked.company_location}
Description: ${picked.job_desc}
More info: ${picked.link}`;

    return api.sendMessage(reply, event.threadID, event.messageID);
  } catch (error) {
    console.log(error);
    return api.sendMessage(
      "Sorry, I haven't found a job opportunity in that position",
      event.threadID,
      event.messageID
    );
  }
};
