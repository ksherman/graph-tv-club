<template>
  <div class="show-wrapper">
    <pre>{{ getShowDetails }}</pre>
    <template v-if="getShowDataForScatterplot.length === Number(getShowDetails.totalSeasons)">
      <show-scatter-plot :episodeDataset="getShowDataForScatterplot" />
    </template>
  </div>
</template>

<script>
import { ShowScatterPlot } from '@/components/registry';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ShowDetails',
  components: {
    ShowScatterPlot,
  },
  created() {
    this.runShowDetailFetch(this.$route.params.showId);
  },
  computed: {
    ...mapGetters(['getShowDetails', 'getShowSeasons', 'getShowDataForScatterplot']),
  },
  methods: {
    ...mapActions(['runShowDetailFetch']),
  },
};
</script>
