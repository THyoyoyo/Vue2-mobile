<template>
  <div class="layout">
    <!-- 标题 -->
    <div class="app-haeder">
      <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow />
    </div>
    <!-- 主内容输出 -->
    <div class="app-main">
      <router-view></router-view>
    </div>
    <!-- 底部Nav -->
    <div class="app-footer">
      <van-tabbar>
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.layout {
  height: 100%;
  .app-haeder {
  }
  .app-main {
    height: calc(~"100% - 46px"); // 除去顶部内容高度
    box-sizing: border-box;
    padding-bottom: 50px;
    //苹果兼容处理
    padding-bottom: calc(50px + constant(safe-area-inset-bottom));
    padding-bottom: calc(50px + env(safe-area-inset-bottom));
  }
  .app-footer {
  }
}
</style>