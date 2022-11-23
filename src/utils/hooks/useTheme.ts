import { useConfigStore } from "@/stores/config";

export const useTheme = () => {
    let configStore = useConfigStore()

    // 设置暗黑主题
    const setDarkTheme = (isDarkTheme: boolean, isSetStorage: boolean = true) => {
        const html = document.documentElement as HTMLElement;
        isDarkTheme ? html.setAttribute("class", "dark") : html.removeAttribute("class")
        isSetStorage && localStorage.setItem('isDarkTheme', `${isDarkTheme}`)
    }

    // 初始化主题，通过本地缓存判断是不是暗黑模式
    const initTheme = () => {
        let isDarkTheme = localStorage.getItem('isDarkTheme')
        if(!isDarkTheme){   // 缓存不存在，默认设为false
            setDarkTheme(false)
        }else{  // 缓存存在，根据缓存设置主题
            let i = JSON.parse(isDarkTheme)
            configStore.isDarkTheme = i
            setDarkTheme(i, false)
        }
    }

    return {
        setDarkTheme,
        initTheme
    }
}

