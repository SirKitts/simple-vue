<template>
  <div class="form">
    <Form @change-form="changeMe"></Form>
    {{ form }}
    <div v-demo="{ color: 'black', text: 'hello!' }"></div>
  </div>
</template>

<script>
import axios from 'axios'
import Form from '@/components/Form.vue'

export default {
  name: 'form',
  components: {
    Form
  },
  data () {
    return {
      form: []
    }
  },
  methods: {
    changeMe (value) {
      this.form = value
      this.callAllUrl()
    },
    callAllUrl () {
      return axios.all([
        axios.get('https://api.github.com/users/codeheaven-io'),
        axios.get('https://api.github.com/users/codeheaven-io/repos')
      ]).then(axios.spread(function (userResponse, reposResponse) {
        const allData = {
          'User': userResponse.data,
          'Repositories': reposResponse.data
        }
        console.log('allData', allData)
        return allData
      }))
    }

    /*
    // Promise example:
    var firstMethod = function() {
      var promise = new Promise(function(resolve, reject){
          setTimeout(function() {
            console.log('first method completed');
            resolve({data: '123'});
          }, 2000);
      });
      return promise;
    };

    var secondMethod = function(someStuff) {
      var promise = new Promise(function(resolve, reject){
          setTimeout(function() {
            console.log('second method completed');
            resolve({newData: someStuff.data + ' some more data'});
          }, 2000);
      });
      return promise;
    };

    var thirdMethod = function(someStuff) {
      var promise = new Promise(function(resolve, reject){
          setTimeout(function() {
            console.log('third method completed');
            resolve({result: someStuff.newData});
          }, 3000);
      });
      return promise;
    };

    firstMethod()
      .then(secondMethod)
      .then(thirdMethod);
    */

    /*
    // https://daveceddia.com/waiting-for-promises-in-a-loop/
    // https://www.reddit.com/r/javascript/comments/6ffpre/axiosall_method_getting_back_variables_from_the/
    var chain = $q.when();
    for(var i = 0; i < 5; i++) {
      chain = chain.then(function() {
        return $http.get('/data' + i);
      });
    }

    // This is the same as:
    chain = $q.when();
    chain.then(function() {
      return $http.get('/data1');
    }).then(function() {
      return $http.get('/data2');
    }).then(function() {
      return $http.get('/data3');
    }).then(function() {
      return $http.get('/data4');
    }).then(function() {
      return $http.get('/data5');
    });
    */
  }
}
</script>

<style>
  body {
    font-family: Menlo, Consolas, monospace;
    color: #444;
  }
  .item {
    cursor: pointer;
  }
  .bold {
    font-weight: bold;
  }
  ul, li {
    margin:0;
    padding:0;
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: none;
  }
</style>
