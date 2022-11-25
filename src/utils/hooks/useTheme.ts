import { useConfigStore } from "@/stores/config";

export const useTheme = () => {
    let configStore = useConfigStore()

    /**
     * 设置暗黑主题
     * @param isDarkTheme 
     */
    const setDarkTheme = (isDarkTheme: boolean) => {
        const html = document.documentElement as HTMLElement;
        isDarkTheme ? html.setAttribute("class", "dark") : html.removeAttribute("class")
        configStore.isDarkTheme = isDarkTheme
    }

    return {
        setDarkTheme
    }
}

