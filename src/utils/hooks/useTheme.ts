import { useConfigStore } from "@/stores/config";

export const useTheme = () => {
    let configStore = useConfigStore()
    let isDarkTheme = localStorage.getItem('isDarkTheme')
    let i: boolean;
    if(!isDarkTheme){
        localStorage.setItem('isDarkTheme', 'false')
        i = false
        setTheme(false)
    }else{
        i = JSON.parse(isDarkTheme)
        configStore.isDarkTheme = i
        setTheme(i)
    }
    return i
}

const setTheme = (isDarkTheme: boolean) => {
    const html = document.documentElement as HTMLElement;
    if(isDarkTheme){
        html.setAttribute("class", "dark");
    }else{
        html.removeAttribute("class");
    }
}