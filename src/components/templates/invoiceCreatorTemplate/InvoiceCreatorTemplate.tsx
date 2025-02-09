import React from 'react';
import {Button, Divider, LinearProgress} from "@mui/material";
import InvoiceCreator from "invoiceo/components/organisms/invoiceCreator/InvoiceCreator";

const InvoiceCreatorTemplate = () => {
    return (
        <div>
            <LinearProgress variant="determinate" value={50} sx={{position: 'fixed', zIndex: 10, top: 0, left: 0, width: '100%'}}/>
            <h1 className={'mt-0'}>Wystaw fakturę</h1>
            <p className={'text-gray-400'}>Uzupełnij potrzebne dane, dodaj towar / usługę, określ stawkę VAT i wyślij do klienta.</p>
            {InvoiceCreator.getForm("nips")}
            <Divider/>
            <h2>Podstawowe dane faktury</h2>
            <p className={'text-gray-400'}>Dodaj logo, datę wystawienia i numer faktury.</p>
            {InvoiceCreator.getForm("basic")}
            <Divider/>
            <h2>Dane sprzedawcy</h2>
            {InvoiceCreator.getForm("sellerDetails")}
            <Divider/>
            <h2>Dane nabywcy</h2>
            {InvoiceCreator.getForm("customerDetails")}
            <Divider/>
            <h2>Towar, ilość, stawka VAT</h2>
            <Divider/>
            <h2>Uwagi</h2>
            {InvoiceCreator.getForm("comments")}
            <Divider/>
            <div className={'mt-5 flex justify-end'}>
                <Button variant={'contained'} sx={{backgroundColor: '#000000'}}>Drukuj fakturę</Button>
            </div>
        </div>
    );
};

export default InvoiceCreatorTemplate;