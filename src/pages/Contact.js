import React from 'react';


function Contact() {

    return <React.Fragment>
        <div className="bg-black h-full w-full flex flex-col p-8 text-slate-200 lg:p-16 xl:px-32 2xl:px-64 justify-center items-center text-center min-h-screen">
            <div className="xl:text-3xl xs:text-2xl mt-20 text-xl max-w-8xl lg:space-y-8 space-y-4 font-courier">
                <div className="team font-bold sm:text-3xl">
                    hello@evilmediaempire.com
                </div>
            </div>
        </div>
    </React.Fragment>;
}

export default Contact;
