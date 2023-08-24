import { defineStore } from 'pinia'

export const globalStore = defineStore('global', {
    state: () => {
        return {
            language: 'zh_CN',
        }
    },
    getters: {
        getLanguage: (state) => state.language,
    },
    actions: {
        changeLanguage(language: string) {
            this.language = language
        },
    }
})
