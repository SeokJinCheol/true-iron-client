import React, {useEffect, useState} from 'react';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {NavLink, useLocation} from "react-router-dom";

export function HeaderPath() {
    const [locations, setLocations] = useState<string[]>([]);

    const location = useLocation();
    useEffect(() => {
        const locationList = location.pathname.split("/").filter(el => el) || [];
        setLocations(locationList)
    }, [location]);

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {locations.map((data, idx) => {
                    if(locations.length - 1 !== idx) {
                        return (
                            <>
                                <BreadcrumbItem>
                                    <NavLink to={`/${locations.slice(0, idx+1).join("/")}`}>{data}</NavLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                            </>
                        )
                    } else {
                        return (
                            <>
                                <BreadcrumbItem>
                                    <BreadcrumbPage>{data}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </>
                        )
                    }
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}