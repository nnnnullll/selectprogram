<template>
  <div class="ktbox">
    <v-top></v-top>
    <div class="mainbox">
      <v-left></v-left>
      <div class="rightbox">
        <div class="righttitle">课题发布</div>
        <div class="rightline"></div>
        <!-- 要改的展示的模块就是这里 -->
        <div class="rightmainbox">
          <div class="kt_title">
            <div class="kt_title_text">课题信息</div>
          </div>
          <div  class="ktrowbox">
            <div class="ktrow_left">课题名称</div>
            <div class="ktrow_right" >
              <el-input class="creattext" v-model="kt.ktm" ></el-input>
            </div>
            <div class="ktrow_left">限报人数</div>
            <div class="ktrow_right" >
              <el-input  class="creattext" type="number" v-model="kt.xbrs"></el-input>
            </div>
          </div>
          <div  class="ktrowbox">
            <div class="ktrow_left">课题类别</div>
            <div class="ktrow_right">
              <el-select class="creattext" v-model="kt.ktlb" placeholder="请选择课题类别">
                <el-option label="毕业设计" value="biyesheji"></el-option>
                <el-option label="应用研究" value="biyesheji"></el-option>
              </el-select>
            </div>
            <div class="ktrow_left">课题性质</div>
            <div class="ktrow_right">
              <el-select class="creattext" v-model="kt.ktxz" placeholder="请选择课题性质">
                <el-option label="设计" value="shanghai"></el-option>
                <el-option label="研究" value="beijing"></el-option>
              </el-select>
            </div>
          </div>
          <div  class="ktrowbox">
            <div class="ktrow_left">课题来源</div>
            <div  class="ktrow_right">
              <el-input class="creattext" v-model="kt.ktly"></el-input>
            </div>
            <div class="ktrow_left">是否为新课题</div>
            <div  class="ktrow_right">
              <el-select class="creattext" v-model="kt.sfxkt" placeholder="请选择是否为新课题">
                <el-option label="是" value="shanghai"></el-option>
                <el-option label="否" value="beijing"></el-option>
              </el-select>
            </div>
          </div>
          <div  class="ktrowbox">
            <div class="ktrow_left">课题介绍</div>
            <div class="ktrow_right2">
              <el-input class="creatktjs" type="textarea" v-model="kt.ktjs"></el-input>
            </div>
          </div>
          <div class="buttons">
            <el-button class="crebutton"  @click="creatkt">创建课题</el-button>
            <el-button class="redfinebutton"   @click="reset()">重置</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vTop from '../components/topshow';
import vLeft from '../components/leftshow_t';
const axios=require('axios');
export default {
  name: "ktdetail",
  components:{
    vTop,
    vLeft
  },
  data(){
    return{
      kt:{
        xbrs:0,
        ktm:'',
        ktjs:'',
        ktlb:'',
        ktxz:'',
        ktly:'',
        sfxkt:0,
      }, 
    }
  },
  activated:function(){
  },
  methods:{
    current() {
			var d = new Date(),
			str = '';
			str += d.getFullYear() + '-'; //获取当前年份 
			str += d.getMonth() + 1 + '-'; //获取当前月份（0——11） 
			str += d.getDate() + ' ';
			return str;
		},
    reset() {
      this.kt.xbrs='';
      this.kt.ktm='';
      this.kt.ktjs='';
      this.kt.ktlb='';
      this.kt.ktxz='';
      this.kt.ktly='';
      this.kt.sfxkt='';
    },
    creatkt(){
      if( this.kt.xbrs==''||this.kt.ktm==''||this.kt.ktjs==''||this.kt.ktlb==''||this.kt.ktxz==''||this.kt.ktly==''||this.kt.sfxkt=='')
        alert('内容不得为空!');
      else{
        if(this.kt.sfxkt=="是")
          this.kt.sfxkt=0
        else
          this.kt.sfxkt=1
        // axios.post('http://localhost:8010/addtitle?ktm='+this.kt.ktm+'&gh='+localStorage.getItem('gh')+'&yxh='+localStorage.getItem('yxh')+'&ktjs='+this.kt.ktjs+'&ktlb='+this.kt.ktlb+'&ktxz='+this.kt.ktxz+'&ktly='+this.kt.ktly+'&xbrs='+this.kt.xbrs+'&sfxkt='+this.kt.sfxkt+'&fbsj='+this.current())
        axios.post('http://localhost:8010/addtitle?ktm='+this.kt.ktm+'&gh='+localStorage.getItem('gh')+'&yxh='+localStorage.getItem('yxh')+'&ktjs='+this.kt.ktjs+'&ktlb=ktlb&ktxz=ktxz&ktly=ktly&xbrs=1&sfxkt='+this.kt.sfxkt+'&fbsj='+this.current())
        .then((response)=>{
          // console.log(response)
          alert('发布成功!');
          this.reset()
        }).catch(function (error) { // 请求失败处理
          console.log("---查询出错---！"+error);
        })
      }
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
  width: 1280px;
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
.creattext>>>.el-input__inner{
  font-size: 18px;
}
.creatktjs>>>.el-textarea__inner{
  font-size: 18px;
  min-height: 350px !important;
}
.buttons{
  display: flex;
  flex-direction: row;
}
.crebutton{
  margin-top: 20px;
  margin-left: 300px;
}
.redfinebutton{
  margin-top: 20px;
  margin-left: 400px;
}
</style>