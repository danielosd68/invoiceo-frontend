import {TextField} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers";
import {FormikProps} from "formik";
import {IInvoiceFormModel} from "invoiceo/components/templates/invoiceCreatorTemplate/InvoiceCreatorTemplate";
import dayjs from "dayjs";


const BasicData = (props: {invoiceForm: FormikProps<IInvoiceFormModel>}) => {
    return (
        <>
            <form>
                <div className={'grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 mb-5'}>
                    <div>
                        <DatePicker sx={{width: '100%'}} label={'Data wystawienia'} name={'createdAt'} value={dayjs(props.invoiceForm.values.createdAt)} onChange={(value) => {console.log(value?.date())}}/>
                    </div>
                    <div>
                        <TextField sx={{width: '100%'}} label={'Numer faktury'} id={'invoiceId'} name={'invoiceId'} type={'number'} value={props.invoiceForm.values.invoiceId} onChange={props.invoiceForm.handleChange}/>
                    </div>
                </div>
            </form>
        </>
    );
}

export default BasicData;