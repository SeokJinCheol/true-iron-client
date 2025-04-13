import {useTheme} from "@/components/theme-provider.tsx";
import {Button} from "@/components/ui/button.tsx";

const DashBoard = () => {
    const { theme } = useTheme()
    return (
        <div>
            {theme}
        </div>
    )
}

export default DashBoard;