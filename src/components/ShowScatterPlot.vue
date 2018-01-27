<script>
import { Line } from 'vue-chartjs';

export default {
  name: 'ShowScatterPlot',
  extends: Line,
  props: ['episodeDataset'],
  mounted() {
    this.renderChart(
      {
        labels: this.episodeDataset[0].data.map((_, index) => index + 1),
        datasets: this.episodeDataset,
      },
      {
        responsive: true,
        legend: { display: false },
        layout: {
          padding: {
            right: 10,
          },
        },
        title: {
          display: true,
          position: 'bottom',
          text: this.episodeDataset[0].label,
        },
        scales: {
          xAxes: [
            {
              display: false,
              ticks: {
                max: this.episodeDataset[0].data.length + 1,
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
