# simple-vue
Simple Vue Samples

Install Vue:<br/>
```
# latest stable
$ npm install vue

# install vue-cli
$ npm install -g vue-cli
# create a new project using the "webpack" boilerplate
$ vue init webpack vue-project
 
? Project name "vue-project"
? Project description "A Simple Vue.js project"
? Author "Author Name<author@email.address>"
? Use ESLint to lint your code? "Yes"
? Pick an ESLint preset "Standard"
? Setup unit tests with Karma + Mocha? "No"
? Setup e2e tests with Nightwatch? "No"
 
$ cd vue-project
$ npm install
```

Install Vue Material:<br/>
```
$ npm install vue-material --save
$ yarn add vue-material
```

Insert this in index.html
```
<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
<link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
```

Insert his in main.js
```
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)
```

Start Server:<br/>
```
$ npm run dev
```

References:<br/>
<a href="https://vuejs.org/v2/guide/installation.html"><img src="https://vuejs.org/images/logo.png" width=40 height=40>Vue.js : Installation Guide</a><br/>
<a href="https://vuematerial.github.io">Vue Material</a>
