<template>
  <div class="home">
    <button @click="onClick">测试</button>
    <div>{{res}}</div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'home',
    data () {
      return {
        res: 'home'
      }
    },
    created () {
    },
    methods: {
      onClick () {
        axios.get('https://www.superdev.top/axios-test/api/test')
          .then(res => {
            this.res = res.data
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
</script>
