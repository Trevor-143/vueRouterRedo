<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link :to="{ name: 'jobs' }">Jobs</router-link>
  </nav>
  <div>
    <button @click="redirect">Redirect</button>
    <button @click="back">Go back</button>
    <button @click="forward">Go forward</button>
  </div>
  <router-view/>
</template>

<script>

  export default {
    methods: {
      redirect() {
        this.$router.push({ name: 'home' })
      },
      back() {
        this.$router.go(-1)
      },
      forward() {
        this.$router.go(1)
      }
    }
  }

</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  transition: 0.2s;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  color: #ffffff;
  background: #385196;
  padding: 10px 15px;
  border-radius: 8px;
}
button {
  background: #8ca1ff;
  color: #ffffff;
  margin: 10px;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  transition: 0.3s;
  cursor: pointer;
}
button:hover {
  background: #303658;
}
</style>
