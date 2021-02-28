<template>
    <div class="leftshow">
        <div class="lefttext1">基础功能</div>
        <div class="lefttext2" @click="leftto('note')">公告通知</div>
        <div class="lefttext2" @click="leftto('info')">个人信息</div>
        <div class="lefttext1" >项目报名</div>
        <div class="lefttext2" @click="leftto('baominqk')">报名情况</div>
        <div class="lefttext2" @click="leftto('progregister')">项目报名</div>
        <div class="lefttext2" @click="leftto('ktdetail')">项目查询</div>
        <div class="lefttext1" >项目管理</div>
    </div>
</template>

<script>
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
    }
    
  }
}
</script>

<style scoped>
.leftshow{
  width: 370px;
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