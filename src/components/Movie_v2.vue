<template>
	<div class="row">
		<div class="main_left col-sm-2 col-xs-12">
			<ul class="nav nav-pills nav-stacked" id="animate-nav">
				<li role="presentation" :class="{active:'in_theaters'==activeStart}">
					<router-link to="/movie_v2/in_theaters">正在热映</router-link>
				</li>
				<li role="presentation" :class="{active:'coming_soon'==activeStart}">
					<router-link to="/movie_v2/coming_soon">即将上映</router-link>
				</li>
				<li role="presentation" :class="{active:'top250'==activeStart}">
					<router-link to="/movie_v2/top250">Top250</router-link>
				</li>
				<li role="presentation" :class="{active:'us_box'==activeStart}">
					<a href="https://github.com/qqyiyi" target="_blank">项目源码</a>
				</li>
			</ul>
		</div>

		<!-- 右侧内容区 -->
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'movie_v2',
		data(){
			return {
        activeStart:'in_theaters'
			}
		},
		watch:{
      // 监视路由的变化
			$route:function(newRoute){
        // 改变导航激活状态
        this.activeStart = newRoute.name;
			}
		}

	}
</script>

<style scoped lang="less">
// 左侧导航start
.main_nav_detail .main_left >ul {
  margin:20px 0 10px;
}
.main_left {
  height:580px;
  background:#deefef;
}
.main_right {
  height:580px;
  background:#ead7d7;
}
.nav-stacked > li > a:hover {
  background:#ffb164;
}
// 左侧导航end
</style>
