const app = Vue. createApp({ 
    data() {
        const res = await fetch('https://randomuser.me/api')
        const { results } = await res.json()

        return {
            firstName: results[0].name.first,
            lastName: results[0].name.last,
            email: results[0].email,
            gender: results[0].gender,
            picture: results[0].picture.large
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        },
    },
})

app.mount('#app')