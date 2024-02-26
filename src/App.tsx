import React from "react";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import {ThemeProvider} from "@mui/material";
import light from "./themes/light.js";
import Article from "./pages/Article";
import ArticleList from "./pages/ArticleList";
import AboutMe from "./pages/AboutMe";
import Collaborations from "./pages/Collaborations";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route element={<MainLayout/>}>
                <Route element={<Home/>}/>
                <Route element={<ArticleList/>} path="/Articles"/>
                <Route element={<AboutMe/>} path="/SobreMi"/>
                <Route element={<Collaborations/>} path="/Colaboracions"/>
                <Route element={<Article/>} path="/GrupsSanguinis"/>
                {
                    /*
                <Route element={<Article/>} path="/Alzheimer"/>
                <Route element={<Article/>} path="/PhineasGage"/>
                <Route element={<Article/>} path="/Anticonceptius"/>
                <Route element={<Article/>} path="/CamaEnganxada"/>
                     */
                }
                <Route path="*" element={<Home/>}/>
            </Route>
        </Route>
    )
);

function App() {
    return (
        <ThemeProvider theme={light}>
            <RouterProvider router={router}/>
        </ThemeProvider>
    );
}

export default App;
