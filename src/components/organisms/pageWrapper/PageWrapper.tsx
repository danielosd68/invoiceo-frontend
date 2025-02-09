"use client"

import React, {ReactNode} from 'react';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers";
import Header from "invoiceo/components/organisms/header/Header";
import Footer from "invoiceo/components/organisms/footer/Footer";
import 'animate.css';

const PageWrapper = ({children}: { children: ReactNode }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className={'lg:flex flex-col items-center justify-items-center min-h-screen lg:p-8'}>
                <Header/>
                <main className={'w-full lg:w-[1024px] p-10 lg:p-20 rounded-xl lg:shadow-xl'}>
                    {children}
                </main>
                <Footer/>
            </div>
        </LocalizationProvider>

    );
};

export default PageWrapper;