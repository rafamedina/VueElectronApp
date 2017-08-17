<template>
  <div>
    <nav class="navbar has-shadow">
      <div class="container is-fullhd">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
          </a>
        </div>
        <router-link to="products" class="navbar-item">
          Productos
        </router-link>
      </div>
    </nav>
      <breadcrumbs></breadcrumbs>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  components: {
  },
  methods: {

  }
}
</script>