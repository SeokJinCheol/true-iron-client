import React, { FC } from 'react'

import './_style.css'

interface Props {

}

const Header:FC<Props> = () => {
    return (
        <header className="h-16 bg-white shadow-md content-center">
            <nav aria-label="Global" className="mx-auto w-full flex p-3 lg:px-5">
                <div className="flex lg:flex-1 start-0">
                    <a href="#" className="-m-1.5 p-1.5">
                        <img
                            alt=""
                            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                            className="h-8 w-auto"
                        />
                    </a>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        Features
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        Marketplace
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        Company
                    </a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header;