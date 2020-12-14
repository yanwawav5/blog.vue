<template>
<div>
    <div class="container clearfix">
        <div class="header clearfix">
            <div class="logo">
                <img src="static/image/logo-.png">
            </div>
            <ul class="category">
                <li><a href="#"><span>博客</span></a></li>
                <li><a href="#"><span>记事薄</span></a></li>
                <li><a href="#"><span>八嘎哥的</span></a></li>
                <li><a href="#"><span>杂</span></a></li>
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
                            <!-- <span class="publish"></span> -->
                        </div>
                        <div class="tag"><button type="button" style="width:60px;">工作</button> <button type="button" style="width:60px;">探索</button> <span>></span></div> 
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
                            <!-- <span class="publish"></span> -->
                        </div>
                        <div class="tag"><button type="button" style="width:60px;">工作</button> <button type="button" style="width:60px;">探索</button> <span>></span></div> 
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
                            <!-- <span class="publish"></span> -->
                        </div>
                        <div class="tag"><button type="button" style="width:60px;">工作</button> <button type="button" style="width:60px;">探索</button> <span>></span></div> 
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
                            <!-- <span class="publish"></span> -->
                        </div>
                        <div class="tag"><button type="button" style="width:60px;">工作</button> <button type="button" style="width:60px;">探索</button> <span>></span></div> 
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
                            <!-- <span class="publish"></span> -->
                        </div>
                        <div class="tag"><button type="button" style="width:60px;">工作</button> <button type="button" style="width:60px;">探索</button> <span>></span></div> 
                    </li>
                </ul>
            </div>
            <!-- <div class="pagination">分页</div>
            <div class="to-top"><button type="button">返回顶部<i></i></button></div> -->
        </div>
        <aside class="sidebar">
            <!-- <input type="text" placeholder="搜索" /> -->
             <el-input
                class="search"
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="input2">
            </el-input>
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
            <div class="hot-header">
                 <svg class="icon closeImg" aria-hidden="true">
                    <use xlink:href="#icon-hotfill"></use>
                </svg>
                <!-- <i class="iconfont icon-hotfill"></i> -->
                <span>热门阅读</span>
            </div>
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
        border-right: 2px dashed #a6a6a6;
    }

    .header {
        position: fixed;
        background-color: #f2f0f4;
        width: 100%;
    }

    .header .logo {
        float: left;
        max-width: 100px;
        height: auto;
    }

    .header .logo img {
        margin-top: 6px;
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
        padding-right: 40px;
    }

    .blogs .simple-content .text {
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

    .blogs .tag span {
        float: right;
        font-size: 25px;
        font-weight: bold;
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
        width: 100%;
        background-color: #FAEBD7;
    }
</style>