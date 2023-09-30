import { Routes, Route } from "react-router-dom";
import { Main } from " /pagesmain/main";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}