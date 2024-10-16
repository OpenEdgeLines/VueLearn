<template>
  <RouterLink 
    class="link" 
    v-for="link in links" 
    :to="`${ link.path }`" 
    :key="link.id" 
  >
    {{ link.name }}
  </RouterLink>
</template>
<style>
.link{
  text-align: center;
  color: rgb(123, 162, 214);
  font-size: 20px;
}
</style>
<script>
import links from "../data/tablink.json"
export default {
  data(){
    return {
      links
    }
  }
}
</script>
