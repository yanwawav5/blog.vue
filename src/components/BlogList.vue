<template>
<div>
    <div class="container clearfix">
        <div class="main">
            <div class="header clearfix">
                <div class="logo">
                    <img src="static/image/logo.png">
                </div>
                <ul class="category">
                    <li>博客</li>
                    <li>记事薄</li>
                    <li>八嘎哥的</li>
                    <li>杂</li>
                </ul>
            </div>
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
            <input type="text" placeholder="搜索" />
            <div class="tags">
                <ul>
                    <li>工作(21)</li>
                    <li>学习(34)</li>
                    <li>娱乐(12)</li>
                    <li>心情(4)</li>
                    <li>随拍(132)</li>
                    <li>其他(34)</li>
                </ul>
            </div>
            <div class="hot-header"><span>热门阅读</span></div>
            <div class="artcle-list">
                <ul>
                    <li>今天的我很开心</li>
                    <li>2020年的最后一天，我完成...</li>
                    <li>2020年的最后一场雪</li>
                    <li>2020年的倒数第二场雪</li>
                    <li>2020年的最后一场雪</li>
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
        float: left;
        margin-top: 114px;
        width: calc(100% - 839px);
    }

    .sidebar input {
        display: block;
        margin-left:auto;
        margin-right:auto;
        margin-bottom: 60px;
        height: 25px;
        width: 200px;
    }

    .sidebar .tags {
        width: 75%;
        margin-left:auto;
        margin-right:auto;
    }

    .sidebar .tags li {
        display: inline-block;
        list-style: none;
        margin: 10px 50px 10px 0;
    }

    .sidebar .hot-header {
        margin-top: 50px;
        margin-bottom: 30px;
        width: 75%;
        margin-left:auto;
        margin-right:auto;
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

    .footer {
        text-align: center;
        height: 50px;
        line-height: 50px;
        width: 100%;
        background-color: #FAEBD7;
    }
</style>