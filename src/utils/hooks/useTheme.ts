import { useConfigStore } from '@/stores/config';
import { getDarkColor, getLightColor } from '@/utils/utils'

export const useTheme = () => {
    let configStore = useConfigStore()

    /**
     * 设置暗黑主题
     * @param isDarkTheme 
     */
    const setDarkTheme = (isDarkTheme: boolean = configStore.isDarkTheme) => {
        const html = document.documentElement as HTMLElement;
        isDarkTheme ? html.setAttribute("class", "dark") : html.removeAttribute("class")
        configStore.isDarkTheme = isDarkTheme
    }

    const setPrimary = (color: string = configStore.themeColor) => {
        // document.documentElement 是全局变量时
        const el = document.documentElement
        // 设置 css 变量
        el.style.setProperty('--el-color-primary', color)
        // 颜色加深
        el.style.setProperty('--el-color-primary-dark-2', `${getDarkColor(color, 0.1)}`)
        // 颜色变浅
		for (let i = 1; i <= 9; i++) {
			el.style.setProperty(`--el-color-primary-light-${i}`, `${getLightColor(color, i / 10)}`);
		}
    }

    return {
        setDarkTheme,
        setPrimary
    }
}

