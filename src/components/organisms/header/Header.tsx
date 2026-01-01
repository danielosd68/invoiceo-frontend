import React from 'react';
import Image from "next/image";
import {LinearProgress} from "@mui/material";

const Header = () => {
    return (
        <header className={'flex justify-center items-center w-full mb-10'}>
            <LinearProgress variant="determinate" value={100} />
            {/*<Image src={'/3.svg'} alt={'logo'} width={300} height={80}/>*/}
        </header>
    );
};

export default Header;