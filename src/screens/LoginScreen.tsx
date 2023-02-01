import React, { useContext, useEffect, useState } from 'react';
import LabeledInput from "../components/design/Input"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Context } from '../context';


export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { logged, setLogged } = useContext(Context);

    let navigate = useNavigate();

    const authenticate = async (e: any) => {
        e.preventDefault();
        try {
            const auth = getAuth();
            const res = await signInWithEmailAndPassword(auth, email, password)
            setLogged(true);
            // console.log(res.user);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (logged) navigate('/feed');
    }, [logged]);

    return (
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
            {!logged && <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" />
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">NewsPass</h2>
            </div>}

            {!logged && <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6">
                        <LabeledInput value={email} onChange={(e) => setEmail(e.target.value)} labelName="Email Address" id="email" name="email" type="email" />
                        <LabeledInput value={password} onChange={(e) => setPassword(e.target.value)} labelName="Password " id="password" name="password" type="password" />

                        <div>
                            <button onClick={authenticate} type="submit" className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>}
        </div>);
}