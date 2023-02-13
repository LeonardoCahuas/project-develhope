import React from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
  LoadingIndicator,
  ChannelList,
} from "stream-chat-react";

import "stream-chat-react/dist/css/v2/index.css";
import "./styles/layout.css";
import { useClient } from "./utilities/useClient";

/* const chatClient = new StreamChat('q7uvkekbunfw'); */

const App = () => {
  const userToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoicmFzcHktYmFzZS0zIn0.lLROgnBvlvWOI8HTrZCk5pW6LyAWG7EIgD8QmCMekfo";

  const user =
    {
      id: "raspy-base-3",
      name: "raspy-base-3",
      image:
        "https://getstream.io/random_png/?id=raspy-base-3&name=raspy-base-3",
    };

  const chatClient = useClient({
    apiKey: "q7uvkekbunfw",
    userData: user,
    tokenOrProvider: userToken,
  });


  const filters = { type: 'messaging', members: { $in: ["yaricherchi7"] } };
const sort = { last_message_at: -1 };

if (!chatClient) {
  return <LoadingIndicator />;
}

  return (
    <Chat client={chatClient} theme='str-chat__theme-light'>
      <ChannelList filters={filters} sort={sort} />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default App;

