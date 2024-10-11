<template>
    <div>
        <h1><center>แสดงสินค้า</center></h1>
        <p>id: {{ blog.id }}</p>
        <p>ชื่อสินค้า: {{ blog.pname }}</p>
        <p>รายละเอียด: {{ blog.detail }}</p>

        <p>Pictures:</p>
        <div v-if="blog.pictures && Array.isArray(blog.pictures)">
            <div v-for="(picture, index) in blog.pictures" :key="index">
                <img :src="BASE_URL + picture" alt="Blog picture" class="blog-picture" />
            </div>
        </div>
            <!-- แสดงรูปภาพ Thumbnail -->
            <transition name="fade">
                <div class="thumbnail-pic" v-if="blog.thumbnail && blog.thumbnail !== 'null'">
                    <img :src="BASE_URL + blog.thumbnail" alt="Thumbnail" />
                </div>
            </transition>

            <!-- แสดงรูปภาพ pic-->
            <transition-group tag="ul" class="pictures">
        <li v-for="picture in pictures" v-bind:key="picture.id">
          <img
            style="margin-bottom: 5px"
            :src="BASE_URL + picture.name"
            alt="picture image"
          />
          <br />
        </li>
      </transition-group>

        <p>ราคา: {{ blog.price }}</p>
        <p>จำนวน: {{ blog.num }}</p>
        <p>
            
            <button class="btn warning" v-on:click="navigateTo('/blog/edit/' + blog.id)">แก้ไข blog</button>
            <button class="btn danger"v-on:click="navigateTo('/blogs')">กลับ</button>
        </p>
    </div>
</template>

<script>
import BlogsService from '@/services/BlogsService';

export default {
    data() {
        return {
            BASE_URL: 'http://localhost:8081/assets/uploads/',
            pictures: [],
            blog: {  
                pname: "",
        thumbnail: [],
        pictures: [],
        detail: "",
        price: "",
        num: "",}
            
        };
    },
    async created() {
    try {
        let blogId = this.$route.params.blogId;
        this.blog = (await BlogsService.show(blogId)).data;
        
        // ตรวจสอบว่ารูปภาพใน blog.pictures เป็น array และทำการกำหนดค่าให้กับ pictures
        if (Array.isArray(this.blog.pictures)&& this.blog.pictures.length > 0) {
            this.pictures = this.blog.pictures.map((picture, index) => ({
                id: index,
                name: picture
            }));
        }
    } catch (error) {
        console.log(error);
    }
},
    methods: {
        navigateTo(route) {
            this.$router.push(route);
        },
    },
};
</script>

<style scoped>
.blog-picture {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
}
.btn {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
.btn.danger {
    background-color: #e74c3c;
    color: #fff;
}

.btn.danger:hover {
    background-color: #c0392b;
}
.btn.warning {
    background-color: #f39c12;
    color: #fff;
}

.btn.warning:hover {
    background-color: #e67e22;
}
.thumbnail-pic img {
  width: 200px;
}
ul.pictures {
  list-style: none;
  padding: 0;
  margin: 0;
  float: left;
  padding-top: 10px;
  padding-bottom: 10px;
}
ul.pictures li {
  float: left;
}
ul.pictures li img {
  max-width: 180px;
  margin-right: 20px;
}
</style>