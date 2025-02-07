"use client"

import React, {ReactNode} from 'react';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers";
import Header from "invoiceo/components/organisms/header/Header";

const PageWrapper = ({children}: { children: ReactNode }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className={'flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-4 sm:p-20'}>
                <Header/>
                <main className={'w-full lg:w-[1024px]'}>
                    {children}
                </main>
            </div>
        </LocalizationProvider>

    );
};

export default PageWrapper;