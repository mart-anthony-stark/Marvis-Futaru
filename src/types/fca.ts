interface EventAttachment {
  type?: string;
  url?: string;
}

export interface FCAEvent {
  type: string;
  body?: string;
  senderID: string;
  messageID: string;
  attachments: EventAttachment[];
  threadID: string;
}
