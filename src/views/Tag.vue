<template>
  <div class="tag">
      <div v-if="error">{{error}}</div>
      <div v-if="posts.length"> 
          <PostList :posts="taggedPosts"/>
      </div>
      <div v-else>
          <Spinner/>
      </div>
  </div>
</template>

<script>
import { computed, ref } from '@vue/runtime-core'
import {useRoute} from 'vue-router'
import PostList from '../components/PostLists.vue'
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner.vue'

export default {
    components: {Spinner, PostList},    
setup(){

const route = useRoute()
const {posts, error, load} = getPosts()

load()

const tag= ref('')
tag.value = route.params.tag

const taggedPosts = computed(() =>{
return posts.value.filter((p) => p.tags.includes(route.params.tag))
})

return {error, posts, taggedPosts}

}



}
</script>

<style>

</style>