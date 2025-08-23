// import Content from "./sections/content/Content";
// import Main from "./sections/main/Main";

// function App() {
//   return (
//     <div>
//       {/* <Header /> */}
//       <Main />
//       <Content />
//     </div>
//   );
// }

// export default App;

import Content from "./sections/content/Content";
import Main from "./sections/main/Main";

function App() {
  return (
    // общий слой
    <div className="relative min-h-screen bg-black">
      <div className="fixed inset-0 z-0 overflow-y-auto">
        <Content />
      </div>

      <div className="relative z-10">
        <Main />
      </div>

      <div className="h-screen" />
    </div>
  );
}

export default App;
