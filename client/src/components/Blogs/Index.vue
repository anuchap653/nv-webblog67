<template>
    <div>
        <h2>สินค้าทั้งหมด {{blogs.length}}</h2>

        <p><button v-on:click="logout">Logout</button></p>
        <h4>สินค้าทั้งหมด {{blogs.length}}</h4>
        <p><button v-on:click="navigateTo('/blog/create')">เพิ่มสินค้า</button></p>
        <div v-for="blog in blogs" v-bind:key="blog.id">
            <p>ชื่อสินค้า: {{ blog.title }}</p>

            <!-- แสดงรูปภาพ Thumbnail -->
            <transition name="fade">
                <div class="thumbnail-pic" v-if="blog.thumbnail && blog.thumbnail !== 'null'">
                    <img :src="BASE_URL + blog.thumbnail" alt="Thumbnail" />
                </div>
            </transition>

            <p>รายละเอียด: {{ blog.content }}</p>
            <p>ราคา: {{ blog.category }}</p>
            <p>จำนวน: {{ blog.status }}</p>

            <p>
                <button v-on:click="navigateTo('/blog/'+ blog.id)">ดูสินค้า</button>
                <button v-on:click="navigateTo('/blog/edit/'+ blog.id)">แก้ไขสินค้า</button>
                <button v-on:click="deleteBlog(blog)">ลบสินค้า</button>
            </p>
            <hr>
        </div>
    </div>
</template>

<script>
import BlogsService from '@/services/BlogsService'
export default {
    data () {
        return {
            blogs: [],
            BASE_URL: 'http://localhost:8081/assets/uploads/' // ตั้งค่า BASE_URL ให้ถูกต้อง
        }
    },
    async created () {
        this.blogs = (await BlogsService.index()).data
    },
    methods: {
        logout () {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setBlog', null)
            this.$router.push({
                name: 'login'
            })
        },
        navigateTo (route) {
            this.$router.push(route)
        },
        async deleteBlog (blog) {
            let result = confirm("ต้องการลบสินค้านี้หรือไม่?")
            if (result) {
                try {
                    await BlogsService.delete(blog)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.blogs = (await BlogsService.index()).data
        }
    }
}
</script>

<style scoped>
.thumbnail-pic img {
    width: 200px;
    height: auto;
    margin-bottom: 10px;
}
</style>
