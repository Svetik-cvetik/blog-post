import Header from "./components/Header";
import Home from "./components/pages/Home";
import Articles from "./components/pages/Articles";
import Contacts from "./components/pages/Contacts";
import NotFound from "./components/pages/NotFound";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layouts/MainLayout";
import ArticlesPage from "./components/pages/Articles";


export const App = () => {

  return (
    <>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
        
  </>
);
};

