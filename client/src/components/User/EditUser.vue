<template>
  <div class="edit-user-container">
    <h1>แก้ไขข้อมูลผู้ใช้</h1>
    <form v-on:submit.prevent="editUser" class="user-form">
      <div class="form-group">
        <label for="name">ชื่อ :</label>
        <input type="text" id="name" v-model="user.name" class="form-control" />
      </div>
      <div class="form-group">
        <label for="lastname">นามสกุล :</label>
        <input type="text" id="lastname" v-model="user.lastname" class="form-control" />
      </div>
      <div class="form-group">
        <label for="email">อีเมล :</label>
        <input type="email" id="email" v-model="user.email" class="form-control" />
      </div>
      <div class="form-group">
        <label for="password">รหัสผ่าน :</label>
        <input type="text" id="password" v-model="user.password" class="form-control" />
      </div>
      <div class="form-group">
        <button type="submit" class="btn-submit">ยืนยัน</button>
      </div>
    </form>
  </div>
</template>

<script>
import UsersService from '../../services/UsersService';
export default {
  data() {
    return {
      user: {
        name: '',
        lastname: '',
        email: '',
        password: '',
        status: 'active'
      }
    }
  },
  async created() {
    try {
      var userId = this.$route.params.userId;
      this.user = (await UsersService.show(userId)).data;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async editUser() {
      try {
        await UsersService.put(this.user);
        this.$router.push('/users');
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>

<style scoped>
.edit-user-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

h1 {
  text-align: center;
  color: #333;
}

.user-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
}

.form-control {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.btn-submit {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-submit:hover {
  background-color: #45a049;
}
</style>
