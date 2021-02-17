<template>
  <div class="notebox">
    <v-top></v-top>
    <div class="mainbox">
      <v-left></v-left>
      <div class="rightbox">
        <div class="righttitle">课题删除与修改</div>
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
            <div class="notelist_lan4">删除</div>
          </div>
          <div v-for="kt in kt" :key="kt.key" class="notelistbox">
            <div class="notelistrq">{{kt.kth}}</div>
            <div class="notelistdx">{{kt.fbsj}}</div>
            <div class="notelistnr">
              <div class="notelistnr_bt">{{kt.ktm}}</div>
              <div class="notelistnr_nr">{{kt.ktjs}}</div>
            </div>
            <div class="notelistsc">
              <el-button @click="condeletekt(kt.kth)">删除</el-button>
              <el-button @click="gotoresetkt(kt.kth)">修改</el-button>
            </div>
          </div>

          <div class="notelist_title">
            <div class="notelist_title_text">审核未通过公告列表</div>
          </div>
          <div class="notelist_lan">
            <div class="notelist_lan1">课题号</div>
            <div class="notelist_lan2">发布时间</div>
            <div class="notelist_lan3">课题内容</div>
            <div class="notelist_lan4">操作</div>
          </div>
          <div v-for="kt in badkt" :key="kt.key" class="notelistbox">
            <div class="notelistrq">{{kt.kth}}</div>
            <div class="notelistdx">{{kt.fbsj}}</div>
            <div class="notelistnr">
              <div class="notelistnr_bt">{{kt.ktm}}</div>
              <div class="notelistnr_nr">{{kt.ktjs}}</div>
            </div>
            <div class="notelistsc">
              <el-button @click="condeletekt(kt.kth)">删除</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vTop from '../components/topshow';
import vLeft from '../components/leftshow_t'
const axios=require('axios');
export default {
  name: "ktmanage",
  components:{
    vTop,
    vLeft,
  },
  data(){
    return{
      kt:[],
      badkt:[]
    }
  },
  activated:function(){ 
    this.getkt();
  },
  methods:{
    gotoresetkt(e){
      this.$router.push({ 
        name: 'resetkt', 
        params: { kth: e }
      })
    },
    getkt(){
      axios.post('http://localhost:8010/gettitlebygh?gh='+localStorage.getItem('gh'))
      .then((response)=>{
        console.log(response)
        this.kt=response.data
      }).catch(function (error) { // 请求失败处理
        console.log("---查询出错---！"+error);
      })
      axios.post('http://localhost:8010/getbadtitlebygh?gh='+localStorage.getItem('gh'))
      .then((response)=>{
        console.log(response)
        this.badkt=response.data
      }).catch(function (error) { // 请求失败处理
        console.log("---查询出错---！"+error);
      })
    },
    deletekt(e){
      axios.post('http://localhost:8010/deletetitle?kth='+e)
      .then((response)=>{
        // console.log(response)
        this.getkt()
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(function (error) { // 请求失败处理
        console.log("---查询出错---！"+error);
      })
    },
    condeletekt(e){
      this.$confirm('此操作将删除该课题, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deletekt(e)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }
  }
}
</script>

<style scoped>
.notebox{
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
  width: 1280px;
  height: 718px;
  display: flex;
  flex-direction: column;
}
.righttitle{
  width: 329px;
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