import { DarkTheme } from "./components/DarkTheme";
import { ReactChatWidget } from "./components/ReactChatWidget/ReactChatWidget";

// todo akicha: add storybook
function App() {
  return (
    <div>
      {/* todo akicha: should be rendered in portal */}
      <DarkTheme>
        <ReactChatWidget />
      </DarkTheme>
    </div>
  );
}

export default App;
