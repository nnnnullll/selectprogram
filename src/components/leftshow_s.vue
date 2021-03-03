<template>
    <div class="leftshow" style="width: 204px">
        <div class="lefttext1">基础功能</div>
        <div class="lefttext2" @click="leftto('note')">公告通知</div>
        <div class="lefttext2" @click="leftto('info')">个人信息</div>
        <div class="lefttext1" >项目报名</div>
        <div class="lefttext2" @click="leftto('baominqk')">报名情况</div>
        <div class="lefttext2" @click="lefttomm('progregister')">项目报名</div>
        <div class="lefttext2" @click="leftto('ktdetail')">项目查询</div>
        <div class="lefttext1" >项目管理</div>
    </div>
</template>

<script>
const axios=require('axios');
export default {
  name: "v-left",
  data(){
    return{
      
    }
  },
  mounted:function(){
    
  },
  methods:{
    leftto(e){
      this.$router.push('/'+e)
    },
    lefttomm(e){
      axios.post("/user/getStuById",{
        xh:localStorage.getItem("xh")
      })
      .then(res=>{
        if(res.data.cz!=1){
           axios.post('http://localhost:8010/getlastTitleidByxh?xh='+localStorage.getItem("xh"))
          .then((response)=>{
            if(response.data==2)
              alert("您已完成双向选择")
            else{
              this.$router.push('/'+e)
            }  
          }).catch(function (error) { // 请求失败处理
            console.log("---查询出错---！"+error);
          })
        }
        else{
          alert("选课时间未到")
        }
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.leftshow{
  width: 204px;
  height: 718px;
  background: #DCE7F0;
  display: flex;
  flex-direction: column;
}
.lefttext1{
  margin-left: 30px;
  margin-top: 30px;
  width: 85px;
  height: 20px;
  font-size: 20px;
  font-family: SimHei;
  font-weight: 400;
  color: #000000;
  line-height: 1px;
}
.lefttext2{
  margin-top: 20px;
  margin-left: 60px;
  width: 75px;
  height: 18px;
  font-size: 18px;
  font-family: SimHei;
  font-weight: 400;
  color: #0C6EC4;
  line-height: 1px;
}
</style>