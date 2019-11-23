<template>
  <div class="home">
    <button @click="onClick">测试</button>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'home',
    created () {
    },
    methods: {
      onClick () {
        axios.get('http://www.superdev.top/axios-test/api/test')
          .then(res => {
            console.log(res.data)
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
</script>
