import React from 'react';
import {Button, TextField} from "@mui/material";
import {useFormik} from "formik";

const Nips = () => {

    const formik = useFormik({
        initialValues: {
            sellerNip: "",
            customerNip: ""
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <form>
            <div className={'grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 mb-5'}>
                <div>
                    <TextField sx={{width: '100%'}} label={'NIP sprzedawcy'} id={'sellerNip'} name={'sellerNip'} type={'text'} value={formik.values.sellerNip} onChange={formik.handleChange}/>
                </div>
                <div>
                    <TextField sx={{width: '100%'}} label={'NIP nabywcy'} id={'customerNip'} name={'customerNip'} type={'text'} value={formik.values.customerNip} onChange={formik.handleChange}/>
                </div>
                <div className={'lg:col-span-2 flex lg:justify-end'}>
                    <Button variant={'contained'} onClick={() => {formik.handleSubmit()}}>Pobierz dane z rejestru CEIDG</Button>
                </div>
            </div>
        </form>
    );
};

export default Nips;