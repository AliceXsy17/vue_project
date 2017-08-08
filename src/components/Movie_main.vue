<template>
	<div class="main_right col-sm-10 col-xs-12">
    <h3  v-show="flag">{{data.title}}</h3>
		<!-- 主体右侧内容 -->
		<div class="row">
			<div class="col-sm-6 col-md-3" v-for="(item, index) in data.subjects">
				<div class="thumbnail">
					<div id="imgDiv">
						<img :src="item.images.medium" alt="描述的内容">
					</div>
					<div class="caption">
						<h5><a href="#">{{item.title}}</a></h5>
						<p>上映年份: {{item.year}}</p>
						<p>类型: <span v-for="(val,index) in item.genres">{{val}} {{item.genres.length-1!=index?'、':''}}</span></p>
						<p><a href="#" class="btn btn-primary btn-sm" role="button">选座购票</a></p>
					</div>
				</div>
			</div>
		</div>

    <!-- 页码开始 -->
    <div class="pageSize"  v-show="flag">
      <nav aria-label="Page navigation">
        <ul class="pagination">
          <li class="disabled" v-if="page<=1?true:false">
            <span>
              <span aria-hidden="true">&laquo;</span>
            </span>
          </li>
          <li @click="pageto(page-1)" v-if="page>1?true:false">
            <a href="javascript:;" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li @click="pageto(page-2)" v-if="page-2>0?true:false">
            <a href="javascript:;">{{page-2}}</a>
          </li>
          <li @click="pageto(page-1)" v-if="page-1>0?true:false">
            <a href="javascript:;">{{page-1}}</a>
          </li>
          <li class="active">
            <span>{{page}}<span class="sr-only">(current)</span></span>
          </li>
          <li @click="pageto(page+1)" v-if="page+1<=totalPage?true:false">
            <a href="javascript:;">{{page+1}}</a>
          </li>
          <li @click="pageto(page+2)" v-if="page+2<=totalPage?true:false">
            <a href="javascript:;">{{page+2}}</a>
          </li>
          <li @click="pageto(page+1)" v-if="page<totalPage?true:false">
            <a href="javascript:;" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
          <li class="disabled" v-if="page>=totalPage?true:false">
            <span>
              <span aria-hidden="true">&raquo;</span>
            </span>
          </li>
        </ul>
      </nav>
    </div>
    <h3 v-show="flag">共: {{totalPage}}页 当前页码:{{page}}</h3>
    <!-- 页码结束 -->

    <!-- loading动画开始 -->
    <div class="spinner" v-if="!flag">
      <div class="spinner-container container1">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
      </div>
      <div class="spinner-container container2">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
      </div>
      <div class="spinner-container container3">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
      </div>
    </div>
    <!-- loading动画结束-->

	</div>
</template>

<script>
	export default {
		name:'Movie_main',
		data(){
			return {
        flag: false,
        data:'',
        page: 1,
				start: 0,
        count: 4,
        totalPage:0,
        p:''
			}
		},
    mounted(){
      // 往url中添加参数
      this.$router.push({query:{page:1}});
    },
		watch:{
      // 监视路由的变化
      $route:function(newRouter){
        if(newRouter.query.page === undefined){
          // 往url中添加参数
          this.$router.push({query:{page:1}});
        }
        // 获取url中最新的参数，更新到系统模型中
        this.page = newRouter.query.page;
        // console.log('搜索的参数:'+newRouter.query.q)
        if(newRouter.query.q != undefined){
          this.q = newRouter.query.q;
        }
        // 调用分页方法
        this.pageFun();

      },
      // 监视这个总记录数的变化
      'totalPage':function(newValue, oldValue){
        // console.log('监视的数据:'+newValue, oldValue);
        // 跨域请求回调时，将变动的新数据赋值给totalPage
        this.totalPage = newValue;
      },
      // 监视页码
      'page':function(newValue, oldValue){
        // console.log('监视的数据:'+newValue, oldValue);
        // console.log('监视的页码:'+this.page);
        // 处理首次进入页面时，页码为0的问题
        if(newValue==0){
          this.page = oldValue;
        }else{
          this.page = newValue;
        }
      }
    },
		methods:{
			// 正在上映、即将上映、Top250的方法
			getData(targetAddress){
				let self = this;
				// 获取数据
				this.$YiJsonp(
					'https://api.douban.com/v2/movie/'+targetAddress,
					{
						start: this.start,
						count: this.count,
            q:this.q
					},
          function(response){
            //获取到的全部数据
            self.data = response;
            //获取的到总条数
            self.total = response.total;
            // 总页数 = 总记录数 / 当前显示的记录数
            self.totalPage = Math.ceil(self.total / self.count);
            self.flag = true;
          }
				)
			},
      // 页码的跳转方法
      pageto(pageSize){
        // console.log(this.$route.query.page);
        // 限制用户单击分页按钮传来的页码
        if(pageSize < 1){
          pageSize = 1;
        }else if(pageSize > this.totalPage){
          pageSize = this.totalPage;
        }
        // 往url中更改当前最新的页码
        this.$router.push({query:{page:pageSize}});
      },
      // 分页算法
      pageFun(){
        // 限制url中的页码有效范围
        if(this.page < 1){
          this.page = 1;
        }else if(this.page > this.totalPage){
          this.page = this.totalPage;
        }
        this.page = parseInt(this.page);
        // 起始页
        this.start = (this.page - 1) * this.count;
        // 重新请求新的数据
        this.getData(this.$route.name);
      }

		}

    
	}
</script>

<style scoped lang="less">
  // 图片的样式
	.thumbnail #imgDiv {
		height:140px;
		text-align:center;
	}
	.thumbnail #imgDiv>img {
		width:100px;
	}
  // 页码的样式
  .pageSize {
    text-align:center;
  }
  .pagination>li>a, .pagination>li>span {
    margin-right:15px;
  }

  // loading加载动画样式start
  .spinner {
    margin: 100px auto;
    width: 50px;
    height: 50px;
    position: relative;
  }
  
  .container1 > div, .container2 > div, .container3 > div {
    width: 10px;
    height: 10px;
    background-color: #0080ff;
  
    border-radius: 100%;
    position: absolute;
    -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
    animation: bouncedelay 1.2s infinite ease-in-out;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  
  .spinner .spinner-container {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  .container2 {
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
  }
  
  .container3 {
    -webkit-transform: rotateZ(90deg);
    transform: rotateZ(90deg);
  }
  
  .circle1 { top: 0; left: 0; }
  .circle2 { top: 0; right: 0; }
  .circle3 { right: 0; bottom: 0; }
  .circle4 { left: 0; bottom: 0; }
  
  .container2 .circle1 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }
  
  .container3 .circle1 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }
  
  .container1 .circle2 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }
  
  .container2 .circle2 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
  
  .container3 .circle2 {
    -webkit-animation-delay: -0.7s;
    animation-delay: -0.7s;
  }
  
  .container1 .circle3 {
    -webkit-animation-delay: -0.6s;
    animation-delay: -0.6s;
  }
  
  .container2 .circle3 {
    -webkit-animation-delay: -0.5s;
    animation-delay: -0.5s;
  }
  
  .container3 .circle3 {
    -webkit-animation-delay: -0.4s;
    animation-delay: -0.4s;
  }
  
  .container1 .circle4 {
    -webkit-animation-delay: -0.3s;
    animation-delay: -0.3s;
  }
  
  .container2 .circle4 {
    -webkit-animation-delay: -0.2s;
    animation-delay: -0.2s;
  }
  
  .container3 .circle4 {
    -webkit-animation-delay: -0.1s;
    animation-delay: -0.1s;
  }
  
  @-webkit-keyframes bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0.0) }
    40% { -webkit-transform: scale(1.0) }
  }
  
  @keyframes bouncedelay {
    0%, 80%, 100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 40% {
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
  }
  // loading加载动画样式end
</style>
