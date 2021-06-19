//take in an array of posts
//create a new tag set , sets are like arrays but cannot add duplicates
//add the tags from each post 
//return an array 

import { ref } from 'vue'

const useTags = (posts) => {
    const tags = ref([])

    const tagSet = new Set()

    posts.forEach(item => {
        item.tags.forEach(tag => tagSet.add(tag)  )
    });


    tags.value = [...tagSet]


    return { tags }
}

export default useTags

