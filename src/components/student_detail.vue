<template>
  <div class="notebox">
    <v-top></v-top>
    <div class="mainbox">
      <v-left></v-left>
      <div class="rightbox">
        <div class="righttitle">申请学生信息</div>
        <div class="rightline"></div>
        <!-- 要改的展示的模块就是这里 -->
        <div class="rightmainbox">
          <div class="rightbox_title">
            <div>学生信息</div>
          </div>
          <div class="studentform" style="display: flex;flex-direction: column;margin-top: 20px">
            <div class="studentnum" style="display: flex;flex-direction: row;margin-left: 394px">
              <div class="text1">学号：</div>
              <input disabled="disabled" class="input1" v-model="student.num" :placeholder="student.num"></input>
            </div>
            <div class="studentname"  style="display: flex;flex-direction: row;margin-left: 394px;margin-top: 6px;">
              <div  class="text2">姓名：</div>
              <input disabled="disabled" class="input2" v-model="student.name" :placeholder="student.name"></input>
            </div>
            <div class="studentac" style="display: flex;flex-direction: row;margin-top: 6px;margin-left: 394px">
              <div class="text3" >学院：</div>
              <select disabled="disabled" style="color: black" v-model="this.accindex" class="select1" id="academyselect" name="academyselect" @change="selectac($event)">
                <option value =0>请选择学院</option>
                <option value =1>计算机工程与科学学院</option>
                <option value =2>理学院</option>
                <option value =3>生命科学学院</option>
                <option value =4>文学院</option>
                <option value =5>法学院</option>
                <option value =6>外国语学院</option>
                <option value =7>社会学院</option>
                <option value =8>马克思主义学院</option>
                <option value =9>新闻传播学院</option>
                <option value =10>机电工程与自动化学院</option>
                <option value =11>通信与信息工程学院</option>
                <option value =12>环境与化学工程学院</option>
                <option value =13>材料科学与工程学院</option>
                <option value =14>中欧工程技术学院</option>
                <option value =15>力学与工程科学学院</option>
                <option value =16>微电子学院</option>
                <option value =17>经济学院</option>
                <option value =18>管理学院</option>
                <option value =19>悉尼工商学院</option>
                <option value =20>医学院</option>
                <option value =21>上海电影学院</option>
                <option value =22>上海美术学院</option>
                <option value =23>音乐学院</option>
                <option value =24>数码艺术学院</option>
                <option value =25>上海温哥华电影学院</option>
                <option value =26>上海电影学院</option>
                <option value =27>社区学院</option>
                <option value =28>钱伟长学院</option>
                <option value =29>体育学院</option>
                <option value =30>人才学院</option>
                <option value =31>继续教育学院</option>
                <option value =32>国际教育学院</option>
              </select>
            </div>
            <div class="studentmajor" style="display: flex;flex-direction: row;margin-left: 394px;margin-top: 6px;">
              <div class="text4" >专业：</div>
              <input disabled="disabled" class="input4" v-model="student.major" :placeholder="student.major"></input>
            </div>
            <div class="studentgrade" style="display: flex;flex-direction: row;margin-left: 394px;margin-top: 6px;">
              <div  class="text5">年级：</div>
              <input disabled="disabled" class="input5" v-model="student.grade" :placeholder="student.grade"></input>
            </div>
            <div class="studentmajor" style="display: flex;flex-direction: row;margin-left: 394px;margin-top: 6px;">
              <div class="text4" >均绩：</div>
              <input disabled="disabled" class="input4" v-model="student.score" :placeholder="student.score"></input>
            </div>
            <div class="studentgender" style="display: flex;flex-direction: row;margin-top: 6px;margin-left: 394px">
              <div class="text6">性别：</div>
              <select disabled="disabled" style="color: black" class="select2" v-model="this.genderindex" id="genderselect" name="genderselect" @change="selectgender($event)">
                <option value =0>请选择性别</option>
                <option value =1>男</option>
                <option value =2>女</option>
              </select>
            </div>
            <div class="studentemail" style="display: flex;flex-direction: row;margin-top: 6px;margin-left: 340px">
              <div class="text7" style="margin-left: 6px">电子邮箱：</div>
              <input disabled="disabled" class="input7" v-model="student.email" :placeholder="student.email"></input>
            </div>
            <div class="studentqq" style="display: flex;flex-direction: row;margin-top: 6px;margin-left: 390px">
              <div class="text8" style="margin-left: 6px;">QQ：</div>
              <input disabled="disabled" class="input8" v-model="student.qq" :placeholder="student.qq"></input>
            </div>
            <div class="studentphone" style="display: flex;flex-direction: row;margin-top: 6px;margin-left: 365px">
              <div class="text9" style="margin-left: 6px">手机号：</div>
              <input disabled="disabled" class="input9" v-model="student.phone" :placeholder="student.phone"></input>
            </div>
            <div class="studentinfo" style="display: flex;flex-direction: row;margin-top: 6px;margin-left: 340px">
              <div class="text10" style="margin-left: 6px">个人简介：</div>
              <textarea style="min-height: 80px;width: 406px" disabled="disabled" class="input10" v-model="student.introduction" :placeholder="student.introduction"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vTop from '../components/topshow';
import vLeft from '../components/leftshow_t'
const axios=require('axios');
export default {
  name: "studeng_detail",
  components:{
    vTop,
    vLeft,
  },
  data(){
    return{
      genderindex:-1,
      accindex:-1,
      student:{
        score:0,
        num:'18122018',
        name:'zy',
        password:'',
        academy:'计算机学院',
        major:"计科",
        grade:'大三',
        gender:"女",
        email:'273146618@qq.com',
        qq:"273146618",
        phone:"13816539327",
        introduction:'暂无'
      }
    }
  },
  mounted:function(){

    // let e=this.$route.params.xh
    // this.getStuInfo(e)
    this.getStuInfo(2);
  },
  methods:{
    getStuInfo(e){
      axios.post("/user/getStuById",{
        xh:e
      })
          .then(res=>{
            console.log(res.data.res);
            let tmp=res.data.res;
            this.student.score=tmp.jj;
            this.student.num=tmp.xh;
            this.student.name=tmp.xm;
            this.student.password=tmp.mm;
            this.accindex=tmp.yxh;
            var  Select=document.getElementById("academyselect");
            this.student.academy=Select.options[this.accindex].text
            this.student.major=tmp.zy;
            this.student.grade=tmp.nj;
            this.student.gender=tmp.xb;
            if(tmp.xb=="男"){
              this.genderindex=1
            }
            else{
              this.genderindex=2
            }
            this.student.email=tmp.yx;
            this.student.qq=tmp.qq;
            this.student.phone=tmp.sjh;
            this.student.introduction=tmp.zwjs;
          })
          .catch(err=>{
            console.log(err)
          })
    }
  }
}
</script>

<style scoped>
.confirmbtn{
  width: 217px;
  height: 41px;
  background: #2C7DC3;
  opacity: 0.59;
  border-radius: 10px;
  text-align:center;
  font-size: 24px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #FFFFFF;
  margin-left: 550px;
  margin-top: 10px;
}
.rightbox_title{
  width: 1186px;
  height: 39px;
  background: #2C7DC3;
  opacity: 0.5;
  text-align: center;
  font-size: 24px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #FFFFFF;
  margin-left: 30px;
  margin-top: 12px;
}
input{
  color: black;
}
textarea{
  color: black;
}
.text1{
  width: 75px;
  height: 24px;
  font-size: 25px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #858686;
  line-height: 1px;
  padding-top: 30px;
}
.input1{
  width: 406px;
  height: 49px;
  background: #B6B6B6;
  /*border: 3px solid #000000;*/
  opacity: 0.56;
  border-radius: 10px;
  color: #000000;
  font-size:20px;
}
.text2{
  width: 75px;
  height: 24px;
  font-size: 25px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #858686;
  line-height: 1px;
  padding-top: 30px;
}
.input2{
  width: 406px;
  height: 49px;
  background: #B6B6B6;
  /*border: 3px solid #000000;*/
  opacity: 0.56;
  border-radius: 10px;
  font-size:20px;
}
.text3{
  width: 75px;
  height: 24px;
  font-size: 25px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #858686;
  line-height: 1px;
  padding-top: 30px;
}
.select1{
  width: 165px;
  height: 49px;
  background: #B6B6B6;
  /*border: 3px solid #000000;*/
  opacity: 0.56;
  border-radius: 10px;
  font-size:14px;

}
.text4{
  width: 75px;
  height: 24px;
  font-size: 25px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #858686;
  line-height: 1px;
  padding-top: 30px;
}
.input4{
  width: 406px;
  height: 49px;
  background: #B6B6B6;
  /*border: 3px solid #000000;*/
  opacity: 0.56;
  border-radius: 10px;
  font-size:20px;
}
.text5{
  width: 75px;
  height: 24px;
  font-size: 25px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #858686;
  line-height: 1px;
  padding-top: 30px;
}
.input5{
  width: 406px;
  height: 49px;
  background: #B6B6B6;
  /*border: 3px solid #000000;*/
  opacity: 0.56;
  border-radius: 10px;
  font-size:20px;
}
.text6{
  width: 75px;
  height: 24px;
  font-size: 25px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #858686;
  line-height: 1px;
  padding-top: 30px;
}
.select2{
  width: 165px;
  height: 49px;
  background: #B6B6B6;
  /*border: 3px solid #000000;*/
  opacity: 0.56;
  border-radius: 10px;
  font-size:20px;
}
.text7{
  width: 125px;
  height: 24px;
  font-size: 25px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #858686;
  line-height: 1px;
  padding-top: 30px;
}
.input7{
  width: 406px;
  height: 49px;
  background: #B6B6B6;
  /*border: 3px solid #000000;*/
  opacity: 0.56;
  border-radius: 10px;
  font-size:20px;
}
.text8{
  width: 75px;
  height: 24px;
  font-size: 25px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #858686;
  line-height: 1px;
  padding-top: 30px;
}
.input8{
  width: 406px;
  height: 49px;
  background: #B6B6B6;
  /*border: 3px solid #000000;*/
  opacity: 0.56;
  border-radius: 10px;
  font-size:20px;
}
.text9{
  width: 100px;
  height: 24px;
  font-size: 25px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #858686;
  line-height: 1px;
  padding-top: 30px;
}
.input9{
  width: 406px;
  height: 49px;
  background: #B6B6B6;
  /*border: 3px solid #000000;*/
  opacity: 0.56;
  border-radius: 10px;
  font-size:20px;
}
.text10{
  width: 125px;
  height: 24px;
  font-size: 25px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #858686;
  line-height: 1px;
  padding-top: 30px;
}
.input10{
  width: 406px;
  height: 49px;
  background: #B6B6B6;
  /*border: 3px solid #000000;*/
  opacity: 0.56;
  border-radius: 10px;
  font-size:20px;
}
/*//////*/
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
  display: flex;
  flex-direction: column;
}
.righttitle{
  width: 180px;
  height: 28px;
  font-size: 30px;
  font-family: SimHei;
  font-weight: 400;
  color:#2C7DC3;
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
  overflow: auto;
}
</style>