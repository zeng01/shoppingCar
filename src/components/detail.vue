<template>
    <div>
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <router-link to="/index">首页</router-link> &gt;
                <router-link to="/index">购物商城</router-link> &gt;
                <a href="/goods/42/1.html">商品详情</a>
            </div>
        </div>
        <div class="section">
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <div class="left-925">
                        <div class="goods-box clearfix">
                            <div class="pic-box">
                                <!-- <img :src="imglist[0].thumb_path" alt="" width="400px"> -->
                                <img src="http://111.230.232.110:8899/imgs/XMdorze7g3yEWWdkhCLXq7Qj.jpg" alt="" width="400px">
                            </div>
                            <div class="goods-spec">
                                <h1>{{goodsinfo.title}}</h1>
                                <p class="subtitle">{{goodsinfo.sub_title}}</p>
                                <div class="spec-box">
                                    <dl>
                                        <dt>货号</dt>
                                        <dd id="commodityGoodsNo">{{goodsinfo.goods_no}}</dd>
                                    </dl>
                                    <dl>
                                        <dt>市场价</dt>
                                        <dd>
                                            <s id="commodityMarketPrice">¥{{goodsinfo.market_price}}</s>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>销售价</dt>
                                        <dd>
                                            <em id="commoditySellPrice" class="price">¥{{goodsinfo.sell_price}}</em>
                                        </dd>
                                    </dl>
                                </div>
                                <div class="spec-box">
                                    <dl>
                                        <dt>购买数量</dt>
                                        <dd>
                                            <div class="stock-box">
                                                <div class="el-input-number el-input-number--small">
                                                    <span role="button" class="el-input-number__decrease is-disabled">
                                                        <i class="el-icon-minus"></i>
                                                    </span>
                                                    <span role="button" class="el-input-number__increase">
                                                        <i class="el-icon-plus"></i>
                                                    </span>
                                                    <div class="el-input el-input--small">
                                                        <!---->
                                                        <input autocomplete="off" size="small" type="text" rows="2" max="60"
                                                            min="1" validateevent="true" class="el-input__inner" role="spinbutton"
                                                            aria-valuemax="60" aria-valuemin="1" aria-valuenow="1" aria-disabled="false">
                                                        <!---->
                                                        <!---->
                                                        <!---->
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="stock-txt">
                                                库存
                                                <em id="commodityStockNum">{{goodsinfo.stock_quantity}}</em>件
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <div id="buyButton" class="btn-buy">
                                                <button onclick="cartAdd(this,'/',1,'/shopping.html');" class="buy">立即购买</button>
                                                <!-- <button onclick="cartAdd(this,'/',0,'/cart.html');" class="add">加入购物车</button> -->
                                                <router-link :to='"/cart/"+goodsinfo.category_id' class="add">加入购物车</router-link>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div id="goodsTabs" class="goods-tab bg-wrap">
                            <div id="tabHead" class="tab-head" style="position: static; top: 517px; width: 925px;">
                                <ul>
                                    <li>
                                        <a href="javascript:;" class="selected">商品介绍</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">商品评论</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content entry" style="display: block;" v-html="goodsinfo.content">
                            </div>
                            <div class="tab-content" style="display: block;">
                                <div class="comment-box">
                                    <div id="commentForm" name="commentForm"
                                        class="form-box">
                                        <div class="avatar-box">
                                            <i class="iconfont icon-user-full"></i>
                                        </div>
                                        <div class="conn-box">
                                            <div class="editor">
                                                <textarea id="txtContent" name="txtContent" sucmsg=" " v-model="inputComment" @keyup.enter='setComment' datatype="*10-1000" nullmsg="请填写评论内容！"></textarea>
                                                <span class="Validform_checktip"></span>
                                            </div>
                                            <div class="subcon">
                                                <input id="btnSubmit" name="submit" type="submit" value="提交评论" class="submit" @click='setComment' >
                                                <span class="Validform_checktip"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <ul id="commentList" class="list-box">
                                        <p style="margin: 5px 0px 15px 69px; line-height: 42px; text-align: center; border: 1px solid rgb(247, 247, 247);">暂无评论，快来抢沙发吧！</p>
                                        <li v-for="(item, index) in commentList" :key="index">
                                            <div class="avatar-box">
                                                <i class="iconfont icon-user-full"></i>
                                            </div>
                                            <div class="inner-box">
                                                <div class="info">
                                                    <span>{{item.user_name}}</span>
                                                    <span>{{item.add_time | formatTime}}</span>
                                                </div>
                                                <p>{{item.content}}</p>
                                            </div>
                                        </li>
                                        <!-- <li>
                                            <div class="avatar-box">
                                                <i class="iconfont icon-user-full"></i>
                                            </div>
                                            <div class="inner-box">
                                                <div class="info">
                                                    <span>匿名用户</span>
                                                    <span>2017/10/23 14:59:36</span>
                                                </div>
                                                <p>很清晰调动单很清晰调动单</p>
                                            </div>
                                        </li> -->
                                    </ul>
                                    <div class="page-box" style="margin: 5px 0px 0px 62px;">
                                        <div id="pagination" class="digg">
                                            <span class="disabled" @click='prov'>« 上一页</span>
                                            <span class="current">{{pageIndex}}</span>
                                            <span class="disabled" @click='next'>下一页 »</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="left-220">
                        <div class="bg-wrap nobg">
                            <div class="sidebar-box">
                                <h4>推荐商品</h4>
                                <ul class="side-img-list">
                                   <li v-for="(item, index) in hotgoodslist" :key="index">
                                        <div class="img-box">
                                        <a href="#/site/goodsinfo/90" class>
                                            <img :src="item.img_url">
                                        </a>
                                        </div>
                                        <div class="txt-box">
                                        <a href="#/site/goodsinfo/90" class>{{item.title}}</a>
                                        <span>{{item.add_time | formatTime}}</span>
                                        </div>
                                    </li>
                                    <!-- <li>
                                        <div class="img-box">
                                            <a href="#/site/goodsinfo/91" class="">
                                                <img src="http://39.108.135.214:8899/upload/201504/20/thumb_201504200214471783.jpg">
                                            </a>
                                        </div>
                                        <div class="txt-box">
                                            <a href="#/site/goodsinfo/91" class="">尼康(Nikon)D3300套机（18-55mm f/3.5-5.6G VRII）（黑色）</a>
                                            <span>2015-04-20</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="img-box">
                                            <a href="#/site/goodsinfo/92" class="">
                                                <img src="http://39.108.135.214:8899/upload/201504/20/thumb_201504200225107390.jpg">
                                            </a>
                                        </div>
                                        <div class="txt-box">
                                            <a href="#/site/goodsinfo/92" class="">联想（Lenovo） G510AM 15.6英寸笔记本电脑</a>
                                            <span>2015-04-20</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="img-box">
                                            <a href="#/site/goodsinfo/93" class="">
                                                <img src="http://39.108.135.214:8899/upload/201504/20/201504200341260763.jpg">
                                            </a>
                                        </div>
                                        <div class="txt-box">
                                            <a href="#/site/goodsinfo/93" class="">Apple iMac MF883CH/A 21.5英寸一体机电脑</a>
                                            <span>2015-04-20</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="img-box">
                                            <a href="#/site/goodsinfo/94" class="">
                                                <img src="http://39.108.135.214:8899/upload/201504/20/thumb_201504200239192345.jpg">
                                            </a>
                                        </div>
                                        <div class="txt-box">
                                            <a href="#/site/goodsinfo/94" class="">金士顿（Kingston） DataTraveler SE9 32GB 金属U盘</a>
                                            <span>2015-04-20</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="img-box">
                                            <a href="#/site/goodsinfo/97" class="">
                                                <img src="http://39.108.135.214:8899/upload/201504/20/thumb_201504200258403759.jpg">
                                            </a>
                                        </div>
                                        <div class="txt-box">
                                            <a href="#/site/goodsinfo/97" class="">三星（SAMSUNG）UA40HU5920JXXZ 40英寸4K超高清</a>
                                            <span>2015-04-20</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="img-box">
                                            <a href="#/site/goodsinfo/102" class="">
                                                <img src="http://39.108.135.214:8899/imgs/wTgAWDLpQReTQ-ZOMdlAk4vF.jpg">
                                            </a>
                                        </div>
                                        <div class="txt-box">
                                            <a href="#/site/goodsinfo/102" class="">Hazzys哈吉斯2017新款男士长袖衬衫纯棉修身英伦衬衫显瘦商务衬衣</a>
                                            <span>2017-09-13</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="img-box">
                                            <a href="#/site/goodsinfo/103" class="">
                                                <img src="http://39.108.135.214:8899/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg">
                                            </a>
                                        </div>
                                        <div class="txt-box">
                                            <a href="#/site/goodsinfo/103" class="">骆驼男装2017秋季新款运动休闲纯色夹克青年宽松长袖针织开衫卫衣</a>
                                            <span>2017-09-26</span>
                                        </div>
                                    </li> -->
                                </ul>
                            </div>
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
    name:'detail',
    data() {
        return {
            goodsinfo: {},
            imglist: [],
            hotgoodslist: [],
            // 评论
            commentList:[],
            pageIndex:1,
            imgUrl:'',
            pageSize:10,
            inputComment:''
        }
    },
    methods: {
        getComment(){
             // 获取评论
            axios.get(`http://111.230.232.110:8899/site/comment/getbypage/goods/${this.$route.params.id}?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`).then(response=>{
                this.commentList=response.data.message
            })
        },
        setComment(){
            if(this.inputComment==""){
                return
            }
            axios.post(`http://111.230.232.110:8899/site/validate/comment/post/goods/${this.$route.params.id}`, {
                commenttxt:this.inputComment

            })
            .then(response=>{
                // console.log(response);
                this.getComment()
            })
            this.inputComment=""
        },
        prov(){
            if(this.pageSize==1){
                this.pageSize=1
            }
            this.pageSize--
        },
        next(){
            if(this.pageSize==this.commentList.length){
                this.pageSize=this.commentList.length
            }
            this.pageSize++
        }
    },  
    created() {
        
        const id=this.$route.params.id
        axios.get(`http://111.230.232.110:8899/site/goods/getgoodsinfo/${id}`).then(response=>{
            this.goodsinfo=response.data.message.goodsinfo
            this.imglist=response.data.message.imglist
            this.hotgoodslist = response.data.message.hotgoodslist;
        })
        
       this.getComment()
    },
    filters:{
        formatTime(value){
            return moment(value).format('YYYY年MM月DD日');
        }
    }
}
</script>

<style>

</style>
