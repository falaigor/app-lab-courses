import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
