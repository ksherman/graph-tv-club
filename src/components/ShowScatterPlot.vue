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
        tooltips: {
          callbacks: {
            title: (tooltipItem, data) => `Episode ${data.labels[tooltipItem[0].index]}`,
            label: (tooltipItem, data) => `Score ${data.datasets[0].data[tooltipItem.index]}`,
          },
          bodyFontFamily: 'inherit',
          bodyFontSize: 16,
          xPadding: 16,
          yPadding: 14,
          cornerRadius: 0,
          titleFontSize: 18,
          titleFontStyle: 'normal',
          titleMarginBottom: 12,
        },
        elements: {
          line: {
            tension: 0,
          },
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
