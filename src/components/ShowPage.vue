<template>
  <div class="showpage-wrapper" v-if="getShowDetails.Title">
    <ShowDetailSidebar />
    <div class="showpage-content">
      <h2>Season Graphs</h2>
      <div
        class="showpage-season-charts"
        v-if="getShowDataForScatterplot.length === Number(getShowDetails.totalSeasons)">
        <div
          class="season-chart"
          :key="`${getShowDetails.imdbID}-season-${index + 1}`"
          v-for="(dataset, index) in getShowDataForScatterplot"
        >
          <show-scatter-plot :episodeDataset="dataset" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ShowScatterPlot, ShowDetailSidebar } from '@/components/registry';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ShowPage',
  components: {
    ShowScatterPlot,
    ShowDetailSidebar,
  },
  created() {
    if (!this.getShowDetails.Title) {
      this.fetchData();
    }
  },
  computed: {
    ...mapGetters(['getShowDetails', 'getShowSeasons', 'getShowDataForScatterplot']),
  },
  methods: {
    ...mapActions(['runShowDetailFetch', 'clearShowDetails']),
    fetchData() {
      this.clearShowDetails();
      this.runShowDetailFetch(this.$route.params.showId);
    },
  },
  watch: {
    $route: 'fetchData',
  },
};
</script>
