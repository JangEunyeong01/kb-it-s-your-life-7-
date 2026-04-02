<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">이날치(LeeNalChi)</router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">소개</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/members">멤버</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/videos">영상</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

