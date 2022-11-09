import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../Layout/Default";
import { HomePage } from "../pages/Home";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
