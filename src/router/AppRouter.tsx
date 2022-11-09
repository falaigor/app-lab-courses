import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "@/Layout/Default";
import { HomePage } from "@/pages/Home";
import { CoursesPage } from "@/pages/Courses";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
      </Route>
    </Routes>
  );
}
