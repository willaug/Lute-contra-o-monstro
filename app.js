/**
 * Você contra o monstro - Simples jogo em VueJS e Javascript/ Simple game in VueJS and Javascript
 * Autor/author: William Augusto
 * Lançado em/released: 27/01/2021
 */

//rand
const rand = (min, max) => Math.floor(Math.random() * (max, min) + min)

//plugin
Vue.use(VWave)

new Vue({
    el: '#app',
    data: {
        game: false,
        lifePlayer: 100,
        lifeMonster: 100,
        logs: [],
        cured: false
    },
    computed: {
        gameOver(){
            return this.lifePlayer <= 0 || this.lifeMonster <= 0
        }
    },
    methods: {
        start(){
            setTimeout( () => {
                this.game = true
                //developer
                document.getElementsByClassName('dev-text')[0].style.display = 'none'
                document.getElementsByClassName('devContainer')[0].classList.add('devPicture')

                setTimeout(() => {
                    document.getElementsByClassName('bd-loading')[0].style.visibility = 'hidden'
                }, 1000)
            }, 500)
        },
        shot(){
            //dano no player, de 10 a 19
            let damP = rand(10, 19)
            //dano no monstro, de 6 a 15
            let damM = rand(6, 15)
            this.logs.splice(0)
            //push
            this.logs.push('Você recebeu ' +damP+'% de dano')
            this.logs.push('O monstro recebeu ' +damM+'% de dano')
            //atualizar vida
            this.lifePlayer = this.lifePlayer - damP
            this.lifeMonster = this.lifeMonster - damM
        },
        granade(){
            let damP = rand(10, 16)
            let damM = rand(9, 17)
            this.logs.splice(0)
            this.logs.push('Você recebeu ' +damP+'% de dano')
            this.logs.push('O monstro recebeu ' +damM+'% de dano')
            this.lifePlayer = this.lifePlayer - damP
            this.lifeMonster = this.lifeMonster - damM
        },
        missile(){
            let damP = rand(8, 17)
            let damM = rand(13, 19)
            this.logs.splice(0)
            this.logs.push('Você recebeu ' +damP+'% de dano')
            this.logs.push('O monstro recebeu ' +damM+'% de dano')
            this.lifePlayer = this.lifePlayer - damP
            this.lifeMonster = this.lifeMonster - damM
        },
        health(){
            if(this.lifePlayer <= 35)
            {
                let damP = rand(11, 31)
                let cure = rand(29, 40)
                this.logs.splice(0)
                this.logs.push('Você recebeu ' +damP+'% de dano')
                this.logs.push('Você recebeu ' +cure+'% de cura')
                this.lifePlayer = this.lifePlayer - damP + cure
                this.cured = true
            }
        },
        restart(){
            this.lifePlayer = 100
            this.lifeMonster = 100
            this.logs.splice(0)
            this.cured = false
        }

    }
})