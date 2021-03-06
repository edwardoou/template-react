import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView, AboutView, SignInView, GitHubView } from "../pages";
import * as ROUTES from "./routes";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.HOME} element={<HomeView />} />
      <Route path={ROUTES.ABOUT} element={<AboutView />} />
      <Route path={ROUTES.SIGN_IN} element={<SignInView />} />
      <Route path={ROUTES.CALLBACK} element={<GitHubView />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
