import React from 'react';
import Link from "next/link";
import {Card, CardContent} from "@mui/material";

const IndexTemplate = () => {
    return (
        <div className={'mt-5'}>
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
        </div>
    );
};

export default IndexTemplate;