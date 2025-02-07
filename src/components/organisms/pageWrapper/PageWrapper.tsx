import React, {ReactNode} from 'react';

const PageWrapper = ({children}: {children: ReactNode}) => {
    return (
        <div className={'flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'}>
            <main className={'w-full lg:w-[1024px]'}>
                {children}
            </main>
        </div>
    );
};

export default PageWrapper;