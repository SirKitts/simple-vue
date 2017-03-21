<template>
  <div class="video-item">
    <h1>{{ msg }} {{title}} {{$route.params.id}}</h1>
    <md-card class="card-example">
      <md-card-area md-inset>
        <md-card-media md-ratio="16:9">
          <img src="https://vuematerial.github.io/assets/card-example.jpg" alt="Coffee House">
        </md-card-media>

        <md-card-header>
          <h2 class="md-title">Coffee House</h2>
          <div class="md-subhead">
            <md-icon>location_on</md-icon>
            <span>2 miles</span>
          </div>
        </md-card-header>

        <md-card-content>
          Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.
        </md-card-content>
      </md-card-area>

      <md-card-content>
        <h3 class="md-subheading">Today's availability</h3>
        <div class="card-reservation">
          <md-icon>access_time</md-icon>
          <md-button-toggle md-single class="md-button-group">
            <md-button>5:30PM</md-button>
            <md-button>7:30PM</md-button>
            <md-button>9:00PM</md-button>
          </md-button-toggle>
        </div>
      </md-card-content>

      <md-card-actions>
        <md-button class="md-primary">Reserve</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  name: 'video-item',
  props: {
    id: String
  },
  data () {
    return {
      msg: 'Video Item',
      title: '',
      duration: '150'
    }
  },
  mounted () {
    var self = this
    /*
    axios.get('https://api.github.com/users/codeheaven-io')
    .then(function (response) {
      console.log(response.data)
      console.log(response.status)
      console.log(response.data.login)
      self.title = response.data.login
    })
    let duration = 150
    let hours = duration / 60
    let minutes = duration % 60
    let hr = hours.toString().split(".")
    let mins = minutes.toString().split(".")
    let secs = (minutes * 60) % 60
    let time = hr[0] + 'h' + mins[0] + 'm'+ secs + 's'
    */
    this.$http.get('https://api.github.com/users/codeheaven-io')
    .then((response) => {
      console.log(response.data)
      self.title = response.data.type
    })
  }
}
</script>

<style>
  .card-example {
    .md-subhead {
      .md-icon {
        $size: 16px;

        width: $size;
        min-width: $size;
        height: $size;
        min-height: $size;
        font-size: $size;
        line-height: $size;
      }

      span {
        vertical-align: middle;
      }
    }

    .card-reservation {
      margin-top: 8px;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .md-icon {
        margin: 8px;
        color: rgba(#000, .54) !important;
      }

      .md-button {
        border-radius: 2px !important;
      }
    }
  }
</style>
