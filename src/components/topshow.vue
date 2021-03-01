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
      top_username:"",
      top_date:""
    }
  },
  activated:function(){
    this.getyear();
    this.setyhm();
  },
  methods:{
    getyear(){
      var d=new Date()
      this.top_date=d.getFullYear()
    },
    setyhm(){
      this.top_username=JSON.parse(localStorage.getItem('xm'))
    },
    logout(){
      this.$confirm('此操作将退出课题系统, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        localStorage.removeItem('xh');
        localStorage.removeItem('gh');
        localStorage.removeItem('xm');
        localStorage.removeItem('yxh');
        this.$router.replace('/login')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消操作'
        });          
      });
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
  width: 100px;
  height: 18px;
  font-size: 20px;
  margin-top: 15px;
  margin-left: 220px;
}
.top_text4{
  width: 40px;
  height: 18px;
  font-size: 20px;
  margin-top: 15px;
  margin-left: 20px;
}
</style>