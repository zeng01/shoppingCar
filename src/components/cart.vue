<template>
    <div>
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="/index.html">首页</a> &gt;
                <a href="/cart.html">购物车</a>
            </div>
        </div>

        <div class="section">
            <div class="wrapper">
                <div class="bg-wrap">
                    <!--购物车头部-->
                    <div class="cart-head clearfix">
                        <h2>
                            <i class="iconfont icon-cart"></i>我的购物车</h2>
                        <div class="cart-setp">
                            <ul>
                                <li class="first active">
                                    <div class="progress">
                                        <span>1</span>
                                        放进购物车
                                    </div>
                                </li>
                                <li>
                                    <div class="progress">
                                        <span>2</span>
                                        填写订单信息
                                    </div>
                                </li>
                                <li class="last">
                                    <div class="progress">
                                        <span>3</span>
                                        支付/确认订单
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--购物车头部-->
                    <!--商品列表-->
                    <div class="cart-box">
                        <input id="jsondata" name="jsondata" type="hidden">
                        <table width="100%" align="center" class="cart-table" border="0" cellspacing="0" cellpadding="8">
                            <tbody>
                                <tr>
                                    <th width="48" align="center">
                                        <a>选择</a>
                                    </th>
                                    <th align="left" colspan="2">商品信息</th>
                                    <th width="84" align="left">单价</th>
                                    <th width="104" align="center">数量</th>
                                    <th width="104" align="left">金额(元)</th>
                                    <th width="54" align="center">操作</th>
                                </tr>
                                <tr v-show="cartList.length==0">
                                    <td colspan="10">
                                        <div class="msg-tips" >
                                            <div class="icon warning" >
                                                <i class="iconfont icon-tip"></i>
                                            </div>
                                            <div class="info" >
                                                <strong>购物车没有商品！</strong>
                                                <p>您的购物车为空，
                                                    <a href="/index.html">马上去购物</a>吧！</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-for="(item, index) in cartList" :key="index" class='product'>
                                    <td width="48" align="center">
                                        <input type="checkbox" name="" id="">
                                    </td>
                                    <td align="left" colspan="2">
                                        <img :src="item.img_url" alt="">
                                        <span>{{item.title}}</span>
                                    </td>
                                    <td width="84" align="left">{{item.sell_price}}</td>
                                    <td width="104" align="center">{{item.buycount}}</td>
                                    <td width="104" align="left">{{item.sell_price * item.buycount }}</td>
                                    <td width="54" align="center"><button type="button">删除</button></td>
                                </tr>
                                <tr>
                                    <th align="right" colspan="8">
                                        已选择商品
                                        <b class="red" id="totalQuantity">0</b> 件 &nbsp;&nbsp;&nbsp; 商品总金额（不含运费）：
                                        <span class="red">￥</span>
                                        <b class="red" id="totalAmount">0</b>元
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--/商品列表-->
                    <!--购物车底部-->
                    <div class="cart-foot clearfix">
                        <div class="right-box">
                            <button class="button" onclick="javascript:location.href='/index.html';">继续购物</button>
                            <!-- <button class="submit" onclick="formSubmit(this, '/', '/shopping.html');">立即结算</button> -->
                            <router-link :to='"/order/"+ids' class="submit">立即结算</router-link>
                        </div>
                    </div>
                    <!--购物车底部-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment'
export default {
    name:'cart',
    data() {
        return {
            cartList:[],
            ids:'',
        }
    },
    created() {
        
        this.ids=this.$route.params.id
        // console.log(this.ids);
        // console.log(`http://111.230.232.110:8899/site/comment/getshopcargoods/${this.ids}`);
        
        
        axios.get(`http://111.230.232.110:8899/site/comment/getshopcargoods/${this.ids}`).then(response=>{
            console.log(response.data);
            this.cartList=response.data.message
        })
        
    },
}
</script>

<style>
tbody td img{
    width:100px;
}
tr,td{
    
}
.submit{
        padding: 10px 25px;
    color: #fff;
    margin-left: 10px;
}
</style>
