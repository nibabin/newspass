import React, { useContext, useEffect, useState } from "react";
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
import { getAuth } from "firebase/auth";



export const Router = () => {
    let [payWallPass, setPayWallPass] = useState(localStorage.getItem('payWallPass') ? true : false);
    let [logged, setLogged] = useState(false);

    const auth = getAuth();
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user) setLogged(true);
            localStorage.setItem('authUser', JSON.stringify(user))
        })
    }, [])

    return (
        <Context.Provider value={{ payWallPass, setPayWallPass, logged, setLogged }}>
            <HashRouter>
                <Routes>
                    <Route path='/' element={localStorage.getItem('authUser') ? <HomeScreen /> : <LoginScreen />} />
                    <Route path='/feed' element={<HomeScreen />} />
                    <Route path='/nytLogin/' element={<NYTLoginScreen />} />
                    <Route path='/videoScreen' element={<VideoScreen />} />
                    <Route path='/podcastScreen' element={<PodcastScreen />} />
                </Routes>
            </HashRouter>
        </Context.Provider>
    )
}   