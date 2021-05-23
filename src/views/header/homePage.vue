<template>
    <div class="div_all">
<!--顶部导航-->
        <el-affix :offset="0">
        <div>
        <van-nav-bar title="首页" />
        </div>
        </el-affix>
<!--搜索框-->
<!--        <el-affix :offset="0">-->
          <van-search v-model="value" shape="round" placeholder="玉玲服务队成立了" input-align="left"/>
<!--        </el-affix>-->
<!--轮播图-->
    <div class="block">
        <el-carousel height="200px" arrow="never">
            <el-carousel-item v-for="item in 1" :key="item">
                <img src="../../assets/images/yuling1.jpg" height="200" width="375"/>
            </el-carousel-item>
            <el-carousel-item v-for="item in 1" :key="item">
                <img src="../../assets/images/yuling2.jpg" height="200" width="375"/>
            </el-carousel-item>
            <el-carousel-item v-for="item in 1" :key="item">
                <img src="../../assets/images/yuling3.jpg" height="200" width="375"/>
            </el-carousel-item>
            <el-carousel-item v-for="item in 1" :key="item">
                <img src="../../assets/images/yuling4.jpg" height="200" width="375"/>
            </el-carousel-item>

        </el-carousel>
     </div>
<!--新闻-->
        <div class="news" v-for="List in news" :key="List">
        <el-row class="news">
            <el-col :span="24">
                {{'|&nbsp;热点新闻'}}
            </el-col>
        </el-row>
        <el-row class="news">
            <el-col :span="24">
                <a href="https://mp.weixin.qq.com/s?__biz=MzIwNjgxNTIxOQ==&mid=2247486411&idx=1&sn=7a70ec312239da84b757494a2e6885ed&chksm=971aa157a06d2841a76251545a7f324fad420ed65cf6b68a1f187bd99cf4f7e5ea787955772b&mpshare=1&scene=23&srcid=0315gprQsRpRxn3931B5PGKw&sharer_sharetime=1616596581708&sharer_shareid=c279b79a8b9a9fdde7ea73896cbd8762#rd">
                   {{List.news1}}<br>
                      <div class="time">
                         {{'玉玲服务平台&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'}}
                          {{List.time1}}
                      </div>
                </a>
                <hr />
            </el-col>
        </el-row>
            <el-row class="news">
                <el-col :span="24">
                    <a href="https://mp.weixin.qq.com/s?__biz=MzIwNjgxNTIxOQ==&mid=2247486452&idx=1&sn=c5ea34672dbbd36d91a5ca1f3643cce0&chksm=971aa168a06d287e4c4e3592e988ae5efc0e03cf1305e7095849bdf6d881985f7f47be750d60&mpshare=1&scene=23&srcid=0410GZGXq88aIVWqIpCHGuWu&sharer_sharetime=1618047234379&sharer_shareid=0ef7818cdb3b0813f6c8b02cd0300d43#rd">
                       {{List.news2}}<br>
                           <div class="time">
                               {{'玉玲服务平台&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'}}
                               {{List.time2}}
                            </div>
                      </a>
                      <hr />
                 </el-col>
             </el-row>
            <el-row class="news">
                <el-col :span="24">
                    <a href="https://mp.weixin.qq.com/s?__biz=MzIwNzAwOTI0OQ==&mid=2650161919&idx=5&sn=e6efbd8fad56f982f65c776565e04f8b&chksm=8f1a0671b86d8f67bfc860825288bb889f05f1476bb2690d5f936f2750721af65ec405250997&mpshare=1&scene=23&srcid=0313p2oEWe7HsEURdCvK2ovx&sharer_sharetime=1616596597525&sharer_shareid=c279b79a8b9a9fdde7ea73896cbd8762#rd">
                       {{List.news3}}<br>
                          <div class="time">
                              {{'玉玲服务平台&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'}}
                              {{List.time3}}
                          </div>
                    </a>
                    <hr />
                </el-col>
            </el-row>
            <el-row class="news">
                <el-col :span="24">
                    <a href="http://www.pxc.jx.cn/info/1031/8461.htm">
                        {{List.news4}}<br>
                        <div class="time">
                            {{'玉玲服务平台&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'}}
                            {{List.time4}}
                        </div>
                    </a>
                    <hr />
                </el-col>
            </el-row>
            <el-row class="news">
                <el-col :span="24">
                    <a href="https://mp.weixin.qq.com/s?__biz=MzIwNjgxNTIxOQ==&mid=2247486435&idx=1&sn=1ce683b6c7131feeb73bcc47417f6c17&chksm=971aa17fa06d2869ee601fc3280094055e2011921483b280ec03313451f6662b794e5d33a9dd&mpshare=1&scene=23&srcid=0411hyOhQVY9CpBLxjDQylMt&sharer_sharetime=1618149802194&sharer_shareid=0ef7818cdb3b0813f6c8b02cd0300d43#rd">
                        {{List.news5}}<br>
                        <div class="time">
                            {{'玉玲服务平台&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'}}
                            {{List.time5}}
                        </div>
                    </a>
                    <hr />
                </el-col>
            </el-row>
            <el-row class="news">
                <el-col :span="24">
                    <a href="https://mp.weixin.qq.com/s?__biz=MzIwNjgxNTIxOQ==&mid=2247486486&idx=1&sn=475a1d3123ede08859432102bc0de6b7&chksm=971aa68aa06d2f9c5e4c16cb57438e83784364e323bc53d60812e70c445ea17bb8c0689b6743&mpshare=1&scene=23&srcid=04118b8VonuLgCBE0gJYkLXC&sharer_sharetime=1618149818292&sharer_shareid=0ef7818cdb3b0813f6c8b02cd0300d43#rd">
                        {{List.news6}}<br>
                        <div class="time">
                            {{'玉玲服务平台&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'}}
                            {{List.time6}}
                        </div>
                    </a>
                    <hr />
                </el-col>
            </el-row>
            <br><br><br><br><br><br><br><br>
         </div>
    </div>
</template>

<script>
    import { NavBar } from 'vant';
    import { Tabbar, TabbarItem } from 'vant';
    import { Search } from 'vant';
    export default {
        name:'home',
        components:{
            [NavBar.name]:NavBar,
            [Tabbar.name]:Tabbar,
            [TabbarItem.name]:TabbarItem,
            [Search.name]:Search,
        },
        data(){
            return{
                active: 0,
                value: '',
                images:[
                ],
                news:[
                    {
                        news1:'“萍乡学院信息与计算机工程学院“玉玲志愿服务团”正式成立了',
                        news2:'打扫安源红色文化育人展览馆',
                        news3:'萍乡新闻',
                        news4:'萍乡学院“玉玲服务团”',
                        news5:'在这特别的三月，记录我们的义务维修',
                        news6:'“常态化”，中国的疫情防控迎来一个新阶段！',
                        time1:'2021-3-11',
                        time2:'2021-3-12',
                        time3:'2021-3-12',
                        time4:'2021-3-13',
                        time5:'2021-3-21',
                        time6:'2021-3-24',
                    }
                ]
            }
        }
    }
   </script>

<style scoped>
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .div_all{
        width: 100%;
        height: 100%;
    }
    .text {
        font-size: 20px;
    }
    .time{
        font-size: 8px;
        color: #565656;
    }
    .news{
        margin: 8px 5px;
        font-size: 18px;
    }
</style>
