import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    HashRouter,
    Route,
    Routes
} from "react-router-dom"
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import NYTLoginScreen from "../screens/NYTLoginScreen";
import { Context } from "../context";
import VideoScreen from "../screens/VideoScreen";
import PodcastScreen from "../screens/PodcastScreen";



export const Router = () => {
    let [payWallPass, setPayWallPass] = useState(false);

    return (
        <Context.Provider value={{ payWallPass, setPayWallPass }}>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<LoginScreen />} />
                    <Route path='/feed' element={<HomeScreen />} />
                    <Route path='/nytLogin/' element={<NYTLoginScreen />} />
                    <Route path='/videoScreen' element={<VideoScreen />} />
                    <Route path='/podcastScreen' element={<PodcastScreen />} />
                </Routes>
            </HashRouter>
        </Context.Provider>
    )
}   