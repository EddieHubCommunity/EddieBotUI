import React from "react";
import { List } from 'semantic-ui-react';
import UserMessage from "./user-message.component";

import "./popular-messages.styles.scss";

const PopularMessagesPage = () => {
  // TODO: This is mock data to test the UI. This data will come from our DB in Firebase later.
  const messages= [
    {
      text: `CodeWars meeting is this Sunday at 2pm PST 5pm EST!!
      No prep necessary to join the call! Join, and we'll live code a CodeWars problem together. You can always comes on the call just to observe, as well :slight_smile:`,
      avatarUrl: 'https://avatars.githubusercontent.com/BOLT04',
      userName: 'BOLT04',
      reactions: 20
    },
    {
      text: 'I see you guys like the thumbs up reaction haha',
      avatarUrl: 'https://avatars.githubusercontent.com/eddiejaoude',
      userName: 'eddiejaoude',
      reactions: 23
    },
    {
      text: 'Friday 1 hour live stream',
      avatarUrl: 'https://avatars.githubusercontent.com/rossanodan',
      userName: 'rossanodan',
      reactions: 22
    },
    {
      text: 'UX and front-end is something I dread haha',
      avatarUrl: 'https://avatars.githubusercontent.com/marekzylicz',
      userName: 'marekzylicz',
      reactions: 21
    },
  ];

  // TODO: maybe a message object should have an "id" field, so that we use that instead of "idx" as a key
  return (
    <div className="popular-messages-page">
      <h1 className="title">Most Popular Messages</h1>

      <List size="huge">
        {messages.sort(sortByReactions).map((m, idx) => (
          <UserMessage key={idx} message={m} />
        ))}
      </List>
    </div>
  );
};

/**
 * @param {import('./user-message.component').UserMessage} m1
 * @param {import('./user-message.component').UserMessage} m2
 */
function sortByReactions(m1, m2) {
  return m2.reactions - m1.reactions;
}

export default PopularMessagesPage;
