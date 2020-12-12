<template>
<div>
    <div class="container clearfix">
        <div class="main">
            <div class="header clearfix">
                <div class="logo">
                    <img src="static/image/logo.png">
                </div>
                <ul class="category">
                    <li><a href="#"><span>博客</span></a></li>
                    <li><a href="#"><span>记事薄</span></a></li>
                    <li><a href="#"><span>八嘎哥的</span></a></li>
                    <li><a href="#"><span>杂</span></a></li>
                </ul>
            </div>
            <div class="title clearfix">
                <img src="static/image/cover.png">
                <span>
                2020年的最后一天，我完成了这件事,欲知详情，请听下回讲解
                </span>
            </div>
            <div class="content">1、npm run dev 还是 npm run serve
                最近运行一些前端项目的时候，发现不同的项目有使用npm run dev，有的使用npm run serve，所以就很好奇，这是怎么回事，输入命令错误后，会报如下错，所以就想探究一下原因。下面是一些相关报错如下：

                npm run dev
                npm ERR! missing script: dev

                npm ERR! A complete log of this run can be found in:
                npm ERR!     E:\nodejs\node_cache\_logs\2018-12-12T15_06_08_674Z-debug.log
                2、npm run dev / build / serve 执行来源
                其实 npm run dev 或者是 npm run serve 等 npm run xxx 并不是一定要这么写。
                npm run XXX是执行Vue项目配置在 package.json 中的脚本，比如：

                "scripts": {
                　　"serve": "vue-cli-service serve",
                　　"build": "vue-cli-service build",
                　　"lint": "vue-cli-service lint"
                },
                npm run xxx 中的 xxx 可以理解为键值对中的 key，实际上 run 的是在 package.json 里面 scripts 配置的 value；

                比如，npm run serve 实际运行的是 vue-cli-service serve；

                而放在 3.0 以前运行的则是 node build/dev-server.js 文件；

                这时候我们再来看上边的问题是不是豁然了呢， scripts 中并没有配置 dev ，所以控制台报了 [ missing script: dev ] 的错误 ；

                3、小结
                npm run xxx，并不是你想运行就运行的，只有在 package.json脚本中对scripts 配置了，才可以进行 run 的，所以不是所有的项目都能 npm run dev/serve。

                要了解这些命令做了什么，就要去scripts中看具体执行的是什么代码。

                这里就像是一些命令的快捷方式，免去每次都要输入很长的的命令（比如 serve 那行）

                一般项目都会有 build, dev, serve 等，所以起名，最起码要从名字上基本能看出来是干什么的。</div>
            <div class="supply-info">
                <span class="info">本文于   2020/10/14 下午  发布在  博客  分类下，当前已被浏览  21 次</span>
                <span class="tag-area">相关标签：</span>
                <div class="tags"><button type="button">工作</button><button type="button">生活</button></div>
            </div>
            <div class="number"><span>21条评论</span><span><i></i>个人觉得很赞</span></div>
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
                                    <span class="reply-btn"><i></i>回复</span>
                                    <span class="like-btn"><i></i>赞(14)</span>
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
                                    <span class="reply-btn"><i></i>回复</span>
                                    <span class="like-btn"><i></i>赞(14)</span>
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
                                    <span class="reply-btn"><i></i>回复</span>
                                    <span class="like-btn"><i></i>赞(14)</span>
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
                                    <span class="reply-btn"><i></i>回复</span>
                                    <span class="like-btn"><i></i>赞(14)</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <aside class="sidebar">
            <input type="text" placeholder="搜索" />
            <div class="tags">
                <ul>
                    <li><a href="#"><i class="iconfont icon-gongzuo" ></i><span>工作(21)</span></a></li>
                    <li><a href="#"><i class="iconfont icon-iconxuexinor" ></i><span>学习(34)</span></a></li>
                    <li><a href="#"><i class="iconfont icon-wenhuayule" ></i><span>娱乐(12)</span></a></li>
                    <li><a href="#"><i class="iconfont icon-yule" ></i><span>心情(4)</span></a></li>
                    <li><a href="#"><i class="iconfont icon-picture" ></i><span>随拍(13)</span></a></li>
                    <li><a href="#"><i class="iconfont icon-other" ></i><span>其他(34)</span></a></li>
                </ul>
            </div>
            <div class="hot-header"><i class="iconfont icon-hotfill"></i><span>热门阅读</span></div>
            <div class="artcle-list">
                <ul>
                    <li><div class="t1 title"><i>1</i></div><a href="#"><span>今天的我很开心</span></a></li>
                    <li><div class="t2 title"><i>2</i></div><a href="#"><span>2020年，我完成...</span></a></li>
                    <li><div class="t3 title"><i>3</i></div><a href="#"><span>2020年的最后一场雪</span></a></li>
                    <li><div class="t4 title"><i>4</i></div><a href="#"><span>2020年的倒数第二场雪</span></a></li>
                    <li><div class="t5 title"><i>5</i></div><a href="#"><span>2020年的最后一场雪</span></a></li>
                </ul>
            </div>
        </aside>
    </div>
     <div class="footer">
        © 2020 八嘎哥.
    </div>
</div>
   
</template>

<style scoped>
    a {
        text-decoration: none;
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
        height: 3000px;
        width: 1160px;
        margin: auto;
    }

    .container .main {
        float: left;
        width: 835px;
        border-right: 2px dashed #a6a6a6;
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
    
    .main .title {
        margin-top: 50px;
        margin-bottom: 50px;
        padding: 20px;
        max-width: 714px;
        background-color: #f3e0e0;
    }

    .main .title img {
        float: left;
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
    }

    .main .supply-info {
        max-width: 714px;
        margin-bottom: 20px;
        padding: 20px;
        background-color: #f3e0e0;
    }

    .main .supply-info .info {
        display: block;
        margin-bottom: 10px;
    }
    
    .main .supply-info .tag-area {
        display: block;
        float: left;
    }

    /* .main .supply-info .tags button {
        width: ;
    } */

    .main .number span {
        background-color: #ccc6c6;
        margin-right: 15px;
        padding: 0 4px;
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
    }

    .main .comment-list li .message {
        float: right;
        width: 715px;
        background-color: #f3e0e0;
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
        margin-right: 240px;
    }

    .comment .message .otherinfo .reply-btn {
        margin-right: 160px;
    }
    /* .message .userinfo .floor {
        float: right;
    }

    .message .userinfo .addr {
        float: right;
    } */

    






    .container .sidebar {
        float: left;
        margin-top: 114px;
        width: calc(100% - 839px);
    }

    .sidebar input {
        display: block;
        /* margin-left:auto;
        margin-right:auto; */
        margin-bottom: 60px;
        margin-left: 39px;
        height: 25px;
        width: 100px;
    }

    .sidebar input:focus {
        width: 200px;
        transition: width 1s;
    }

    .sidebar .tags {
        width: 75%;
        margin-left:auto;
        margin-right:auto;
    }

    .sidebar .tags li {
        display: inline-block;
        list-style: none;
        margin: 10px 30px 10px 0;
        background-color: #a6a6a6;
    }

    .sidebar .tags li i {
        color: #505050;
    }

    .sidebar .tags li span {
        padding-left: 5px;
        color: #505050;
    }

    .sidebar .tags li:hover {
        background-color: tomato;
    }

    .sidebar .tags li:hover span {
        color: white;
    }

    .sidebar .tags li:hover i {
        color: white;
    }

    .sidebar .hot-header {
        margin-top: 50px;
        margin-bottom: 30px;
        width: 35%;
        margin-left:auto;
        margin-right:auto;
        background-color: skyblue;
    }

    .sidebar .hot-header span {
        padding-left: 15px;
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
    }

    .sidebar .artcle-list li .t2 {
        background-color: #fb856d;
    }

    .sidebar .artcle-list li .t3 {
        background-color: #f7b3a6;
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
        width: 100%;
        background-color: #FAEBD7;
    }
</style>