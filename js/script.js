var app = new Vue({
  el: `#app`,
  data: {
    counter: 0,
    // immagini provvisorie
    immagini: [
      `https://images.everyeye.it/img-articoli/il-trailer-godzilla-vs-kong-scontro-avvicina-speciale-v11-51721-1280x16.jpg`,
      `https://miro.medium.com/max/3840/1*T9vwLIdqO9LK18DNbCDNLg.jpeg`,
      `https://cdn.wallpapersafari.com/1/30/d4z8Zj.jpg`,
      `https://sfwallpaper.com/images/free-godzilla-wallpaper-17.jpg`,
      `https://wallpaperaccess.com/full/899423.jpg`,
      `https://wallpapers.com/images/high/king-ghidorah-godzilla-king-of-the-monsters-4k-wallpaper-v5nvq5a8x5z5t56w.jpg`
    ],
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
    }
  },
});
