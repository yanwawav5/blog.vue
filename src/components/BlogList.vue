<template>
<div>
    <div class="container clearfix">
        <div class="header clearfix">
            <div class="logo">
                <img src="static/image/logo.png">
            </div>
            <ul class="category">
                <li v-for="item in this.category" :label="item.id" :key="item.id"><a @click="getBlogList({keyword: '', categoryId: item.id, tagId: ''})"><span>{{item.name}}</span></a></li>
            </ul>
        </div>
        <div class="main">
            <div class="banner">
                <img src="static/image/banner.png">
            </div>
            <div class="statistics">
                <img src="static/image/statistics.png">
            </div>
            <div class="blogs">
                <ul>
                     <li v-for="item in this.blogs" :label="item.id" :key="item.id">
                         <router-link
                            :to="{path:'/BlogDetail',query:{id: item.id}}"
                            style="text-decoration: none;"
                        >
                            <p class="title">{{item.title}}</p>
                            <div class="simple-content">
                                <img :src="host + item.picUrl">
                                <!-- <img src="static/image/cover.png"> -->
                                <span class="text" >
                                    <!-- v-html="item.content" -->
                                    I’ve been pretty curious to dip into the HD FPV world for a while now, and after thinking about it for a short while, patiently waiting for the end of the winter and then another 2 months to get past the shipping issues around the COVID-19 pandemic, I finally made it! I got the DJI digital FPV system, and I’m so happy…
                                    <!-- I’ve been pretty curious to dip into the HD FPV world for a while now, and after thinking about it for a short while, patiently waiting for the end of the winter and then another 2 months to get past the shipping issues around the COVID-19 pandemic, I finally made it! I got the DJI digital FPV system, and I’m so happy… -->
                                </span>
                            </div>
                            <div class="info">
                                <i>发布于{{dateFormat(item.createAt)}}</i>
                            </div>
                            <div class="tag"><button v-for="tItem in item.tagList" :label="tItem.tagId" :key="tItem.tagId" type="button">{{tItem.tagName}}</button><i class="iconfont icon-xiangqing2"></i></div> 
                        </router-link>
                    </li>
                    <!-- <li>
                        <p class="title">DJI digital FPV system: Review, Activation, Firmware Upgrade</p>
                        <div class="simple-content">
                            <img src="static/image/cover.png">
                            <span class="text">
                                I’ve been pretty curious to dip into the HD FPV world for a while now, and after thinking about it for a short while, patiently waiting for the end of the winter and then another 2 months to get past the shipping issues around the COVID-19 pandemic, I finally made it! I got the DJI digital FPV system, and I’m so happy…
                            </span>
                        </div>
                        <div class="info">
                            <i>发布于2020年11月23号</i>
                        </div>
                        <div class="tag"><button type="button">工作</button> <button type="button">探索</button> <i class="iconfont icon-xiangqing2"></i></div> 
                    </li>
                     <li>
                        <p class="title">DJI digital FPV system: Review, Activation, Firmware Upgrade</p>
                        <div class="simple-content">
                            <img src="static/image/cover.png">
                            <span class="text">
                                I’ve been pretty curious to dip into the HD FPV world for a while now, and after thinking about it for a short while, patiently waiting for the end of the winter and then another 2 months to get past the shipping issues around the COVID-19 pandemic, I finally made it! I got the DJI digital FPV system, and I’m so happy…
                            </span>
                        </div>
                        <div class="info">
                            <i>发布于2020年11月23号</i>
                        </div>
                        <div class="tag"><button type="button">工作</button> <button type="button">探索</button> <i class="iconfont icon-xiangqing2"></i></div> 
                    </li>
                     <li>
                        <p class="title">DJI digital FPV system: Review, Activation, Firmware Upgrade</p>
                        <div class="simple-content">
                            <img src="static/image/cover.png">
                            <span class="text">
                                I’ve been pretty curious to dip into the HD FPV world for a while now, and after thinking about it for a short while, patiently waiting for the end of the winter and then another 2 months to get past the shipping issues around the COVID-19 pandemic, I finally made it! I got the DJI digital FPV system, and I’m so happy…
                            </span>
                        </div>
                        <div class="info">
                            <i>发布于2020年11月23号</i>
                        </div>
                        <div class="tag"><button type="button">工作</button> <button type="button">探索</button> <i class="iconfont icon-xiangqing2"></i></div> 
                    </li>
                     <li>
                        <p class="title">DJI digital FPV system: Review, Activation, Firmware Upgrade</p>
                        <div class="simple-content">
                            <img src="static/image/cover.png">
                            <span class="text">
                                I’ve been pretty curious to dip into the HD FPV world for a while now, and after thinking about it for a short while, patiently waiting for the end of the winter and then another 2 months to get past the shipping issues around the COVID-19 pandemic, I finally made it! I got the DJI digital FPV system, and I’m so happy…
                            </span>
                        </div>
                        <div class="info">
                            <i>发布于2020年11月23号</i>
                        </div>
                        <div class="tag"><button type="button">工作</button> <button type="button">探索</button> <i class="iconfont icon-xiangqing2"></i></div> 
                    </li>
                     <li>
                        <p class="title">DJI digital FPV system: Review, Activation, Firmware Upgrade</p>
                        <div class="simple-content">
                            <img src="static/image/cover.png">
                            <span class="text">
                                I’ve been pretty curious to dip into the HD FPV world for a while now, and after thinking about it for a short while, patiently waiting for the end of the winter and then another 2 months to get past the shipping issues around the COVID-19 pandemic, I finally made it! I got the DJI digital FPV system, and I’m so happy…
                            </span>
                        </div>
                        <div class="info">
                            <i>发布于2020年11月23号</i>
                        </div>
                        <div class="tag"><button type="button">工作</button> <button type="button">探索</button> <i class="iconfont icon-xiangqing2"></i></div>  
                    </li> -->
                </ul>
            </div>
            <!-- <div class="pagination">分页</div> -->
            <div class="to-top"><button type="button">返回顶部<i class="iconfont icon-fanhuidingbu2"></i></button></div>
        </div>
        <aside class="sidebar">
             <el-input
                class="search"
                placeholder="请输入内容"
                prefix-icon="el-icon-search">
            </el-input>
            <div class="tags">
                <ul>
                    <li v-for="item in tag" :label="item.tagId" :key="item.tagId"><a @click="getBlogList({keyword: '', categoryId: '', tagId: item.tagId})"><i class="iconfont" :class="item.iconFontClass"></i><span>{{item.tagName}}({{item.blogCount}})</span></a></li>
                </ul>
            </div>
            <div class="hot-header">
                 <svg class="icon closeImg" aria-hidden="true">
                    <use xlink:href="#icon-hotfill"></use>
                </svg>
                <span>热门阅读</span>
            </div>
            <div class="artcle-list">
                <ul>
                    <li v-for="(item,index) in this.hotBlogs" :label="item.id" :key="item.id"><div class="title" :class="`t${index+1}`"><i>{{index+1}}</i></div><a href="#"><span>{{item.name}}</span></a></li>
                </ul>
            </div>
        </aside>
    </div>
     <div class="footer">
        © 2020 八嘎哥.
    </div>
</div>
</template>

<script>
import moment from "moment";

export default {
    data() {
        return {
            host: "http://localhost:5000",
            category: [],
            tag: [],
            hotBlogs: [],
            condition: { keyword: '',categoryId: '', tagId: '' },
            blogs: [],
            // tagList: [],
            // blogs: [{id,title,content,createAt,viewTimes,commentTimes,likeTimes,picUrl,tagList}]
            currentPage: 1,
            pageSize: 50,
        }
    },
    created() {
        this.$http.get("api/category/categorylist").then((response) => {
            if (!response) {
                this.$message({
                showClose: true,
                message: "获取博客分类失败",
                type: "error",
                });
            } else {
                this.category = response.data.response;
            }
        });

        this.$http.get("api/tag/get").then((response) => {
             if (!response) {
                this.$message({
                showClose: true,
                message: "获取博客标签失败",
                type: "error",
                });
            } else {
                this.tag = response.data.response;
            }
        });

        this.$http.get("api/blog/topBlogList").then((response) => {
             if (!response) {
                this.$message({
                showClose: true,
                message: "获取热门博客失败",
                type: "error",
                });
            } else {
                this.hotBlogs = response.data.response;
            }
        });
       
       this.getBlogList(this.condition)
    },
    methods: {
        /*日期处理*/
        dateFormat(date) {
             if (date === undefined || date === null) {
                return "";
            }
            return moment(date).format("YYYY年MM月DD号");
        },
        getBlogList(param) {
            this.condition = param
             this.$http.post(`api/blog/blogList?pageIndex=${this.currentPage}&pageSize=${this.pageSize}`,this.condition).then((response) => {
             if (!response) {
                this.$message({
                showClose: true,
                message: "获取博客列表失败",
                type: "error",
                });
            } else {
                this.blogs = response.data.data;
            }
        })
        }
    }
}
</script>

<style scoped>
    .icon {
      width: 1em;
      height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }

    a {
        text-decoration: none;
        color: #505050;
    }
    .clearfix:after {/*伪元素是行内元素 正常浏览器清除浮动方法*/
        content: "";
        display: block;
        height: 0;
        clear:both;
        visibility: hidden;
    }

    .clearfix {
        *zoom: 1;/*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
    }

    .container {
        width: 1160px;
        margin: auto;
    }

    .container .main {
        float: left;
        width: 835px;
        border-right: 2px dotted #a6a6a6;
    }

    .header {
        position: fixed;
        height: 61.5px;
        background-color: rgb(255 255 255 / 60%);
        backdrop-filter: blur(5px);
        width: 100%;
    }

    .header .logo {
        float: left;
        max-width: 100px;
        height: auto;
    }

    .header .logo img {
        max-width: 100px;
        height: auto
    }

    .header .category {
        float: left;
        margin-left: 25px;
        height: 60px;
        line-height: 60px;
        list-style: none;
    }

    .header .category li {
         float: left;
         padding: 0 30px 0 30px;
         font-size:25px;
         font-weight: bold;
         color: #505050;
         cursor: pointer;
    }

    .header .category li a {
         color: #505050;
    }

    .header .category li:hover {
        background-color: #ff5733;
    }

    .header .category li:hover a {
        color: #f2f0f4;
    }

    .main {
        padding-top: 50px;
    }

    .banner {
        margin-top: 50px;
        max-width: 754px;
        height: auto;
    }

    .banner img {
        max-width: 754px;
        height: auto
    }

    .statistics {
        margin-top: 50px;
        max-width: 754px;
        height: auto;
    }

    .statistics img {
        max-width: 754px;
        height: auto
    }

    .blogs ul li {
        max-width: 754px;
        height: 315px;
        list-style: none;
        margin-bottom: 30px;
        background-color: #f3e0e0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
        cursor: pointer;
    }

    .blogs .title {
        margin: 10px 20px;
        padding-top: 10px;
        font-size: 18px;
        font-weight: 600;
        color: #505050;
    }

    .blogs .simple-content {
        margin: 15px 20px 0 20px;
        height: 168px;
    }

    .blogs .simple-content img {
        float: left;
        max-width: 340px;
        max-height: 169px;
        padding-right: 40px;
    }

    .blogs .simple-content .text {
        max-width: 579px;
        max-height: 105px;
        font-size: 16px;
        color: #505050;
    }

    .blogs .info {
        margin: 20px 20px 0 20px;
        padding: 10px 0;
        border-top: 1px solid #b1afaf;
    }

    .blogs .info i {
        font-size: 14px;
        color: #505050;
    }

    .blogs .tag {
        margin: 0 20px 20px 20px;
    }

    .blogs .tag button {
        margin-right: 10px;
        width:60px;
        height: 24px;
        color: white;
        font-style: oblique;
        border: none;
        background-color: #ff5733;
    }

    .blogs .tag i  {
        float: right;
        /* font-size: 25px; */
        /* font-weight: bold; */
    }

    .main .to-top button {
        float: right;
        margin: 30px 80px 50px 0;
        width: 101px;
        height: 38px;
        border: none;
        background-color: #ff5733;
        color: white;
        font-size: 16px;
    }

     .main .to-top i {
        margin-left: 7px;
    }

    .container .sidebar {
        position: sticky;
        top: 60px;
        float: left;
        margin-top: 160px;
        width: calc(100% - 839px);
    }

    /* .sidebar input {
        display: block;
        margin-bottom: 60px;
        margin-left: 39px;
        height: 25px;
        width: 100px;
    }

    .sidebar input:focus {
        width: 200px;
        transition: width 1s;
    } */

    .sidebar .search {
        margin-left: 40px;
        margin-bottom: 30px;
        width: 209px;
    }

    .el-input__inner {
        height: 38px;
    }

    .sidebar .tags {
        width: 75%;
        margin-left:auto;
        margin-right:auto;
    }

    .sidebar .tags li {
        display: inline-block;
        /* width: 87px; */
        list-style: none;
        margin: 10px 30px 10px 0;
        cursor: pointer;
        /* background-color: #a6a6a6; */
    }

    .sidebar .tags li i {
        color: #505050;
        padding-right: 5px;
    }

    .sidebar .tags li span {
        display: inline-block;
        text-align: center;
        width: 67px;
        color: #505050;
        background-color: #ccc7c7;
    }

    .sidebar .tags span:hover {
        background-color: tomato;
    }

    .sidebar .tags li:hover span {
        color: white;
    }

    .sidebar .hot-header {
        margin: 50px 0 30px 39px;
        width: 30%;
        background-color: #ccc7c7;
    }

    .sidebar .hot-header span {
        padding-left: 6px;
    }

    .sidebar .artcle-list {
        width: 75%;
        margin-left:auto;
        margin-right:auto;
    }

    .sidebar .artcle-list li {
        list-style: none;
        margin-bottom: 20px;
    }

     .sidebar .artcle-list li .title {
        display: inline-block;
        width: 25px;
        height: 25px;
        line-height: 25px;
        text-align: center;
    }

    .sidebar .artcle-list li .t1 {
        background-color: #ff5733;
        color: white;
    }

    .sidebar .artcle-list li .t2 {
        background-color: #fb856d;
        color: white;
    }

    .sidebar .artcle-list li .t3 {
        background-color: #f7b3a6;
        color: white;
    }

     .sidebar .artcle-list li .t4 {
        background-color: #ccc7c7;
        color: white;
    }

     .sidebar .artcle-list li .t5 {
        background-color: #ccc7c7;
        color: white;
    }

    .sidebar .artcle-list li span {
        padding-left: 10px;
    }

    .sidebar .artcle-list li:hover {
        background-color: tomato;
    }

    .sidebar .artcle-list li:hover span {
        color: white;
    }

    .sidebar .artcle-list li:hover i {
        color: white;
    }

    .footer {
        text-align: center;
        height: 50px;
        line-height: 50px;
        font-style: oblique;
        width: 100%;
        background-color: rgb(255 255 255 / 60%);
        backdrop-filter: blur(5px);
    }
</style>