<template>
    <div>
        <div class="login-wrap" v-show="shoeLogin">
            <h3>登录</h3>
            <p v-show="showtip">{{tip}}</p>
            <input type="text" placeholder="请输入用户名" v-model="username">
            <input type="password" placeholder="请输入密码" v-model="password">
            <button v-on:click="login">登录</button>
            <span v-on:click="ToRegister">么账号？！赶紧注册哈</span>
        </div>

        <div class="register-wrap" v-show="showRegister">
            <h3>注册</h3>
            <p v-show="showtip">{{tip}}</p>
            <input type="text" placeholder="请输入用户名" v-model="newUsername">
            <input type="password" placeholder="请输入密码" v-model="newPassword">
            <button v-on:click="register">注册</button>
            <span v-on:click="ToLogin">已有账号？马上登录</span>
        </div>
    </div>    
</template>

<style>
    .login-wrap{text-align:center;}
    input{display:block; width:250px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px; outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
    p{color:red;}
    button{display:block; width:250px; height:40px; line-height: 40px; margin:0 auto; border:none; background-color:#41b883; color:#fff; font-size:16px; margin-bottom:5px;}
    span{cursor:pointer;}
    span:hover{color:#41b883;}
</style>

<script>
    export default{
        data(){
            return{
                showLogin: true,
                showRegister: false,
                showtip: false,
                tip: '',
                username: '',
                password: '',
                newUsername: '',
                newPassword: ''
            }
        }
    }
</script>

<script>
import {setCookie,getCookie} from '../../common/js/cookie.js'
export default{
  mounted(){
  /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
    if(getCookie('username')){
        this.$router.push('/movie-show')
    }
  },
  methods:{
    login(){
        if(this.username == "" || this.password == ""){
            alert("请输入用户名或密码")
        }else{
            let data = {'username':this.username,'password':this.password}

            /*接口请求*/
            this.$http.post('http://localhost/vueapi/index.php/Home/user/login',data).then((res)=>{
                console.log(res)
             /*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
              if(res.data == -1){
                  this.tip = "该用户不存在"
                  this.showtip = true
              }else if(res.data == 0){
                  this.tip = "密码输入错误"
                  this.showtip = true
              }else if(res.data == 'admin'){
              /*路由跳转this.$router.push*/
                  this.$router.push('/main')
              }else{
                  this.tip = "登录成功"
                  this.showtip = true
                  setCookie('username',this.username,1000*60)
                  setTimeout(function(){
                      this.$router.push('/home')
                  }.bind(this),1000)
              }
          })
      }
    }
  }
}
</script>