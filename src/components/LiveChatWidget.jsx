import React, { useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const LiveChatWidget = () => {
  const tawkMessengerRef = useRef(null);

  return (
    <div>
      <TawkMessengerReact
        propertyId="66b2549c32dca6db2cbaa766"
        widgetId="1i4k9l14l"
        ref={tawkMessengerRef}
      ><div className="fixed top-50 right-4">
          <p className='h-[20px] w-[2vw] bg-black'></p>
        </div></TawkMessengerReact>
    </div>
  );
};

export default LiveChatWidget;