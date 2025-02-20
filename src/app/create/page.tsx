"use client"
import React, {useEffect} from 'react';
import InvoiceCreatorTemplate from "invoiceo/components/templates/invoiceCreatorTemplate/InvoiceCreatorTemplate";
import PageWrapper from "invoiceo/components/organisms/pageWrapper/PageWrapper";
import * as invoiceModel from "invoiceo/data.json";

const Page = () => {


    useEffect(() => {
        const invoiceDataFromLocalStorage = localStorage.getItem('INVOICEO_INVOICE_MODEL');

        if(invoiceDataFromLocalStorage === null){
            localStorage.setItem('INVOICEO_INVOICE_MODEL', JSON.stringify(invoiceModel))
        }
    }, []);

    return (
        <PageWrapper>
            <InvoiceCreatorTemplate />
        </PageWrapper>
    );
};

export default Page;