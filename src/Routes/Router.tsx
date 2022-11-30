import Header from "@/Components/Header";
import DetailPage from "@/Pages/DetailPage";
import MainPage from "@/Pages/MainPage";
import NotFound from "@/Pages/NotFound";
import SearchPage from "@/Pages/SearchPage";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/:owner/:repo"
        element={
          <>
            <Header />
            <MainPage />
          </>
        }
      />
      <Route path="/" element={<SearchPage />} />
      <Route
        path="/:owner/:repo/detail/:id"
        element={
          <>
            <Header />
            <DetailPage />
          </>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
