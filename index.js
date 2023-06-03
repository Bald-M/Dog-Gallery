var container = new Vue({
    el: "#container",
    mounted() {
        this.parseAPI()
    },
    data: {
        dogs: []
    },
    methods:{
        parseAPI: function () {
            for (let i = 1; i <= 20; i++) {
                axios.get('https://dog.ceo/api/breeds/image/random')
                    .then(
                        response => {
                            this.dogs.push(response.data.message)
                        }
                    )
            }
        }
    }
})