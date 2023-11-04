const {createApp, ref} = Vue

createApp({
    data() {
        return {
            display:'',
            kondisi: ref("kalkulator"),
            message: "Mata Kuliah Selasa",
            matkul1: "Pemrograman Web - Ridho Rahman",
            matkul2: "Konsep Pengembangan Perangkat Lunak - Hatma Surotrisongko",
            matkul3: "Smart City - M husni",
            matkul4: "Internet of Things - M Husni"
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
        },

        changeKondisi(val){
            this.kondisi = val;
        }
    }
}).mount('#app')