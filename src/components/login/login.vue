<template>
        <div class="login-wrap" v-if="loginType === 'aa'">
            <h3>登录</h3>

            <input type="text" placeholder="请输入用户名" v-model="username">
            <input type="password" placeholder="请输入密码" v-model="password">
            <button >登录</button>
            <span v-on:click="change">没有账号？马上注册</span>
        </div>
</template>
<template>
        <div class="register-wrap" v-else>
            <h3>注册</h3>

            <input type="text2" placeholder="请输入用户名" v-model="newUsername">
            <input type="password2" placeholder="请输入密码" v-model="newPassword">
            <button >注册</button>
            <span v-on:click="change">已有账号？马上登录</span>
        </div>
</template>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable.styl"
 
    .register-wrap{text-align:center;}
    .login-wrap{text-align:center;}
    input{display:block; width:250px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px; outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
    p{color:red;}
    button{display:block; width:250px; height:40px; line-height: 40px; margin:0 auto; border:none; background-color:#41b883; color:#fff; font-size:16px; margin-bottom:5px;}
    span{cursor:pointer;}
    span:hover{color:#41b883;}
</style>

<script type="text/ecmascript-6">
import Scroll from 'base/scroll/scroll';
    export default{
         methods: {
            change(){
                var a = this.loginType ==='aa' ? 'b':'aa';  
         this.loginType = a;  
            }
        },  
        data() {
            return{

                username: '',
                password: '',
                newUsername: '',
                newPassword: ''
            }
        },
        components: {
            Scroll
            }
    };
</script>

