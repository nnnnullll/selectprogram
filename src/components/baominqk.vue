<template>
  <div class="notebox">
    <v-top></v-top>
    <div class="mainbox">
      <v-left></v-left>
      <div class="rightbox">
        <div class="righttitle">报名情况</div>
        <div class="rightline"></div>
        <!-- 要改的展示的模块就是这里 -->
        <div class="rightmainbox">
          <div class="notelist_title">
            <div class="notelist_title_text">待审核公告列表</div>
          </div>
          <div class="notelist_lan">
            <div class="notelist_lan1">课题号</div>
            <div class="notelist_lan2">发布时间</div>
            <div class="notelist_lan3">课题内容</div>
            <div class="notelist_lan4">报名情况</div>
          </div>
          <div class="notelistbox">
            <div class="notelistrq">{{kt.kth}}</div>
            <div class="notelistdx">{{kt.fbsj}}</div>
            <div class="notelistnr">
              <div class="notelistnr_bt" @click="todetail">课题名：{{kt.ktm}}</div>
              <div class="notelistnr_nr">课题介绍：{{kt.ktjs}}</div>
            </div>
            <div class="notelistsc">{{bmqk}}</div>
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
  name: "note",
  components:{
    vTop,
    vLeft,
  },
  data(){
    return{
      kt:{},
      bmqk:""
    }
  },
  activated:function(){
    this.kt={}
    this.bmqk="" 
    this.getlastkth();
  },
  methods:{
    todetail: function (e) {
        let routeUrl = this.$router.resolve({
          path: "/ktdetail",
          query: {kth:this.kt.kth}
        });
        window.open(routeUrl.href, '_blank');
    },
    getlastkth(){
      axios.post('http://localhost:8010/getlastTitleidByxh?xh='+localStorage.getItem("xh"))
      .then((response)=>{
        if(response.data==0)
          this.getprekth()
        else{
          this.getkt(response.data)
          console.log(response.data)
          this.bmqk="报名成功"
        }  
      }).catch(function (error) { // 请求失败处理
        console.log("---查询出错---！"+error);
      })
    },
     getprekth(){
      axios.post('http://localhost:8010/getpreTitleidByxh?xh='+localStorage.getItem("xh"))
      .then((response)=>{
        if(response.data==0)
          this.bmqk="待报名"
        else{
          this.getkt(response.data)
          this.bmqk="待录取"
        }
      }).catch(function (error) { // 请求失败处理
        console.log("---查询出错---！"+error);
      })
    },
    getkt(e){
      axios.post('http://localhost:8010/gettitlebykth?kth='+3)
      .then((response)=>{
        console.log(response.data)
        this.kt=response.data
      }).catch(function (error) { // 请求失败处理
        console.log("---查询出错---！"+error);
      })
    },
  }
}
</script>

<style scoped>
.notebox{
  width: 1440px;
  height: 768px;
  font-family: SimHei;
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
  width: 129px;
  height: 28px;
  font-size: 30px;
  font-family: SimHei;
  font-weight: 400;
  color:#2C7DC3;;
  line-height: 1px;
  margin-top: 35px;
  margin-left: 30px;
}
.rightline{
  width: 1186px;
  height: 1px;
  background: #C6CACE;
  margin-top: 5px;
  margin-left: 30px;
}
/* /////////////////////////// */
.rightmainbox{
   width: 1225px;
  height: 688px;
  overflow: auto;
}

.notelist_title{
  width: 1124px;
  height: 40px;
  margin-top: 20px;
  margin-left: 50px;
  background-color:#2C7DC3;
}
.notelist_title_text{
  width: 220px;
  height: 20px;
  color: white;
  font-size: 20px;
  padding: 10px;
  font-weight: 700;
}
.notelist_lan{
  width: 1124px;
  height: 40px;
  margin-left: 50px;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  border-bottom: #C6CACE solid 1px;
}
.notelist_lan1{
  width: 120px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-left: #C6CACE solid 1px;
  border-right: #C6CACE solid 1px;
}
.notelist_lan2{
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.notelist_lan3{
  width: 864px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-left: #C6CACE solid 1px;
  border-right:#C6CACE solid 1px;
}
.notelist_lan4{
  width: 200px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-right:#C6CACE solid 1px;
}
.notelistbox{
  display: flex;
  flex-direction: row;
  width: 1124px;
  min-height: 40px;
  margin-left: 50px;
  font-size: 18px;
  border-bottom: #C6CACE solid 1px;
}
.notelistrq{
  width: 120px;
  min-height: 40px;
  display: table-cell;
  text-align: center;
  line-height: 40px;
  border-left: #C6CACE solid 1px;
  border-right: #C6CACE solid 1px;
}
.notelistdx{
  width: 120px;
  min-height: 40px;
  line-height: 40px;
  text-align: center;
  vertical-align: middle;
}
.notelistnr{
  width: 864px;
  min-height: 40px;
  text-align:left;
  vertical-align: middle;
  border-left: #C6CACE solid 1px;
  border-right:#C6CACE solid 1px;
  display: flex;
  flex-direction: column;
}
.notelistnr_bt{
  font-weight: 700;
  line-height: 40px;
  color: #2C7DC3;
}
.notelistnr_nr{
  line-height: 30px;
}
.notelistsc{
  width: 200px;
  min-height: 40px;
  line-height: 40px;
  text-align: center;
  vertical-align: middle;
  border-right:#C6CACE solid 1px;
}
</style>