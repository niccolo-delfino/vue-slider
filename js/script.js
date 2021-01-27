var app = new Vue({
  el: `#app`,
  data: {
    counter: 0,
    // immagini provvisorie
    immagini: [
    'https://compass-ssl.xbox.com/assets/1c/80/1c80258b-70a2-49b9-b209-81c0e377862c.jpg?n=The-Medium_GLP-Page-Hero-1084_1920x1080_03.jpg',
    'https://compass-ssl.xbox.com/assets/1e/b6/1eb6e78f-dabc-46e0-a4e2-892323416ade.jpg?n=SoT_GLP-Page-Hero-1084_1920x1080_03.jpg',
    'https://www.tuttotek.it/wp-content/uploads/2021/01/rust-head.jpg',
    'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_DeadCells_image1600w.jpg',
    'https://www.tomshw.it/images/images/2020/10/fifa-21-121801.1200x675.jpg',
    'https://www.pophistory.it/wp-content/uploads/2020/05/aoe-cop.jpg'
    ],
  },
  created(){
    setInterval(this.nextImg, 2000);
  },
  methods: {
    nextImg(){

      if (this.counter == this.immagini.length - 1) {
        this.counter = 0;
      } else {
        this.counter++
      }
      console.log(this.counter);

    },

    prevImg(){

      if (this.counter == 0) {
        this.counter = this.immagini.length - 1;
      } else {
        this.counter--
      };
      console.log(this.counter);
    },

    pallinoFoto(indice){
      this.counter = indice;
      clearInterval(this.tempo);
    }
  }
});
