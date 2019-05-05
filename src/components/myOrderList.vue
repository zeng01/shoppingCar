<template>
    <div class="bg-wrap" style="min-height: 765px;">
      <div class="sub-tit">
        <ul>
          <li class="selected">
            <a href="/user/order-list.html">交易订单</a>
          </li>
        </ul>
      </div>
      <div class="table-wrap">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="ftable">
          <tbody>
            <tr>
              <th width="16%" align="left">订单号</th>
              <th width="10%">姓名</th>
              <th width="12%">订单金额</th>
              <th width="11%">下单时间</th>
              <th width="10%">状态</th>
              <th width="12%">操作</th>
            </tr>
            <!-- <tr v-for="(item, index) in myOrderList" :key="index">
                                                        <td>{{item.order_no}}</td>
                                                        <td align="left">{{item.accept_name}}</td>
                                                        <td align="left">
                                                            <strong style="color: red;">￥{{item.order_amount}}</strong>
                                                            <br> {{item.paymentTitle}}
                                                        </td>
                                                        <td align="left">{{item.add_time}}</td>
                                                        <td align="left" v-show='item.status!=1'>
                                                            待付款
                                                        </td>
                                                        <td align="left" v-show='item.status!=2'>
                                                            已付款待发货
                                                        </td>
                                                        <td align="left" v-show='item.status!=3'>
                                                            已发货待签收
                                                        </td>
                                                        <td align="left" v-show='item.status!=4'>
                                                            已签收
                                                        </td>
                                                        <td align="left" v-show='item.status!=5'>
                                                            已取消
                                                        </td>
                                                        <td align="left">
                                                            <router-link :to='"/myOrderDetail/"+item.id'>查看订单</router-link>
                                                            <br>
                                                            <a href="#/site/goods/payment/12" class="">|去付款</a>
                                                            <br>
                                                            <a href="javascript:void(0)">|取消</a>
                                                            <br>
                                                        </td>
            </tr>-->
          </tbody>
        </table>
        <div class="page-foot"></div>
      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "myOrderList",
  data() {
    return {
      myOrderList: []
    };
  },
  created() {
    axios
      .get(
        `http://111.230.232.110:8899/site/validate/order/userorderlist?pageIndex=1&pageSize=10`
      )
      .then(response => {
        console.log(response.data);
        this.myOrderList = response.data.message;
      });
  }
};
</script>

<style>
</style>
