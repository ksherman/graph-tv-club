<template>
  <div class="welcome-wrapper">
    <div class="welcome-content">
      <h2>Graph TV Show Ratings</h2>
      <p>
        Welcome! This is an application I built to search against TV Shows in IMDB and render graphs for each season. This is modeled after one of my favorite sites, <a href="http://graphtv.kevinformatics.com/" target="_blank">Graph TV</a>, but I wanted to make my own <a href="https://github.com/ksherman/tv-viz" target="_blank">open source project</a>. I choose to use <a href="http://www.omdbapi.com/" target="_blank">OMDB API</a> to query the data, <a href="https://vuejs.org/" target="_blank">VueJS</a> for the client (because I wanted to enjoy writting the app heh), <a href="http://www.chartjs.org/" target="_blank">ChartJS</a> (with <a href="https://github.com/apertureless/vue-chartjs" target="_blank">vue-chartjs</a>)for rendering the graphs, and am hosting/deploying through <a href="https://www.netlify.com/" target="_blank">Netlify</a>. Super simple! </p>
      <p>
        I have a few plans, but always willing to entertain ideas! Add an <a href="https://github.com/ksherman/tv-viz" target="_blank">issue on the repo</a> to report problems, feature requests, or if you want to help out with a pull request!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomePage',
};
</script>
