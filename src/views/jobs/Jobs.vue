<template>
  <h2>Aquired Jobs</h2>
  <div v-for=" job in jobs" :key="job.id">
    <router-link :to="{ name: 'jobsDetails', params: {id: job.id}}">
      <h3 class="sJob">{{job.title}}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: 'UX designer', id:1, details: "very, very good at it"},
        { title: 'Web developer', id:2, details: "Excelent at it"},
        { title: 'Programmer', id:3, details: "Need a bit more practice but still good it"}
      ]
    }
  }
}
</script>

<style>
  .sJob {
    background: #a2b3ff;
    color: #ffffff;
    margin: 10px auto;
    max-width: 400px;
    width: 100%;
    padding: 10px 15px;
    border-radius: 8px;
    transition: 0.3s;
  }
  .sJob:hover {
    background: #ffffff;
    color: #a2b3ff;
    border: 3px solid #a2b3ff;
  }
  a {
    text-decoration: none;
  }
</style>