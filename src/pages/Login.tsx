import { LoginForm } from "@/modules/login/login.tsx"
import {ThemeProvider} from "@/components/theme-provider";


export default function LoginPage() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
                <div className="w-full max-w-sm md:max-w-3xl">
                    <LoginForm />
                </div>
            </div>
        </ThemeProvider>
    )
}