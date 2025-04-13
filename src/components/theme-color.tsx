"use client"

import { useEffect, useState } from "react"

export function ThemeColorProvider({ children }: { children: React.ReactNode }) {
    const [colorTheme, setColorTheme] = useState("blue") // 기본값

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", colorTheme)
    }, [colorTheme])

    return (
        <div>
            {/* 여기서 전역 context로도 전달 가능 */}
            {children}
        </div>
    )
}