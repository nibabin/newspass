import React, { useState } from 'react';
import { } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Article, articles } from '../articles/Articles';
import { NewsArticle } from '../components/design/NewsArticle';


export default function PodcastScreen() {
    const navigate = useNavigate();

    return (
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="w-full h-12 bg-gray-300 fixed flex justify-start items-center left-0 top-0  text-white text-2xl">
                <div className="ml-1 w-10 h-10 round bg-gray-100 font-black">
                    <svg className="stroke-neutral-800 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>

                </div>

                <div className="flex items-center">

                    <div className="text-black ml-2 w-10 h-10 text-lg font-bold  flex items-center">Main</div>

                    <div className="ml-1 w-4 h-4 round font-black">
                        <svg className="stroke-neutral-800 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>

                </div>

            </div>

            <div className="w-full h-12 bg-gray-300 fixed left-0 bottom-0 flex justify-around items-center text-white text-2xl">
                <div className="ml-1 w-15 h-15 round bg-gray-100 font-black" onClick={() => navigate('/videoScreen')}>
                    <svg className="stroke-neutral-800 w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                        <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                    </svg>

                </div>

                <div className="ml-1 w-15 h-15 round bg-gray-100 font-black" onClick={() => navigate('/feed')}>
                    <svg className="stroke-neutral-800 w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                    </svg>

                </div>

                <div className="ml-1 w-15 h-15 round bg-blue-100 font-black">
                    <svg className="stroke-blue-800 w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                    </svg>

                </div>

            </div>
        </div>
    );
}