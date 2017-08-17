<template>
  <div id="app">
    <navbar></navbar>
    <section class="section">
      <router-view></router-view> 
    </section>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import BookmarkList from './components/BookmarkList.vue'
  import { filterByCategory } from './filters'
  export default {
    components: {
      Navbar,
      BookmarkList
    },
    data () {
      return {
        categories: {},
        bookmarks: {},
        selectedCategory: ''
      }
    },
    filters: {
      filterByCategory
    },
    created () {
    },
    methods: {
      updateListings (categories, bookmarks) {
        this.categories = categories
        this.bookmarks = bookmarks
      },
      setSelectedCategory (category) {
        this.selectedCategory = category;
      },
      filteredBookmarks () {
        return filterByCategory(this.bookmarks, this.selectedCategory);
      },
    }
  }
</script>