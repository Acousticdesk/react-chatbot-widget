import { ReactChatWidget } from "./components/ReactChatWidget/ReactChatWidget";

// todo akicha: add storybook
function App() {
  return (
    <div>
      {/* todo akicha: should be rendered in portal */}
      <ReactChatWidget />
    </div>
  );
}

export default App;
