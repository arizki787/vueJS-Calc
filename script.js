const {createApp} = Vue

createApp({
    data() {
        return {
            display:''
        }
    },
    methods: {
        appendToDisplay(num) {
            this.display += num;
        },
        evaluate(){
            this.display = eval(this.display)
        },
        allClear(){
            this.display = ''
        },
        deleting(){
            this.display = this.display.toString().slice(0, -1)
        }
    }
}).mount('#app')