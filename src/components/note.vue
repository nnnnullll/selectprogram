<template>
  <div class="notebox">
    <v-top></v-top>
    <div class="mainbox">
      <v-left></v-left>
      <div class="rightbox">
        <div class="righttitle">公告通知</div>
        <div class="rightline"></div>
        <!-- 要改的展示的模块就是这里 -->
        <div class="rightmainbox">
          <div v-for="note in notes" :key="note.key" class="notelistbox">
            <div>{{note.dv}}</div>
            <div>{{note.bt}}</div>
            <div>{{note.nr}}</div>
            <div>{{note.rq}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vTop from '../components/topshow';
import vLeft from '../components/leftshow'
const axios=require('axios');
export default {
  name: "note",
  components:{
    vTop,
    vLeft,
  },
  data(){
    return{
      notes:[]
    }
  },
  activated:function(){
    this.getnote();
  },
  methods:{
    getnote(){
      axios.post('http://localhost:8010/getnote')
      .then((response)=>{
        console.log(response)
        this.notes=response.data
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
  width: 1280px;
  height: 688px;
}
.notelistbox{
  display: flex;
  flex-direction: row;
}
</style>