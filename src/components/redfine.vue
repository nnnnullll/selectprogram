<template xmlns:overflow="http://www.w3.org/1999/xhtml">

    <div class="notebox">
      <v-top></v-top>
      <div class="mainbox">
        <v-left></v-left>
        <div class="rightbox">
          <div class="righttitle">公告通知</div>
          <div class="rightline"></div>
          <!-- 要改的展示的模块就是这里 -->
          <div class="rightmainbox">
            <el-form style="display:flex;flex-direction:column;justify-content: center"  ref="user" class="box">
              <el-form-item>
                <img :src="imgUrl" style="width: 300px;margin-left: 40px;margin-top: 20px;"  >
                <div class="title">重置密码</div>
              </el-form-item>
              <el-form-item  >
                <el-input class="itemlabel1" placeholder="账户"   type="text" v-model="user.input"
                          clearable>
                </el-input>

                <div style="margin-left: 80px">
                  <el-radio v-model="radio" label="1">学生</el-radio>
                  <el-radio v-model="radio" label="2">教师</el-radio>
                  <el-radio v-model="radio" label="3">管理员</el-radio>
                </div>
                <el-button style="width: 250px;height:40px;margin-left: 75px;background-color: #5aa7f5;color: white" @click="submitForm(user)" >重置</el-button>
              </el-form-item>
              <!--              <el-form-item >-->
              <!--                <el-input class="itemlabel2" placeholder="密码" prop="password" type="password" v-model="user.password"-->
              <!--                          show-password clearable>-->
              <!--                </el-input>-->
              <!--              </el-form-item>-->


              <el-form-item >
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import { mapMutations } from 'vuex';
import vTop from "./topshow";
import vLeft from "./leftshow_c";
const axios=require('axios');
export default {
  name:"redfine",
  components:{
    vTop,
    vLeft,
  },
  data() {
    return {
      radio: '1',
      user: {
        input: '',
        password: '',
      },
      imgUrl:require("@/assets/shulogo.png"),
    }
  },

  methods: {
    leftto(e){
      this.$router.push('/'+e)
    },
    ...mapMutations(['changeLogin']),
    submitForm(){
      console.log(this.user)
      console.log(this.radio)
      let _this = this;
      axios.post('/user/reset',{
        username:_this.user.input,
        password:this.user.input,
        kind:_this.radio
      })
          .then((response)=>{
            console.log(response)
            alert("密码重置成功")
          })
          .catch(function (error) { // 请求失败处理
            console.log("---出错---！");
            console.log(error)
          });
    },
  }
}
</script>

<style>
.el-form-item__error{
  left: 80px;
}
.el-input__inner::placeholder {
  color: #736f6f;
}

</style>
<style scoped>
.title{
  font-size: 40px;
  text-align: center;
}
.box{
  width: 400px;
}
.itemlabel1{
  padding-left: 75px;
  width: 250px;
  height: 50px;
  border-radius: 10px;
  padding-top: 15px;
  /*display: flex;*/
  /*justify-content: center;*/
  text-align:center;
}

</style>
<style scoped>
.itemlabel1>>>input{
  color: #736f6f;
  background-color: #eae7e7 !important;
}
.itemlabel2>>>input{
  color: #736f6f;
  background-color: #e5e4e4 !important;
}

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
  width: 1236px;
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
  width: fit-content;
  height: 688px;
  padding-left:26% ;
  padding-top: 5%;
}

.inputkth>>>.el-input__inner{
  width: 500px;
  font-size: 18px;
  margin-left: 20px;
  height: 60px;
}

</style>