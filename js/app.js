new Vue({
    el: "#app",
    data: {
        name: "Emeka",
        gameOver: false,
        life: 100,
        picture: "./img/bag.png"
    },
    methods: {
        punch: function() {
            this.life -= 10;
            if (this.life <= 0) {
                this.picture = "./img/bag-burst.png"
                this.gameOver = true;
            }
        },
        restart: function() {
            this.life = 100;
            this.gameOver = false;
            this.picture = "./img/bag.png";
        }

    }
})