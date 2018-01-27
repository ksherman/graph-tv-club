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
    this.renderChart(
      {
        datasets: [this.episodeDataset],
      },
      {
        responsive: true,
        legend: { display: false },
        layout: {
          padding: 10,
        },
        title: {
          display: true,
          position: 'bottom',
          text: this.episodeDataset.label,
        },
        scales: {
          xAxes: [
            {
              display: false,
              ticks: {
                max: this.episodeDataset.data.length + 1,
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Score',
              },
              ticks: {
                beginAtZero: true,
                max: 10,
                stepSize: 1,
              },
            },
          ],
        },
      },
    );
  },
};
</script>
