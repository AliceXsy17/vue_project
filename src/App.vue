<template>
  <div id="app">
      <!-- 导航start -->
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Brand</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li :class="{active:'/movie_v2'==activeStatus}" @click="show()">
              <router-link to="/movie_v2">电影 <span class="sr-only">(current)</span></router-link>
            </li>
            <li :class="{active:'/music_v2'==activeStatus}" @click="show()">
              <router-link to="/music_v2">音乐</router-link>
            </li>
            <li :class="{active:'/book_v2'==activeStatus}" @click="show()">
              <router-link to="/book_v2">图书</router-link>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">其它 <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">同城</a></li>
                <li><a href="#">广播</a></li>
                <li><a href="#">相册</a></li>
                <li><a href="#">日记</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">论坛</a></li>
              </ul>
            </li>
          </ul>
          <form class="navbar-form navbar-left">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search" v-model="input" @submit="search()">
            </div>
            <button type="submit" class="btn btn-default" @click="search()">Submit</button>
          </form>
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">个人中心 <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">个人资料</a></li>
                <li><a href="#">你的明星</a></li>
                <li><a href="#">设置</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">退出</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>

    <!-- 导航end -->
    <div class="container main_nav_detail">
    
      <!-- 主体部分 -->
      <router-view></router-view>
      
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      activeStatus: '/movie_v2',
      input:''
    }
  },
  mounted(){
    // 页面编译完成改变导航的标识状态
    this.activeStatus = this.$route.matched[0].path;
  },
  watch:{
    $route(newRoute){
      // 改变导航激活状态
      this.activeStatus = newRoute.matched[0].path;
    }
  },
  methods:{
    // 导航动画的方法
    show(){
      $('#animate-nav>li').addClass('animated fadeInUp');
    },
    search(){
      // console.log(this.$router.currentRoute.matched[0].name)  //父组件的name
      // 搜索的url
      this.$router.push({path: '/search', query:{page: 1, q: this.input}});
      this.input = '';
    }
  }
}
</script>

<style scoped lang="less"> 
//scoped是局部有效，不加就是全局有效。
//当 <style> 标签有 scoped 属性的时候，它的 CSS 就只能作用于当前的组件。  
// 导航条样式start
.navbar-inverse {
    background-color: #0083c1;
    border-color: #007bb7;
}
.navbar-inverse .navbar-nav>.active>a, 
.navbar-inverse .navbar-nav>.active>a:hover, 
.navbar-inverse .navbar-nav>.active>a:focus {
    color: #fff;
    background-color: #808080;
}
.navbar-inverse .navbar-nav > .active > a,
.navbar-inverse .navbar-nav > .active > a:hover,
.navbar-inverse .navbar-nav > .active > a:focus {
  color: #fff;
  background-color: #004080;
}
.navbar-inverse .navbar-nav > .open > a,
.navbar-inverse .navbar-nav > .open > a:hover,
.navbar-inverse .navbar-nav > .open > a:focus {
  color: #fff;
  background-color: #408080;
}
.navbar-inverse .navbar-nav>li>a {
    color: #c0c0c0;
    display:block;
}
.navbar-inverse .navbar-nav>li>a:hover {
    color: #ffffff;
    background:#004080;
}
// 导航条样式end  ------------------------------------

</style>

<style lang="less">
//该 <style> 标签里的样式全局有效。 
@color:#f2f9f9;
body {
  background:@color;
}
</style>
