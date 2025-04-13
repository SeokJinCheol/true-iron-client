"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";

export function ColorThemeSelector() {
    const [themeColor, setThemeColor] = useState("red")

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", themeColor)
    }, [themeColor])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <div className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all bg-primary rounded-full" />
                    <span className="sr-only">Toggle color</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-0">
                <DropdownMenuItem onClick={() => setThemeColor("default")}>
                    <div className="h-[1.2rem] w-[1.2rem] bg-black rounded-full"/>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setThemeColor("red")}>
                    <div className="h-[1.2rem] w-[1.2rem] bg-red-600 rounded-full"/>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}