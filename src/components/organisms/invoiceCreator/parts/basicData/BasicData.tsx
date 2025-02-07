import {useFormik} from "formik";
import {TextField} from "@mui/material";
import {DateField} from "@mui/x-date-pickers";
import {Dayjs} from "dayjs";

const BasicData = () => {
    const formik = useFormik({
        initialValues: {
            invoiceDate: Dayjs,
            id: 1
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });
    return (
        <>
            <form>
                <div className={'grid grid-cols-2 gap-5 mt-5 mb-5'}>
                    <div>
                        <DateField sx={{width: '100%'}} label={'Data wystawienia'} id={'invoiceDate'} name={'invoiceDate'} onChange={formik.handleChange}/>
                    </div>
                    <div>
                        <TextField sx={{width: '100%'}} label={'Numer faktury'} id={'id'} name={'id'} type={'number'} value={formik.values.invoiceDate} onChange={formik.handleChange}/>
                    </div>
                </div>
            </form>
        </>
    );
}

export default BasicData;