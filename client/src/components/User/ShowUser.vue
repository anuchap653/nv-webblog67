<template>
  <div class="user-container">
    <h1>ข้อมูลผู้ใช้</h1>
    <div class="user-details">
      <p><strong>ID:</strong> {{ user.id }} </p>
      <p><strong>ชื่อ:</strong> {{ user.name }} </p>
      <p><strong>นามสกุล:</strong> {{ user.lastname }} </p>
      <p><strong>อีเมล:</strong> {{ user.email }}</p>
      <p><strong>รหัสผ่าน:</strong> {{ user.password }}</p>
      <p><strong>สถานะ:</strong> {{ user.status }}</p>
      <p><strong>ประเภท:</strong> {{ user.type }}</p>
      <p><strong>วันที่สร้าง:</strong> {{ user.createdAt }}</p>
    </div>
  </div>
</template>

<script>
import UsersService from "@/services/UsersService";

export default { 
  data(){
    return {
      user: {}
    }
  },
  async created() {
    try{
      var userId = this.$route.params.userId;
      this.user = (await UsersService.show(userId)).data;
    }catch(err){
      console.log(err);
    }
  }
}
</script>

<style scoped>
.user-container {
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.user-details p {
  font-size: 16px;
  color: #333;
  line-height: 1.6;
  margin-bottom: 10px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
}

strong {
  color: #555;
}
</style>
