<template lang="html">
    <div>
        <div class="header">
        <div class="t-header">
            <div class="l-icon">
                <img src="../public/icons/xian.png"  @click="toggleSidebar" >
            </div>
            <div class="m-content">
                <router-link to="/">
                  <span>我的</span>
                </router-link> 
                <router-link to="/club">
                  <span>音乐馆</span>
                </router-link>
                <router-link to="/finding">
                  <span>发现</span>
                </router-link>
            </div>
            <div class="r-icon">
                <img src="../public/icons/shiqu.png">
            </div>
            <div>
                <transition name="fold">
                    <div class="sidebar" v-show="sidebarshow">
                        <div class="sidebar-header">
                            <div class="l-sidebar-header">
                                <img src="../public/icons/vip.png">
                                <p class="intr">升级为VIP</p>
                                <small>畅享音乐特权</small>
                            </div>
                            <div class="m-sidebar-header">
                                <img src="../public/icons/zhuti.png">
                                <p class="intr">个性化中心</p>
                                <small>点击查看中心</small>
                            </div>
                            <div class="r-sidebar-header">
                                <img src="../public/icons/message.png">
                                <p class="intr">消息中心</p>
                            </div>
                        </div>
                        <div class="sidebar-middle">
                            <p>仅Wi-Fi联网</p>
                            <p>定时关闭</p>
                            <p>免流量服务</p>
                            <p>传歌到手机</p>
                            <p>QPlay与车载音乐</p>
                            <p>清理占用空间</p>
                            <p>帮助与反馈</p>
                            <p>关于QQ音乐</p>                             
                        </div>
                        <div class="sidebar-bottom">
                            <div class="l-sidebar-bottom">
                                <img src="../public/icons/shezhi.png">
                                <span>设置</span>
                            </div>
                            <div class="r-sidebar-bottom">
                                <img src="../public/icons/tuichu.png">
                                <span>退出QQ登录</span>
                            </div>
                        </div>
                    </div>
                </transition>
                <transition name="fold">
                    <div class="mask" v-show="sidebarshow" @click="toggleSidebar"></div>
                </transition>
            </div>
        </div>
        <div class="b-header">
            <!--<div class="mint-header-title">-->
                <div class="search-input">
                    <router-link to="/search">
                        <input type="text" placeholder="搜索"  >
                    </router-link>
                </div>
            <!--</div>-->
      </div>
  </div>
  <router-view></router-view>
  <v-footer></v-footer>
    </div>
</template>

<script>
import footer from '@/components/footer.vue'
export default {
    data () {
        return {
            sidebarshow: false,
            username: '哦耶。'
        }
    },
    components: {
        "v-footer": footer
    },
    methods: {
      toggleSidebar () {
        this.sidebarshow = ! this.sidebarshow
      }
    }
    // computed: {
    //     isShowHeader(){
    //     return this.$store.state.isShowHeader 
    //     }
    // }
}
</script>

<style lang="scss">
@import '../assets/style/index.scss';
</style>