<template>
  <div class="notebox">
    <v-top></v-top>
    <div class="mainbox">
      <v-left></v-left>
      <div class="rightbox">
        <div class="righttitle">时间管理</div>
        <div class="rightline"></div>
        <!-- 要改的展示的模块就是这里 -->
        <div class="rightmainbox">
          <div class="buttons">
            <el-button @click="cb1" v-model="b1">点击{{b1}}教师发布课题权限</el-button>
            <el-button @click="cb2" v-model="b2">点击{{b2}}学生一轮选择课题权限</el-button>
            <el-button @click="cb3" v-model="b3">点击{{b3}}教师接收学生权限</el-button>
            <el-button @click="cb4" v-model="b4">点击{{b4}}学生二轮选择课题权限</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vTop from '../components/topshow';
import vLeft from '../components/leftshow_c'
const axios=require('axios');
export default {
  name: "note",
  components:{
    vTop,
    vLeft,
  },
  data(){
    return{
      b1:"开启",
      b2:"开启",
      b3:"开启",
      b4:"开启",
    }
  },
  mounted:function(){
    
  },
  methods:{
    cb1(){
      this.$confirm('此操作将'+this.b1+'教师发布课题权限, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          if(this.b1=="开启"){
            this.openteacheradd();
            this.b1="关闭"
          }
          else{
            this.closeteacher();
            this.b1="开启"
          }          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });          
        });
    },
    cb2(){
      this.$confirm('此操作将'+this.b2+'学生一轮选择课题权限, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          if(this.b2=="开启"){
            this.openstudentadd();
            this.b2="关闭"
          }
          else{
            this.closestudentadd();
            this.b2="开启"
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });          
        });
    },
    cb3(){
      this.$confirm('此操作将'+this.b3+'教师接收学生权限, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          if(this.b3=="开启"){
            this.openteacheraccept();
            this.b3="关闭"
          }
          else{
            this.closeteacher(); 
            this.b3="开启"
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });          
        });
    },
    cb4(){
      this.$confirm('此操作将'+this.b4+'学生二轮选择课题权限, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          if(this.b4=="开启"){
            this.openstudent2add();
            this.b4="关闭"
          }
          else{
            this.closestudentadd(); 
            this.b4="开启"
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });          
        });
    },
    openteacheradd(){
      axios.post('http://localhost:8010/openteacheradd')
      .then((response)=>{
        // console.log(response)
        alert('操作成功!');
      }).catch(function (error) { // 请求失败处理
        console.log("---查询出错---！"+error);
      })
    },
    openteacheraccept(){
      axios.post('http://localhost:8010/openteacheraccept')
      .then((response)=>{
        // console.log(response)
        alert('操作成功!');
      }).catch(function (error) { // 请求失败处理
        console.log("---查询出错---！"+error);
      })
    },
    closeteacher(){
      axios.post('http://localhost:8010/closeteacher')
      .then((response)=>{
        // console.log(response)
        alert('操作成功!');
      }).catch(function (error) { // 请求失败处理
        console.log("---查询出错---！"+error);
      })
    },
    openstudentadd(){
      axios.post('http://localhost:8010/openstudentadd')
      .then((response)=>{
        // console.log(response)
        alert('操作成功!');
      }).catch(function (error) { // 请求失败处理
        console.log("---查询出错---！"+error);
      })
    },
    openstudent2add(){
      axios.post('http://localhost:8010/openstudent2add')
      .then((response)=>{
        // console.log(response)
        alert('操作成功!');
      }).catch(function (error) { // 请求失败处理
        console.log("---查询出错---！"+error);
      })
    },
    closestudentadd(){
      axios.post('http://localhost:8010/closestudentadd')
      .then((response)=>{
        // console.log(response)
        alert('操作成功!');
      }).catch(function (error) { // 请求失败处理
        console.log("---查询出错---！"+error);
      })
    }
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
  width: 1280px;
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
.buttons{
  width: 500px;
  height: 300px;
  margin-left: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.buttons>>>.el-button{
  font-size: 18px;
}
</style>