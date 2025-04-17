import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// const parent = React.createElement("div",{id: "parent"}, [
//     React.createElement("div",{id: "child", key: 1},
//         React.createElement("h1",{},"Im an h1 tag inside React")
//     ),
//     React.createElement("div",{id: "child2", key: 2},
//         React.createElement("h1",{},"Im an h1 tag inside React")
//     )
// ]
// );


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
