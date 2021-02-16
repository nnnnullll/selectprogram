<template>
    <div class="topshowbox">
      <div class="top_text1" @click="toptohome">首页</div>
      <div class="top_text2">{{top_date}}-{{top_date+1}}学年春季学期毕业设计项目管理系统</div>
      <div class="top_text3">{{top_username}}</div>
      <div class="top_text4" @click="logout">注销</div>
    </div>
</template>

<script>
const axios=require('axios');
export default {
  name: "v-top",
  data(){
    return{
      top_username:"用户名",
      top_date:""
    }
  },
  mounted:function(){
    this.getyear();
  },
  methods:{
    getyear(){
      var d=new Date()
      this.top_date=d.getFullYear()
    },
    logout(){
      
    },
    toptohome(){
      this.$router.push('/note')
    }

  }
}
</script>

<style scoped>
.topshowbox{
  width: 1440px;
  height: 50px;
  background: #2C7DC3;
  color: #DCE7F0;
  font-weight: 400;
  margin-left: 0px;
  display: flex;
  flex-direction: row;

}
.top_text1{
  width: 40px;
  height: 24px;
  font-size: 20px;
  margin-top: 15px;
  margin-left: 30px;
}
.top_text2{
  width: 600px;
  height: 23px;
  font-size: 28px;
  font-weight: 400;
  margin-top: 11px;
  margin-left: 360px;
}
.top_text3{
  width: 60px;
  height: 18px;
  font-size: 20px;
  margin-top: 15px;
  margin-left: 260px;
}
.top_text4{
  width: 40px;
  height: 18px;
  font-size: 20px;
  margin-top: 15px;
  margin-left: 20px;
}
</style>