import React from 'react';
import {useFormik} from "formik";
import {TextField} from "@mui/material";

const Comments = () => {
    const formik = useFormik({
        initialValues: {
            comments: ""
        },
        onSubmit: (values) => {
            console.log(values);
        }
    })
    return (
        <>
            <form>
                <TextField sx={{width: '100%'}} multiline={true} label={'Uwagi'} id={'comments'} name={'comments'} type={'text'} value={formik.values.comments} onChange={formik.handleChange} rows={5}/>
            </form>
        </>
    );
};

export default Comments;