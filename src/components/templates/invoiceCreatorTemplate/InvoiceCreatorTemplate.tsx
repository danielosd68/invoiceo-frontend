import React from 'react';
import {Button, Divider} from "@mui/material";

const InvoiceCreatorTemplate = () => {
    return (
        <div>
            <h1>Wystaw fakturę</h1>
            <p className={'text-gray-400'}>Uzupełnij potrzebne dane, dodaj towar / usługę, określ stawkę VAT i wyślij do klienta.</p>
            <Divider/>
            <h2>Podstawowe dane faktury</h2>
            <p className={'text-gray-400'}>Dodaj logo, datę wystawienia i numer faktury.</p>
            <Divider/>
            <h2>Dane sprzedawcy</h2>
            <Divider/>
            <h2>Dane nabywcy</h2>
            <Divider/>
            <h2>Towar, ilość, stawka VAT</h2>
            <Divider/>
            <h2>Uwagi</h2>
            <Divider/>
            <div className={'mt-5 flex justify-end'}>
                <Button variant={'contained'} sx={{backgroundColor: '#000000'}}>Drukuj fakturę</Button>
            </div>
        </div>
    );
};

export default InvoiceCreatorTemplate;