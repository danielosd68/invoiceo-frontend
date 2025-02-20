import React, {useState} from 'react';
import {Button, Step, StepContent, StepLabel, Stepper, Typography} from "@mui/material";
import InvoiceCreator from "invoiceo/components/organisms/invoiceCreator/InvoiceCreator";
import {FormikProps, useFormik} from "formik";

export interface IInvoiceFormModel{
    createdAt: string,
    invoiceId: number
}

const InvoiceCreatorTemplate = () => {
    const [activeStep, setActiveStep] = useState(0);
    const invoiceForm: FormikProps<IInvoiceFormModel> = useFormik({
        initialValues: {
            createdAt: "",
            invoiceId: 1
        },
        onSubmit: (values) => {console.table(values)}
    });
    const steps = [
        {
            label: "Pobierz dane z rejestru CEIDG",
            content: (<>
                {InvoiceCreator.getForm("nips", invoiceForm)}
            </>)
        },
        {
            label: "Podstawowe dane faktury",
            content: (<>
                <p className={'text-gray-400'}>Dodaj logo, datę wystawienia i numer faktury.</p>
                {InvoiceCreator.getForm("basic", invoiceForm)}
            </>)
        },
        {
            label: "Dane sprzedawcy",
            content: (<>
                {InvoiceCreator.getForm("sellerDetails", invoiceForm)}
            </>)
        }
        ,
        {
            label: "Dane nabywcy",
            content: (<>
                {InvoiceCreator.getForm("customerDetails", invoiceForm)}
            </>)
        },
        {
            label: "Towar, ilość, stawka VAT",
            content: (<>
                <h2>Towar, ilość, stawka VAT</h2>
            </>)
        }
        ,
        {
            label: "Uwagi",
            content: (<>
                {InvoiceCreator.getForm("comments", invoiceForm)}
            </>)
        }
        ,
        {
            label: "Twoja faktura",
            content: (<>
                <h2>Twoja faktura</h2>
            </>)
        }
    ];
    const handleNext = () => {
        if(activeStep === steps.length - 1){
            return;
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        invoiceForm.handleSubmit();
    };

    const handleBack = () => {
        if(activeStep === 0){
            return;
        }
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <div>
            <h1 className={'mt-0'}>Wystaw fakturę</h1>
            <p className={'text-gray-400'}>Uzupełnij potrzebne dane, dodaj towar / usługę, określ stawkę VAT i wyślij do klienta.</p>
            <Stepper activeStep={activeStep} orientation={"vertical"}>
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                            optional={
                                index === steps.length - 1 ? (
                                    <Typography variant="caption">Ostatni krok</Typography>
                                ) : null
                            }
                        >
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            {step.content}
                            <div className={'mt-5 flex justify-between'}>
                                <Button variant={'contained'} sx={{backgroundColor: '#000000'}} onClick={handleBack} disabled={activeStep === 0}>Cofnij</Button>
                                <Button variant={'contained'} sx={{backgroundColor: '#000000'}} onClick={handleNext} disabled={activeStep === steps.length - 1}>Dalej</Button>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>



        </div>
    );
};

export default InvoiceCreatorTemplate;