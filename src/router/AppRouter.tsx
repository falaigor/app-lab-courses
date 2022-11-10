import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "@/Layout/Default";
import { ClassroomLayout } from "@/Layout/Classroom";

import { HomePage } from "@/pages/Home";
import { CoursesPage } from "@/pages/Courses";
import { ClassroomPage } from "@/pages/Classroom";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="courses" element={<CoursesPage />} />
      </Route>

      <Route path="/slug" element={<ClassroomLayout />}>
        <Route path="" element={<ClassroomPage />} />
      </Route>
    </Routes>
  );
}
