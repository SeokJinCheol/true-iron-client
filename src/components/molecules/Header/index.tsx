import React from 'react';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function HeaderPath() {
    const locations = window.location.pathname.split("/").filter(el => el) || [];
    console.log(locations);

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {locations.map((data, idx) => {
                    if(locations.length - 1 !== idx) {
                        return (
                            <>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href={`/${locations.slice(0, idx+1).join("/")}`}>{data}</BreadcrumbLink>
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