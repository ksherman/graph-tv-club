<template>
  <div class="show-wrapper">
    <pre>{{ getShowDetails }}</pre>
    <pre>{{ getShowSeasons }}</pre>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ShowDetails',
  created() {
    this.runShowDetailFetch(this.$route.params.showId);
  },
  computed: {
    ...mapGetters(['getShowDetails', 'getShowSeasons']),
  },
  methods: {
    ...mapActions(['runShowDetailFetch']),
  },
};
</script>
