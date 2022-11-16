import { BrowserRouter } from "react-router-dom";
import { LabCourseContextProvider } from "./context/LabCourseContext";
import { AppRouter } from "./router/AppRouter";
import { globalStyles } from "./styles/global";

export function App() {
  globalStyles();

  return (
    <BrowserRouter>
      <LabCourseContextProvider>
        <AppRouter />
      </LabCourseContextProvider>
    </BrowserRouter>
  );
}
