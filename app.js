const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Mata Kuliah Selasa",
      matkul1: "Pemrograman Web - Ridho Rahman",
      matkul2: "Konsep Pengembangan Perangkat Lunak - Hatma Surotrisongko",
      matkul3: "Smart City - M husni",
      matkul4: "Internet of Things - M Husni",
    };
  },
}).mount("#app");