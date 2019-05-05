<template>
<div>
    <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <router-link to="/index">首页</router-link> &gt;
                <a href="/login.html">会员登录</a>
            </div>
        </div>
        <div class="section">
            <div class="wrapper">
                <div class="bg-wrap">
                    <div class="nav-tit">
                        <router-link to="/login">账户登录</router-link>
                        <i>|</i>
                        <a href="/register.html">免费注册</a>
                    </div>

                    <div id="loginform" name="loginform" class="login-box">
                        <div class="input-box">
                            <input id="txtUserName" name="txtUserName" v-model="user_name" type="text" placeholder="用户名/手机/邮箱" maxlength="50">
                        </div>
                        <div class="input-box">
                            <input id="txtPassword" name="txtPassword" v-model="password" type="password" placeholder="输入登录密码" maxlength="16">
                        </div>
                        <div class="btn-box">
                            <input id="btnSubmit" name="btnSubmit" type="submit" value="立即登录" @click='login'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment'
export default {
    name:'login',
    data() {
        return {
            user_name:'',
            password:''
        }
    },
    methods: {
        login() {
        axios.post(
            'http://111.230.232.110:8899/site/account/login',
            {user_name:this.user_name,password:this.password}
        ).then(response=>{
            if(response.data.status==0){
                alert(response.data.message)
                this.$router.replace('/index')
            }else{
                alert(response.data.message)
            }
            
        })
    },
    },
    
}
</script>

<style>

</style>
