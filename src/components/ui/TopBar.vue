<template>
  <div class="topbar-wrapper">
    <div class="topbar-title">
      <h1>_graph TV</h1>
    </div>
    <div class="topbar-search">
      <input
        type="text"
        name="search-query"
        placeholder="search for a show..."
        v-model="searchQuery" />
      <div class="search-query-results" :class="{ visible: searchQuery }">
        <div class="result">Dope!</div>
        <div class="result">Dope!</div>
        <div class="result">Dope!</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data() {
    return {
      searchQuery: '',
    };
  },
};
</script>
