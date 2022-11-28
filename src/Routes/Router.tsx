import DetailPage from "@/Pages/DetailPage";
import MainPage from "@/Pages/MainPage";
import NotFound from "@/Pages/NotFound";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
