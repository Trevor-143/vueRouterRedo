<template>
  <h3>Welcome to Job Details</h3>
  <h4>Welcome to Job Details  {{ id }}</h4>
</template>

<script>
export default {
    props: ["id"],
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // }
}
</script>

<style>

</style>