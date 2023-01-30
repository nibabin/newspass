import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom"
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import NYTLoginScreen from "../screens/NYTLoginScreen";
import { article1, article2 } from '../articles/Articles';
import { Context } from "../context";



export const Router = () => {
    let [payWallPass, setPayWallPass] = useState(false);

    return (
        <Context.Provider value={{ payWallPass, setPayWallPass }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginScreen />} />
                    <Route path='/feed' element={<HomeScreen />} />
                    <Route path='/nytLogin/article1' element={<NYTLoginScreen article={article1} />} />
                    <Route path='/nytLogin/article2' element={<NYTLoginScreen article={article2} />} />
                </Routes>
            </BrowserRouter>
        </Context.Provider>
    )
}   