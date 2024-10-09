<template>
  <div>
    <div class="nv-navbar">
      <ul class="nav">
<<<<<<< HEAD
        <li><router-link :to="{ name: 'blogs' }">Blogs</router-link></li>
        <li><router-link :to="{ name: 'users' }">Users</router-link></li>
        <li><router-link :to="{ name: 'comments' }">Comments</router-link></li>
        <!-- if isLogin is true, show logout menu. otherwise, show login menu-->
        <li><router-link :to="{ name: 'login' }">Login</router-link></li>  
=======
        <li><router-link :to="{ name: 'blogs' }">Product</router-link></li>
        <li><router-link :to="{ name: 'users' }">Users</router-link></li>
        <!-- Login menu will be aligned to the right -->
        <li class="right"><router-link :to="{ name: 'login' }">Login</router-link></li>  
>>>>>>> a03cca9 (แก้blog client ให้แสดงรูปได่)
      </ul>
    </div>
  </div>
</template>
<<<<<<< HEAD
<script>

export default {

=======

<script>
export default {
>>>>>>> a03cca9 (แก้blog client ให้แสดงรูปได่)
  methods:{
    isLogin(){
      return this.$store.getters.isUserLoggedIn;
    },
    logout(){
      this.$store.dispatch('logout');
      this.$router.push({name: 'login'});
    }
  }
};
</script>
<<<<<<< HEAD
=======

>>>>>>> a03cca9 (แก้blog client ให้แสดงรูปได่)
<style scoped>
.nv-navbar {
  background-color: palegoldenrod;
  width: 100%;
  height: 20px;
  padding: 10px 0px 10px 0px;
}
.nv-navbar .nav {
  list-style: none;
  margin: 0;
  padding: 0;
  float: left;
<<<<<<< HEAD
=======
  width: 100%; /* To allow float right to work properly */
>>>>>>> a03cca9 (แก้blog client ให้แสดงรูปได่)
}
.nv-navbar .nav li {
  float: left;
}
<<<<<<< HEAD
=======
.nv-navbar .nav li.right {
  float: right; /* Align the Login menu to the right */
}
>>>>>>> a03cca9 (แก้blog client ให้แสดงรูปได่)
.nv-navbar .nav li a {
  padding: 10px;
  text-decoration: none;
  color: gray;
  font-weight: bold;
}
.nv-navbar .nav li a:hover {
  padding: 10px;
  text-decoration: none;
  color: darkslategrey;
}
.nv-navbar .nav li a.router-link-active {
  background-color: gold;
  color: darkslategrey;
}
.clearfix {
  clear: left;
}
</style>
