import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";
const FbChat = () => {
  return (
    <div>
      <FacebookProvider appId="834188792140074" chatSupport>
        <CustomChat pageId="316982144842751" minimized={false} />
      </FacebookProvider>{" "}
    </div>
  );
};

export default FbChat;
