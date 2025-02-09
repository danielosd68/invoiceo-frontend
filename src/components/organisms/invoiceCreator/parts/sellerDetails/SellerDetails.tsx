import React from 'react';
import {useFormik} from "formik";
import {TextField} from "@mui/material";

const SellerDetails = () => {

    const formik = useFormik({
        initialValues: {
            companyName: "",
            address: "",
            nip: "",
            phone: "",
            email: ""
        },
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
        <>
            <form>
                <div className={'grid grid-cols-2 gap-5 mt-5 mb-5'}>
                    <div className={'col-span-2'}>
                        <TextField sx={{width: '100%'}} label={'Nazwa firmy'} id={'companyName'} name={'companyName'} type={'text'} value={formik.values.companyName} onChange={formik.handleChange}/>
                    </div>
                    <div className={'col-span-2'}>
                        <TextField sx={{width: '100%'}} label={'Adres'} id={'address'} name={'address'} type={'text'} value={formik.values.address} onChange={formik.handleChange}/>
                    </div>
                    <div className={'col-span-2 lg:col-span-1'}>
                        <TextField sx={{width: '100%'}} label={'Numer NIP'} id={'nip'} name={'nip'} type={'text'} value={formik.values.nip} onChange={formik.handleChange}/>
                    </div>
                    <div className={'col-span-2 lg:col-span-1'}>
                        <TextField sx={{width: '100%'}} label={'Numer telefonu'} id={'phone'} name={'phone'} type={'text'} value={formik.values.phone} onChange={formik.handleChange}/>
                    </div>
                    <div className={'col-span-2'}>
                        <TextField sx={{width: '100%'}} label={'Adres e-mail'} id={'email'} name={'email'} type={'text'} value={formik.values.email} onChange={formik.handleChange}/>
                    </div>
                </div>
            </form>
        </>
    );
};

export default SellerDetails;