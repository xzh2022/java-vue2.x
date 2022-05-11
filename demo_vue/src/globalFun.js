import Vue from 'vue'

Vue.mixin({
    methods: {
        hasAuth(perm) {
            let authority = this.$store.state.menus.permList
            // 判断是否包含该权限
            //这里写的不严谨，整了半天的bug 敲代码真真的很折磨心态呀，好心态，好事业，好前程，前程无忧，美少女战士加油
            return authority?.indexOf(perm) > -1
        }
    }
})
