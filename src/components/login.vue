// 登录
<template xmlns:overflow="http://www.w3.org/1999/xhtml">

  <div class="building">
    <div class="background">
      <img :src="back"  alt="" style="width:1440px;" />
    </div>
    <div class="bottom">
<!--      <div class="circle" >-->

<!--      </div>-->
      <el-form style="display:flex;flex-direction:column;justify-content: center"  ref="user" class="box">
        <el-form-item>
          <img :src="imgUrl" style="width: 300px;margin-left: 40px;margin-top: 10px;"  >
          <div class="title">毕业设计管理系统</div>
        </el-form-item>
        <el-form-item  >
          <el-input class="itemlabel1" placeholder="账户"   type="text" v-model="user.input"
                    clearable>
          </el-input>
        </el-form-item>
          <el-form-item >
            <el-input class="itemlabel2" placeholder="密码" prop="password" type="password" v-model="user.password"
                      show-password clearable>
            </el-input>
          </el-form-item>


        <el-form-item >
          <div style="margin-left: 80px">
            <el-radio v-model="radio" label="1">学生</el-radio>
            <el-radio v-model="radio" label="2">教师</el-radio>
            <el-radio v-model="radio" label="3">管理员</el-radio>
          </div>
          <el-button style="width: 250px;height:40px;margin-left: 75px;background-color: #5aa7f5;color: white" @click="submitForm(user)" >登陆</el-button>

        </el-form-item>
        <el-form-item >
        </el-form-item>
      </el-form>

    </div>
  </div>

</template>

<script>
import { mapMutations } from 'vuex';
const axios=require('axios');
export default {
  data() {
    return {
      radio: '1',
      user: {
        input: '',
        password: '',
      },
      imgUrl:require("@/assets/shulogo.png"),
      back:require("@/assets/back.jpg"),

    }
  },
  methods: {
    changeuserimg(){
      // localStorage.setItem('userimg',require("@/assets/img/img1.png"))
      let tmp=localStorage.getItem('userimg');
      if(tmp){
        this.userimg=tmp;
      }
    },
    ...mapMutations(['changeLogin']),
    submitForm(){
          let _this = this;
          axios.post('/user/login',{
            username:_this.user.input,
            password:_this.user.password,
            kind:_this.radio
          })
              .then((response)=>{
            console.log(response)
            if(response.data.token){
              var data=response.data;
              if(this.radio==1){
                localStorage.setItem('xh', JSON.stringify(data.xh));
                localStorage.setItem('xm', JSON.stringify(data.xm));
              }
              else{
                localStorage.setItem('gh', JSON.stringify(data.gh));
                localStorage.setItem('xm', JSON.stringify(data.xm));
              }
              var tmp = 'Bearer ' + data.token;
              // 将用户token保存到vuex中
              _this.changeLogin({ token: tmp});
              console.log(tmp)
              localStorage.setItem('token',JSON.stringify(tmp))
              if(this.radio==1){
                _this.$router.push('/note');
              }
              else if(this.radio==2){
                _this.$router.push('/note_t');
              }
              else if(this.radio==3){
                _this.$router.push('/notemanage');
              }

              alert('登陆成功');
            }
            else{
              alert('登陆失败，请重试！')
            }
          })
              .catch(function (error) { // 请求失败处理
            console.log("---出错---！");
            console.log(error)
          });
    },
    clearForm(info){
      this.$refs[info].resetFields()
    },
    search(){
      this.$router.push('/search');
    },
    gotoregister(){
      this.$router.push('/petregister');
    },
    gotologin(){
      this.$router.push('/content');
    },
    gotosection(){
      this.$router.push('/section');
    },
    gotomain(){
      this.$router.push('/main');
    }
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
  margin-top: 10%;
  width: 400px;
  /*background-color: #dee5ed;*/
  background-color: #f5f9fd;

}
.background{
  z-index:-1;
  position: fixed;
  width: 1440px;
}

.building{
  width: 1440px;
  /*height: 900px;*/
}
.bottom{
  /*position: fixed;*/
  z-index:1;
  width: 1440px;
  /*height: 659px;*/
  opacity: 0.87;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 1%;
}
.itemlabel1{
  padding-left: 75px;
  width: 250px;
  height: 50px;
  border-radius: 10px;
  /*display: flex;*/
  /*justify-content: center;*/
  text-align:center;
}
.itemlabel2{
  padding-left: 75px;
  width: 250px;
  height: 50px;
  border-radius: 10px;
  /*display: flex;*/
  /*justify-content: center;*/
  /*text-align:center;*/
}
.circle{
  width: 238px;
  height: 238px;
  background: #43b2ff;
  opacity: 0.97;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  margin-top: 10%;
  margin-bottom: 1%;
}
.circle2img{
  margin-left: 5%;
  background: #f6deca;
  border-radius: 50%;
  width:4.8%;
  height: 4.8%;
}
.text2{
  width: 48px;
  height: 22px;
  font-size: 23px;
  font-family: ZTSJ-BaguetteFont;
  font-weight: 400;
  color: #000000;
  margin-right: 1%;
  margin-top: 29px;
}
.text3{
  width: 48px;
  height: 22px;
  font-size: 23px;
  font-family: ZTSJ-BaguetteFont;
  font-weight: 400;
  color: #000000;
  margin-right: 1%;
  margin-top: 29px;
}
.btn1{
  width: 140px;
  height: 50px;
  background: #4FA1F4;
  border-radius: 10px;
  color: #ffffff;
}
.btn2{
  width: 140px;
  height: 50px;
  background: #4FA1F4;
  border-radius: 10px;
  color: #ffffff;
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

</style>