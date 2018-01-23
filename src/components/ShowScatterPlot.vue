<script>
import { Scatter } from 'vue-chartjs';

export default {
  name: 'ShowScatterPlot',
  extends: Scatter,
  props: ['episodeDataset'],
  components: {
    Scatter,
  },
  mounted() {
    this.renderChart({
      datasets: this.episodeDataset,
      options: {
        responsive: true,
      },
    });
  },
};
</script>
