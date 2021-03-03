<template>
  <div class="ktbox">
    <v-top></v-top>
    <div class="mainbox">
      <v-left></v-left>
      <div class="rightbox">
        <div class="righttitle">课题详细介绍</div>
        <div class="rightline"></div>
        <!-- 要改的展示的模块就是这里 -->
        <div class="rightmainbox">
          <div class="searchkthbox">
            <el-button @click="search()" class="buttonkth">查询</el-button>
            <el-input class="inputkth" v-model="input" placeholder="请输入查询课题号"></el-input>
          </div>
          <div class="kt_title">
            <div class="kt_title_text">课题介绍</div>
          </div>
          <div  class="ktrowbox">
            <div class="ktrow_left">课题号</div>
            <div class="ktrow_right">{{kt.kth}}</div>
            <div class="ktrow_left">发布时间</div>
            <div class="ktrow_right">{{kt.fbsj}}</div>
          </div>
          <div  class="ktrowbox">
            <div class="ktrow_left">课题名称</div>
            <div class="ktrow_right">{{kt.ktm}}</div>
            <div class="ktrow_left"  @click="gototeacher">指导老师</div>
            <div class="ktrow_right_teacher" @click="gototeacher">{{kt.gh}}</div>
          </div>
          <div  class="ktrowbox">
            <div class="ktrow_left">课题类别</div>
            <div class="ktrow_right">{{kt.ktlb}}</div>
            <div class="ktrow_left">课题性质</div>
            <div class="ktrow_right">{{kt.ktxz}}</div>
          </div>
          <div  class="ktrowbox">
            <div class="ktrow_left">课题来源</div>
            <div class="ktrow_right">{{kt.ktly}}</div>
            <div class="ktrow_left">是否未新课题</div>
            <div class="ktrow_right">{{kt.sfxkt}}</div>
          </div>
          <div  class="ktrowbox">
            <div class="ktrow_left">课题介绍</div>
            <div class="ktrow_right2">{{kt.ktjs}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vTop from '../components/topshow';
import vLeft from '../components/leftshow_s'
const axios=require('axios');
export default {
  name: "ktdetail",
  components:{
    vTop,
    vLeft,
  },
  data(){
    return{
      kt:{},
      input:""
    }
  },
  activated:function(){
    if(this.$route.query.kth)
      this.getkt(this.$route.query.kth);
  },
  methods:{
    gototeacher: function () {
        let routeUrl = this.$router.resolve({
          path: "/teacher_detail",
          query: {name:this.kt.gh}
        });
        window.open(routeUrl.href, '_blank');
    },
    search(){
      this.getkt(this.input)
    },
    getkt(e){
      axios.post('http://localhost:8010/gettitlebykth?kth='+e)
      // 这里到时候缓存router跳转kth的值
      .then((response)=>{
        console.log(response)
        this.kt=response.data
        if(response.data.sfxkt==1)
          this.kt.sfxkt="否"
        else
          this.kt.sfxkt="是"
        axios.post('http://localhost:8010/getteacherbygh?gh='+response.data.gh)
        // 这里到时候缓存router跳转kth的值
        .then((res)=>{
          // console.log(response)
          this.kt.gh=res.data.xm
          this.input=""
        }).catch(function (error) { // 请求失败处理
          console.log("---查询出错---！"+error);
        })
      }).catch(function (error) { // 请求失败处理
        console.log("---查询出错---！"+error);
      })
    }
  }
}
</script>

<style scoped>
.ktbox{
  width: 1440px;
  height: 768px;
  font-family: SimHei;
  display: flex;
  flex-direction: column;
}
.mainbox{
  width: 1440px;
  height: 718px;
  display: flex;
  flex-direction: row;
}
.rightbox{
  width: 1236px;
  height: 718px;
  display: flex;
  flex-direction: column;
}
.righttitle{
  width: 229px;
  height: 28px;
  font-size: 30px;
  font-family: SimHei;
  font-weight: 400;
  color:#2C7DC3;
  line-height: 1px;
  margin-top: 35px;
  margin-left: 50px;
}
.rightline{
  width: 1186px;
  height: 1px;
  background: #C6CACE;
  margin-top: 5px;
  margin-left: 50px;
}
/* /////////////////////////// */
.rightmainbox{
  width: 1225px;
  height: 688px;
  overflow: auto;
}
.searchkthbox{
  display: flex;
  flex-direction: row;
  margin-left: 50px;
  margin-top: 20px;
  height: 60px;
}
.inputkth>>>.el-input__inner{
  width: 500px;
  font-size: 18px;
  margin-left: 20px;
  height: 60px;
}
.kt_title{
  width: 1124px;
  height: 40px;
  margin-top: 20px;
  margin-left: 50px;
  background-color:#2C7DC3;
}
.kt_title_text{
  width: 120px;
  height: 20px;
  color: white;
  font-size: 20px;
  padding: 10px;
  font-weight: 700;
}
.ktrowbox{
  display: flex;
  flex-direction: row;
  width: 1124px;
  min-height: 40px;
  margin-left: 50px;
  font-size: 18px;
  border-bottom: #C6CACE solid 1px;
}
.ktrow_left{
  width: 200px;
  min-height: 40px;
  font-weight: 700;
  display: table-cell;
  text-align: center;
  line-height: 40px;
  border-left: #C6CACE solid 1px;
}
.ktrow_right_teacher{
  width: 362px;
  min-height: 40px;
  text-align:left;
  vertical-align: middle;
  line-height: 40px;
  border-left: #C6CACE solid 1px;
  border-right:#C6CACE solid 1px;
  display: flex;
  flex-direction: column;
  color: #2C7DC3;
}
.ktrow_right{
  width: 362px;
  min-height: 40px;
  text-align:left;
  vertical-align: middle;
  line-height: 40px;
  border-left: #C6CACE solid 1px;
  border-right:#C6CACE solid 1px;
  display: flex;
  flex-direction: column;
}
.ktrow_right2{
  width: 924px;
  min-height: 40px;
  text-align:left;
  vertical-align: middle;
  border-left: #C6CACE solid 1px;
  border-right:#C6CACE solid 1px;
  display: flex;
  flex-direction: column;
  line-height: 40px;
}
</style>