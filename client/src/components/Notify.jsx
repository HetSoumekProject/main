// import React, { useEffect, useState } from "react";
// import io from "socket.io-client";
// import axios from "axios";

// const socket = io("http://localhost:3000");

// function Notify() {
//   const handleNotifyClick = () => {
//     socket.emit("notification", {
//       // id: 17,
//       message: "New bid done!",
//       timestamp: new Date().toLocaleString()
//     });
//   };

//   return (
//     <div>
//       <button onClick={handleNotifyClick}>Send notification</button>
//     </div>
//   );
// }
// export default Notify