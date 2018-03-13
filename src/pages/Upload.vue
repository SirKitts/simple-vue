<template>
  <div class="upload">
    <div style="display:flex; flex-direction: column;">
        <img :src="imageSrc" class="image">
        <span>
            <input 
                @change="uploadImage($event)" 
                type="file" 
                name="image" 
                accept="image/*"
            >
        </span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'upload',
  data () {
    return {
      imageSrc: 'http://nahmdong.com/vitalhill/img/default.png'
    }
  },
  methods: {
    uploadImage (e) {
      var files = e.target.files
      if (!files[0]) {
        return
      }

      var data = new FormData()
      data.append('image', files[0])

      var reader = new FileReader()
      reader.onload = (e) => {
        this.imageSrc = e.target.result
      }

      axios.post(
        '/uploads',
        data,
        {
          headers: {'Content-Type': 'multipart/form-data'}
        }).then(function (response) {
          reader.readAsDataURL(files[0])
        }).catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style>
.image {
  width: 100%;
  height: 100%;
  margin-bottom:40px;
}
.container {
  margin: 0 auto;
  width: 600px;
}
</style>
