import {ReactNode} from "react";
import BasicData from "invoiceo/components/organisms/invoiceCreator/parts/basicData/BasicData";
import SellerDetails from "invoiceo/components/organisms/invoiceCreator/parts/sellerDetails/SellerDetails";
import Nips from "invoiceo/components/organisms/invoiceCreator/parts/nips/Nips";
import CustomerDetails from "invoiceo/components/organisms/invoiceCreator/parts/customerDetails/CustomerDetails";
import Comments from "invoiceo/components/organisms/invoiceCreator/parts/comments/Comments";
import {FormikProps} from "formik";
import {IInvoiceFormModel} from "invoiceo/components/templates/invoiceCreatorTemplate/InvoiceCreatorTemplate";

type TypeForm = "nips" | "basic" | "sellerDetails" | "customerDetails" | "products" | "comments";


class InvoiceCreator{
    public static getForm(type: TypeForm, invoiceForm: FormikProps<IInvoiceFormModel>): ReactNode{
        switch (type){
            case "nips":
                return <Nips/>
            case "basic":
                return <BasicData invoiceForm={invoiceForm}/>
            case "sellerDetails":
                return <SellerDetails/>
            case "customerDetails":
                return <CustomerDetails/>
            case "comments":
                return <Comments/>
        }
    }
}

export default InvoiceCreator;