<template>
  <div class="sidebar-wrapper left-side">
    <h2 class="showpage-title">
      {{ getShowDetails.Title }}
      <span class="year">{{ getShowDetails.Year }}</span>
    </h2>
    <div class="showpage-details">
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ShowDetailSidebar',
  computed: {
    ...mapGetters(['getShowDetails']),
  },
};
</script>
