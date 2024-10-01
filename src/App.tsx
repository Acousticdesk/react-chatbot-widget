import { ReactChatWidget } from "./components/ReactChatWidget/ReactChatWidget";

function App() {
  return (
    <div>
      {/* todo akicha: should be rendered in portal */}
      <ReactChatWidget />
    </div>
  );
}

export default App;
