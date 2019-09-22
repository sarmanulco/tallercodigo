import Vue from 'vue'
import {mapState} from 'vuex'

Vue.mixin({
    computed: {
        ...mapState(['width'])
    }
})
console.log('configurando mq')
export default ({store}) => {
    window.onresize = () => {
        store.commit('width', window.innerWidth)
    }
}