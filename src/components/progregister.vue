<template>
  <div class="notebox">
    <v-top></v-top>
    <div class="mainbox">
      <v-left></v-left>
      <div class="rightbox">
        <div class="righttitle">项目分配</div>
        <div class="rightline"></div>
        <!-- 要改的展示的模块就是这里 -->
        <div class="rightmainbox">
          <el-form style="display:flex;flex-direction:column;justify-content: center" class="box">
            <el-form-item>
              <img :src="imgUrl" style="width: 300px;margin-left: 40px;margin-top: 20px;"  >
              <div class="title">一键匹配未分配课题</div>
            </el-form-item>
            <el-form-item  >
              <el-button style="width: 250px;height:40px;margin-top:20px;margin-left: 75px;background-color: #5aa7f5;color: white" @click="match" >重置</el-button>
            </el-form-item>
            <el-form-item >
            </el-form-item>
          </el-form>
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
  name: "progregister",
  components:{
    vTop,
    vLeft,
  },
  data(){
    return{
      imgUrl:require("@/assets/shulogo.png"),
    }
  },
  mounted:function(){
    
  },
  methods:{
    match(){
      axios.post('/user/match',{
        glyh:'1'
      })
      .then(res=>{
        alert('已分配成功！')
      })
      .catch(err=>{
        console.log(err)
        alert('occur err!')
      })
    }
  }
}
</script>

<style scoped>
.title{
  font-size: 40px;
  text-align: center;
}
.box{
  /*margin-top: 10%;*/
  width: 400px;
  /*background-color: #dee5ed;*/
  /*background-color: #f5f9fd;*/

}
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
  width: fit-content;
  height: 688px;
  padding-left:26% ;
  padding-top: 5%;
}
</style>