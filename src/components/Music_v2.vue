<template>
	<div class="row">
		<div class="main_left col-sm-2 col-xs-12">
			<ul class="nav nav-pills nav-stacked" id="animate-nav">
				<li role="presentation" :class="{active:'aaa'==activeStart}">
          <router-link to="/music_v2/aaa">流行音乐</router-link>
        </li>
				<li role="presentation" :class="{active:'bbb'==activeStart}">
          <router-link to="/music_v2/bbb">动感音乐</router-link>
        </li>
				<li role="presentation" :class="{active:'ccc'==activeStart}">
          <router-link to="/music_v2/ccc">粤语音乐</router-link>
        </li>
				<li role="presentation" :class="{active:'ddd'==activeStart}">
          <router-link to="/music_v2/ddd">欧美音乐</router-link>
        </li>
			</ul>
		</div>

		<div class="main_right col-sm-10 col-xs-12">
			<!-- 主体右侧内容 -->
			<div class="row">
				<div class="col-sm-6 col-md-3">
					<div class="thumbnail">
						<img src="https://cn.vuejs.org/images/logo.png" alt="描述的内容" :width="'180px'">
						<div class="caption">
							<h4><a href="#">飞虎队大营救</a></h4>
							<p>上映年份: 2017</p>
							<p>类型: 动作</p>
							<p><a href="#" class="btn btn-primary btn-sm" role="button">选座购票</a></p>
						</div>
					</div>
				</div>

				<div class="col-sm-6 col-md-3">
					<div class="thumbnail">
						<img src="https://cn.vuejs.org/images/logo.png" alt="描述的内容" :width="'180px'">
						<div class="caption">
							<h4><a href="#">飞虎队大营救</a></h4>
							<p>上映年份: 2017</p>
							<p>类型: 动作</p>
							<p><a href="#" class="btn btn-primary btn-sm" role="button">选座购票</a></p>
						</div>
					</div>
				</div>

				<div class="col-sm-6 col-md-3">
					<div class="thumbnail">
						<img src="https://cn.vuejs.org/images/logo.png" alt="描述的内容" :width="'180px'">
						<div class="caption">
							<h4><a href="#">飞虎队大营救</a></h4>
							<p>上映年份: 2017</p>
							<p>类型: 动作</p>
							<p><a href="#" class="btn btn-primary btn-sm" role="button">选座购票</a></p>
						</div>
					</div>
				</div>

				<div class="col-sm-6 col-md-3">
					<div class="thumbnail">
						<img src="https://cn.vuejs.org/images/logo.png" alt="描述的内容" :width="'180px'">
						<div class="caption">
							<h4><a href="#">飞虎队大营救</a></h4>
							<p>上映年份: 2017</p>
							<p>类型: 动作</p>
							<p><a href="#" class="btn btn-primary btn-sm" role="button">选座购票</a></p>
						</div>
					</div>
				</div>

				
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'music_v2',
    data(){
      return {
        activeStart: 'aaa'
      }
    },
    watch:{
      $route(newRoute){
        // 改变导航激活状态
        this.activeStart = newRoute.name;
      }
    }
	}
</script>

<style scoped lang="less">
// 左侧导航start
.main_nav_detail .main_left >ul {
  margin-top:20px;
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
