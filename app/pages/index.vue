<template lang="pug">
    div
        nav
            h1.nav-brand Holaa
            template(v-if="width <= 767")
                span(@click="showMenu = true"): i(class="fas fa-bars")
            template(v-else)
                ul
                    li sign up
                    li sign in
        div(:class="linksClassObject")
            button.links-container__close(@click="showMenu = false") close
            ul.links-container__items
                li sign up
                li sign in
</template>
<script>
export default {
    data () {
        return {
            showMenu: false
        }
    },
    head: {
        title() {
            return 'Pagina principal'
        }
    },
    computed: {
        linksClassObject() {
            return {'links-container': true, 'active': this.showMenu}
        }
    }
}
</script>