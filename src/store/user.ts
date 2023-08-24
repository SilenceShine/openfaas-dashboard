import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
    state: () => {
        return {
            auth: {
                username: 'admin',
                password: '',
                token: 'basic',
            }
        }
    },
    getters: {
    },
    actions: {
    }
})
