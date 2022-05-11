<template>
  <div id="app">
      <router-view/>
  </div>
</template>
<script>
// 页面刷新之后只保留当前页面，其他标签页自动退出
    export default {
        name: "App",
        watch: {
            $route(to, from) {
                if(to.path != '/login') {
                    let obj = {
                        name: to.name,
                        title: to.meta.title
                    }

                    this.$store.commit("addTab", obj)
                }
            }
        }
    }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
