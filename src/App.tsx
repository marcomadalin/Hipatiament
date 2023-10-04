import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import { ThemeProvider } from "@mui/material";
import light from "./themes/light.js";
import Anticonceptius from "./pages/Anticonceptius";
import PhineasGage from "./pages/PhineasGage";
import Alzeimer from "./pages/Alzeimer";
import GrupSanguinis from "./pages/GrupSanguinis";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<MainLayout />}>
        <Route element={<Home />} />
        <Route element={<GrupSanguinis />} path="/GrupSanguinis" />
        <Route element={<Alzeimer />} path="/Alzeimer" />
        <Route element={<PhineasGage />} path="/PhineasGage" />
        <Route element={<Anticonceptius />} path="/Anticonceptius" />
        <Route path="*" element={<Home />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <ThemeProvider theme={light}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
