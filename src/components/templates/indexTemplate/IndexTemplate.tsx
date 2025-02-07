import React from 'react';
import Link from "next/link";
import {Card, CardContent} from "@mui/material";
import Footer from "invoiceo/components/organisms/footer/Footer";
import Header from "invoiceo/components/organisms/header/Header";

const IndexTemplate = () => {
    return (
        <div>
            <Header/>
            <section>
                <Link href={'/create'}>
                    <Card>
                        <CardContent>
                            <h2 className={'text-center'}>Wystaw fakturę</h2>
                            <p className={'text-gray-400 text-center'}>Wprowadź dane, wystaw fakturę i wyślij do klienta.</p>
                        </CardContent>
                    </Card>
                </Link>
            </section>
            <Footer/>
        </div>
    );
};

export default IndexTemplate;