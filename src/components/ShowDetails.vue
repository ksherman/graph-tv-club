<template>
  <div class="show-wrapper" v-if="getShowDetails.Title">
    <h2 class="show-title">
      {{ getShowDetails.Title }}
      <span class="year">{{ getShowDetails.Year }}</span>
    </h2>
    <div class="show-details">
      <div class="poster">
        <img :src="getShowDetails.Poster" />
      </div>
      <div class="information">
        <div class="information-line">
          <strong>Plot:</strong> {{ getShowDetails.Plot }}
        </div>
        <div class="information-line">
          <strong>Typical runtime:</strong> {{ getShowDetails.Runtime }}
        </div>
        <div class="information-line">
          <strong>Overall score:</strong>
          {{ getShowDetails.Ratings[0].Value }}
          <span class="text-medium">
            {{ getShowDetails.Ratings[0].Source }} from {{ getShowDetails.imdbVotes }} votes
          </span>
        </div>
      </div>
    </div>
    <h2>Season Ratings:</h2>
    <div class="show-season-charts" v-if="getShowDataForScatterplot.length === Number(getShowDetails.totalSeasons)">
      <div
        class="season-chart"
        :key="`${getShowDetails.imdbID}-season-${dataset.label}`"
        v-for="dataset in getShowDataForScatterplot"
      >
        <show-scatter-plot :episodeDataset="dataset" />
      </div>
    </div>
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
    if (!this.getShowDetails.Title) {
      this.fetchData();
    }
  },
  computed: {
    ...mapGetters(['getShowDetails', 'getShowSeasons', 'getShowDataForScatterplot']),
  },
  methods: {
    ...mapActions(['runShowDetailFetch']),
    fetchData() {
      this.runShowDetailFetch(this.$route.params.showId);
    },
  },
  watch: {
    $route: 'fetchData',
  },
};
</script>
