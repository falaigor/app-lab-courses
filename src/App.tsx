import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { globalStyles } from "./styles/global";

export function App() {
  globalStyles();

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
