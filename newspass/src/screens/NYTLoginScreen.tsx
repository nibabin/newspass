import React, { useContext, useEffect, useState } from 'react';
import LabeledInput from "../components/design/Input"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useLocation, useNavigate } from 'react-router-dom';
import { Article } from '../articles/Articles';
import { Context, ContextProps } from '../context';


export default function NYTLoginScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {payWallPass, setPayWallPass} = useContext(Context);
    
    const location = useLocation();
    const article = location.state.article;

    let navigate = useNavigate();

    const authenticate = async (e: any) => {
        e.preventDefault();
        setPayWallPass(true);
        localStorage.setItem('payWallPass', 'true')
    }

    return (
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
            {!payWallPass && article.payWall && <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img className="mx-auto h-12 w-auto" src="https://th.bing.com/th/id/OIP.sI5ruuw3uy2Est_sf1i40AHaBe?w=298&h=70&c=7&r=0&o=5&pid=1.7" />
            </div>}

            {!payWallPass && article.payWall && <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6">
                        <LabeledInput value={username} onChange={(e) => setUsername(e.target.value)} labelName="Username" id="username" name="username" type="text" />
                        <LabeledInput value={password} onChange={(e) => setPassword(e.target.value)} labelName="Password " id="password" name="password" type="password" />

                        <div>
                            <button onClick={authenticate} type="submit" className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add Account</button>
                        </div>
                    </form>
                </div>
            </div>}

            {(payWallPass || !article.payWall) && <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 bg-white">{article.title}</label>
                <textarea rows={23} readOnly value={article.text} className="block p-2.5 w-full text-sm text-gray-900 bg-white-300 rounded-lg border focus:ring-0 !outline-none focus:ring-offset-0 focus:border-gray-300  border-gray-300 placeholder-gray-400 text-white" placeholder="" />
            </div>}

            <div className="w-full h-12 bg-gray-300 fixed left-0 bottom-0 flex justify-left items-center text-white text-2xl">
                <div className="ml-1 w-10 h-10 round bg-gray-100 font-black" onClick={() => navigate(-1)}>
                    <svg className="stroke-neutral-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </div>
            </div>
        </div>);
}