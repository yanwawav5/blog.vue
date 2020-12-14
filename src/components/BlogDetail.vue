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
            <div class="title clearfix">
                <!-- src="static/image/cover.png" -->
                <img :src="host + this.blog.picUrl">
                <span>
                    {{this.blog.title}}
                <!-- 2020年的最后一天，我完成了这件事,欲知详情，请听下回讲解 -->
                </span>
            </div>
            <div class="content" v-html="this.blog.content"></div>
            <div class="supply-info">
                <span class="info">本文于   {{dateFormat(this.blog.createAt)}}  发布在  {{this.blog.categoryName}}  分类下，当前已被浏览  {{this.blog.viewTimes}} 次</span>
                <span class="tag-area">相关标签：</span>
                <div class="tags"><button type="button" v-for="item in this.blog.tagNameList" :key="item">{{item}}</button></div>
            </div>
            <div class="number"><span>21条评论</span>
                <span>
                    <svg class="icon closeImg" aria-hidden="true">
                        <use xlink:href="#icon-aixin"></use>
                    </svg>
                    12个人觉得很赞
                </span>
            </div>
            <div class="comment-list">
                <ul>
                    <li>
                        <div class="comment clearfix">
                            <img class="gravatar" src="static/image/gravatar.jpg">
                            <div class="message">
                                <div class="userinfo">
                                    <span class="name">逍遥妹妹</span>
                                    <span>回复</span>
                                    <span><i>#1</i></span>
                                    <span class="name">@八嘎哥</span> 
                                    <span class="addr">中国-上海<i>#2</i></span>
                                </div>
                                <div class="reply"><span>是的，需要设置一下，才会更新是的，需要设置一下，才会更新是的，需要设置一下，才会更新是的，
                                    需要设置一下，才会更新是的，需要设置一下，才会更新是的，需要设置一下，才会更新是的，需要设置一下，才会更新是的，需要设置一下，才会更新</span></div>
                                <div class="otherinfo">
                                    <span class="date"><i>2020/10/28  12:23:20</i></span>
                                    <span class="reply-btn"><i class="iconfont icon-icon_reply"></i>回复</span>
                                    <span class="like-btn"><i class="iconfont icon-dianzan"></i>赞(14)</span>
                                </div>
                            </div>
                        </div>
                    </li>
                     <li>
                        <div class="comment clearfix">
                            <img class="gravatar" src="static/image/gravatar.jpg">
                            <div class="message">
                                <div class="userinfo">
                                    <span class="name">逍遥妹妹</span>
                                    <span>回复</span>
                                    <span><i>#1</i></span>
                                    <span class="name">@八嘎哥</span> 
                                    <span class="addr">中国-上海<i>#2</i></span>
                                </div>
                                <div class="reply"><span>是的，需要设置一下，才会更新是的，需要设置一下，才会更新是的，需要设置一下，才会更新是的，
                                    需要设置一下，才会更新是的，需要设置一下，才会更新是的，需要设置一下，才会更新是的，需要设置一下，才会更新是的，需要设置一下，才会更新</span></div>
                                <div class="otherinfo">
                                    <span class="date"><i>2020/10/28  12:23:20</i></span>
                                    <span class="reply-btn"><i class="iconfont icon-icon_reply"></i>回复</span>
                                    <span class="like-btn"><i class="iconfont icon-dianzan"></i>赞(14)</span>
                                </div>
                            </div>
                        </div>
                    </li>
                     <li>
                        <div class="comment clearfix">
                            <img class="gravatar" src="static/image/gravatar.jpg">
                            <div class="message">
                                <div class="userinfo">
                                    <span class="name">逍遥妹妹</span>
                                    <span>回复</span>
                                    <span><i>#1</i></span>
                                    <span class="name">@八嘎哥</span> 
                                    <span class="addr">中国-上海<i>#2</i></span>
                                </div>
                                <div class="reply"><span>是的，需要设置一下，才会更新是的，需要设置一下，才会更新是的，需要设置一下，才会更新是的，
                                    需要设置一下，才会更新是的，需要设置一下，才会更新是的，需要设置一下，才会更新是的，需要设置一下，才会更新是的，需要设置一下，才会更新</span></div>
                                <div class="otherinfo">
                                    <span class="date"><i>2020/10/28  12:23:20</i></span>
                                    <span class="reply-btn"><i class="iconfont icon-icon_reply"></i>回复</span>
                                    <span class="like-btn"><i class="iconfont icon-dianzan"></i>赞(14)</span>
                                </div>
                            </div>
                        </div>
                    </li>
                     <li>
                        <div class="comment clearfix">
                            <img class="gravatar" src="static/image/gravatar.jpg">
                            <div class="message">
                                <div class="userinfo">
                                    <span class="name">逍遥妹妹</span>
                                    <span>回复</span>
                                    <span><i>#1</i></span>
                                    <span class="name">@八嘎哥</span> 
                                    <span class="addr">中国-上海<i>#2</i></span>
                                </div>
                                <div class="reply"><span>是的，需要设置一下，才会更新是的，需要设置一下，才会更新是的，需要设置一下，才会更新是的，
                                    需要设置一下，才会更新是的，需要设置一下，才会更新是的，需要设置一下，才会更新是的，需要设置一下，才会更新是的，需要设置一下，才会更新</span></div>
                                <div class="otherinfo">
                                    <span class="date"><i>2020/10/28  12:23:20</i></span>
                                    <span class="reply-btn"><i class="iconfont icon-icon_reply"></i>回复</span>
                                    <span class="like-btn"><i class="iconfont icon-dianzan"></i>赞(14)</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="comment-editor">
                <vue-tinymce :setup="setup" :setting="setting" />
            </div>
            <div class="submit">
                <button class="btn" type="button"><span>发送</span></button>
            </div>
            <!-- <div class="return-top">
                <button class="btn" type="button"><span>返回顶部</span><i class="iconfont icon-fanhuidingbu2"></i></button>
            </div> -->
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
            setting: {
                menubar: false,
                toolbar:
                "undo redo | forecolor backcolor emoticons ",
                toolbar_drawer: "sliding",
                quickbars_selection_toolbar:
                "removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor",
                plugins: "link image media table lists quickbars emoticons ",
                language: "zh_CN", //本地化设置
                height: 230,
            },
            blog: {categoryName: '',commentTimes: '',content: '',createAt: '', likeTimes: '',picUrl: '',tagNameList: [],title: '',viewTimes: ''}
        };
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
       
    //    this.getBlogList(this.condition)
        this.blogDetail()
    },
    methods: {
        /*日期处理*/
        dateFormat(date) {
             if (date === undefined || date === null) {
                return "";
            }
            return moment(date).format("YYYY/MM/DD");
        },
        blogDetail() {
             this.$http.get(`api/blog/blogDetail?id=${this.$route.query.id}`).then((response) => {
             if (!response) {
                this.$message({
                showClose: true,
                message: "获取博客详情失败",
                type: "error",
                });
            } else {
                this.blog = response.data.response;
            }
        })
        },
         setup(editor) {
            console.log(editor);
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
        z-index: 1;
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

    .main .title {
        margin-top: 50px;
        margin-bottom: 50px;
        padding: 20px;
        max-width: 714px;
        background-color: #f3e0e0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    }

    .main .title img {
        float: left;
        max-width: 340px;
        max-height: 169px;
        margin-right: 20px;
    }
    .main .title span {
        font-size: 20px;
        font-weight: bold;
        color: #505050;
    }

    .main .content {
        margin-bottom: 50px;
        max-width: 714px;
        padding: 20px;
        background-color: #f3e0e0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    }

    .main .supply-info {
        max-width: 714px;
        margin-bottom: 20px;
        padding: 20px;
        background-color: #f3e0e0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    }

    .main .supply-info .info {
        display: block;
        margin-bottom: 10px;
    }
    
    .main .supply-info .tag-area {
        display: block;
        float: left;
    }

    .main .supply-info .tags button {
        margin-right: 10px;
        width:60px;
        height: 24px;
        color: white;
        font-style: oblique;
        border: none;
        background-color: #ff5733;
    }

    .main .number span {
        background-color: #ccc7c7;
        margin-right: 15px;
        padding: 0 4px;
        color: #505050;
    }

    .main .comment-list {
        margin-top: 20px;
    }

    .main .comment-list li {
        position: relative;
        margin-bottom: 20px;
        max-width: 754px;
        list-style: none;
    }

    .main .comment-list li .gravatar {
        position: absolute;
        display: inline-block;
        top:50%;
        margin-top:-40px;
        max-width: 78px;
        height: 78px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    }

    .main .comment-list li .message {
        float: right;
        width: 715px;
        background-color: #f3e0e0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    }

    .main .comment-list .message .userinfo {
        margin: 0 0 0 60px;
        height: 44px;
        line-height: 44px;
    }

    .main .comment-list .message .reply {
        margin: 0 0 0 60px;
        height: 70px;
    }

    .main .comment-list .message .otherinfo {
        margin-left: 60px;
        height: 40px;
        line-height: 40px;
    }

    .comment .message .userinfo span {
        margin-right: 10px;
        font-size: 14px;
    }

    .comment .message .userinfo .name {
        margin-right: 20px;
        font-size: 14px;
        font-weight: 900;
        color: #505050;
    }

    .comment .message .userinfo .addr {
        float: right;
    }

    .comment .message .userinfo .addr i {
        margin: 0 10px;
    }

    .comment .message .reply {
        padding-right: 20px;
    }

    .comment .message .reply span {
        font-size: 14px;
        color: #505050;
    }
    
    .comment .message .otherinfo span {
        font-size: 14px;
        color: #505050;
    }

    .comment .message .otherinfo .date {
        font-size: 13px;
        margin-right: 200px;
    }

    .comment .message .otherinfo .reply-btn i {
        margin-right: 10px;
    }

    .comment .message .otherinfo .reply-btn {
        margin-right: 160px;
    }

    .comment .message .otherinfo .like-btn i {
        margin-right: 10px;
    }
    /* .message .userinfo .floor {
        float: right;
    }

    .message .userinfo .addr {
        float: right;
    } */

    .main .comment-editor {
        max-width: 754px;
    }

    .main .btn {
        float: right;
        margin: 30px 80px 50px 0;
        width: 101px;
        height: 38px;
        border: none;
        background-color: #ff5733;
        color: white;
        font-size: 16px;
    }

    .main .return-top i {
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