import React from 'react';
import Image from "next/image";

const Header = () => {
    return (
        <header className={'flex justify-center items-center w-full'}>
            <Image src={'/3.svg'} alt={'logo'} width={200} height={50}/>
        </header>
    );
};

export default Header;