"use client"

import React, {ReactNode} from 'react';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers";
import Header from "invoiceo/components/organisms/header/Header";
import Footer from "invoiceo/components/organisms/footer/Footer";
import 'animate.css';
import {LinearProgress} from "@mui/material";

const PageWrapper = ({children}: { children: ReactNode }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className={'flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-4 sm:p-20'}>
                <Header/>
                <main className={'w-full lg:w-[1024px] p-20 rounded-xl shadow-xl'}>
                    {children}
                </main>
                <Footer/>
            </div>
        </LocalizationProvider>

    );
};

export default PageWrapper;