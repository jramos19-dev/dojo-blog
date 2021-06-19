<template>
 <div v-if="error">{{error}}</div>
 <div v-if="post" class="post">
   <h3>{{post.title}}</h3>
   <p>{{post.body}}</p>
 </div>
 <div v-else>

   <Spinner/>
 </div>
</template>

<script>
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner.vue'
import {useRoute} from "vue-router"

 export default {
components: {Spinner},
props: ['id'],

setup(props) {

const route = useRoute()
console.log(route)

 const {post,load,error} = getPost(route.params.id)

  load()
 return{post, error }
}
}
</script>

<style>

</style>