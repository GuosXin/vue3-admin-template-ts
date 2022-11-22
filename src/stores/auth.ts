import { defineStore } from "pinia"
import type { Menu } from "@/api/interface/resultTypes"
import { getMenu } from "@/api"

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            menuList: [] as Menu[]
        }
    },
    actions: {
        async getMenuList(){
            try{
                let res = await getMenu()
                this.menuList = res.data
            }catch(err){
                console.error(err)
            }
        }
    }
})