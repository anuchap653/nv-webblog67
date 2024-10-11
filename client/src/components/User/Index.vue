<template>
  <div class="user-list-container">
    <div class="header">
      <h1>จำนวนผู้ใช้งานทั้งหมด : {{ users.length }}</h1>
      <button class="btn primary" v-on:click="navigateTo('/user/create')">สร้างผู้ใช้</button>
    </div>
    <hr>
    <div v-if="users.length">
      <div v-for="user in users" v-bind:key="user.id" class="user-card">
        <div><strong>ชื่อผู้ใช้:</strong> {{ user.name }} {{ user.lastname }}</div>
        <div><strong>อีเมล:</strong> {{ user.email }}</div>
        <div class="actions">
          <button class="btn info" v-on:click="navigateTo('/user/'+user.id)">ดูข้อมูล</button>
          <button class="btn warning" v-on:click="navigateTo('/user/edit/'+user.id)">แก้ไขข้อมูล</button>
          <button class="btn danger" v-on:click="deleteUser(user)">ลบข้อมูล</button>
        </div>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import UsersService from "@/services/UsersService";
export default {
  data(){
    return {
      users: []
    }
  },
  async created() {
    try{
      this.users = (await UsersService.index()).data;
    }catch(err){
      console.log(err);
    }
  },
  methods:{
    navigateTo(route){
      this.$router.push(route);
    },
    async deleteUser(user){
      let result = confirm("คุณต้องการลบข้อมูลใช่หรือไม่?");
      if(result){
        try{
          await UsersService.delete(user);
          this.refreshData();
        }catch(err){
          console.log(err);
        }
      }
    },
    async refreshData(){
      try{
        this.users = (await UsersService.index()).data;
      }catch(err){
        console.log(err);
      }
    }
  }
};
</script>

<style scoped>
.user-list-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.user-card {
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.user-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.actions {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn.primary {
  background-color: #3498db;
  color: #fff;
}

.btn.primary:hover {
  background-color: #2980b9;
}

.btn.info {
  background-color: #24b0c5;
  color: #fff;
}

.btn.info:hover {
  background-color: #138496;
}

.btn.warning {
  background-color: #f39c12;
  color: #fff;
}

.btn.warning:hover {
  background-color: #e67e22;
}

.btn.danger {
  background-color: #e74c3c;
  color: #fff;
}

.btn.danger:hover {
  background-color: #c0392b;
}
</style>
