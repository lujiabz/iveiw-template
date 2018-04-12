<template>
  <div class="hello">
  </div>
</template>

<script>
// import Http from '@/libs/http'
export default {
  name: 'home',
  data () {
    return {
      msg: ''
    }
  },
  async created () {
    // const { data } = await Http.get('broadcast/index/api-userInfo', {})
    // console.log(data)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
body {
}
</style>
