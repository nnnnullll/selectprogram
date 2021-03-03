<template>
  <div class="notebox">
    <v-top></v-top>
    <div class="mainbox">
      <v-left></v-left>
      <div class="rightbox">
        <div class="righttitle">指导老师信息</div>
        <div class="rightline"></div>
        <!-- 要改的展示的模块就是这里 -->
        <div class="rightmainbox">
          <div class="rightbox_title">
            <div>教师信息</div>
          </div>
          <div class="studentform" style="display: flex;flex-direction: column;margin-top: 20px">
            <div class="studentnum" style="display: flex;flex-direction: row;margin-left: 394px">
              <div class="text1">工号：</div>
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
              <div class="text4" >学历：</div>
              <input disabled="disabled" class="input4" v-model="student.xl" :placeholder="student.xl"></input>
            </div>
            <div class="studentgrade" style="display: flex;flex-direction: row;margin-left: 394px;margin-top: 6px;">
              <div  class="text5">职称：</div>
              <input disabled="disabled" class="input5" v-model="student.zc" :placeholder="student.zc"></input>
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
            <div class="studentqq" style="display: flex;flex-direction: row;margin-top: 6px;">
              <div class="text11" style="margin-left: 346px;">教工类别：</div>
              <input disabled="disabled" class="input8" v-model="student.kind" :placeholder="student.kind"></input>
            </div>
            <div class="studentphone" style="display: flex;flex-direction: row;margin-top: 6px;margin-left: 321px;">
              <div class="text12" >所在研究室：</div>
              <input disabled="disabled" class="input9" v-model="student.addr" :placeholder="student.addr"></input>
            </div>
            <div class="studentqq" style="display: flex;flex-direction: row;margin-top: 6px;margin-left: 321px;">
              <div class="text13" >办公室电话：</div>
              <input disabled="disabled" class="input8" v-model="student.dh" :placeholder="student.dh"></input>
            </div>
            <div class="studentphone" style="display: flex;flex-direction: row;margin-top: 6px;margin-left: 321px;">
              <div class="text14" >办公室地址：</div>
              <input disabled="disabled" class="input9" v-model="student.dz" :placeholder="student.dz"></input>
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
import vLeft from '../components/leftshow_s'
const axios=require('axios');
export default {
  name: "teacher_detail",
  components:{
    vTop,
    vLeft,
  },
  data(){
    return{
      genderindex:-1,
      accindex:-1,
      student:{
        num:'',
        name:'',
        password:'',
        academy:'',
        xl:"",
        zc:'',
        gender:"",
        email:'',
        qq:"",
        phone:"",
        kind:"",
        addr:"",
        dh:"",
        dz:"",
        introduction:''
      }
    }
  },
  activated:function(){
    this.student.name=this.$route.query.name
    console.log(this.$route.query.name)
    this.getStuInfo(this.student.name);

  },
  methods:{
    renew(){
      axios.post("/user/renewTeacher",{
        gh:this.student.num,
        xm:this.student.name,
        mm:this.student.password,
        yxh:this.accindex,
        xl:this.student.xl,
        zc:this.student.zc,
        xb:this.student.gender,
        yx:this.student.email,
        qq:this.student.qq,
        sjh:this.student.phone,
        zwjs:this.student.introduction,
        jglb:this.student.kind,
        szyjs:this.student.addr,
        bgsdh:this.student.dh,
        bgsdz:this.student.dz
      })
          .then(res=>{
            console.log(res)
            alert("修改成功")
          })
          .catch(err=>{
            console.log(err)
          })
    },
    getStuInfo(e){
      axios.post("/user/getTeacherByName",{
        xm:e
      })
          .then(res=>{
            console.log(res.data.res);
            let tmp=res.data.res;
            this.student.num=tmp.gh;
            this.student.name=tmp.xm;
            this.accindex=tmp.yxh;
            this.student.zc=tmp.zc;
            this.student.xl=tmp.xl;
            this.student.gender=tmp.xb;
            if(tmp.xb=="男"){
              this.genderindex=1
            }
            else if(tmp.xb=="女"){
              this.genderindex=2
            }
            else{
              this.genderindex=0
            }
            this.student.email=tmp.yx;
            this.student.qq=tmp.qq;
            this.student.phone=tmp.sjh;
            this.student.introduction=tmp.zwjs;
            this.student.dh=tmp.bgsdh;
            this.student.dz=tmp.bgsdz;
            this.student.kind=tmp.jglb;
            this.student.addr=tmp.szyjs;
          })
          .catch(err=>{
            console.log(err)
          })
    },
    selectac(e){
      if(e.target.selectedIndex==0){
        return
      }
      else{
        var  Select=document.getElementById("academyselect");
        var index=Select.selectedIndex;
        console.log(index)
        this.accindex=index;
        this.student.academy=Select.options[index].text
        console.log(this.student.academy);
      }
    },
    selectgender(e){
      if(e.target.selectedIndex==0){
        return
      }
      else{
        var  Select=document.getElementById("genderselect");
        var index=Select.selectedIndex;
        this.genderindex=index;
        this.student.gender=Select.options[index].text
        console.log(this.student.gender);
      }
    }
  }
}
</script>

<style scoped>
input{
  font-family: Adobe Heiti Std;
  color: #000000;
}
textarea{
  color: #000000;
}
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
  font-family: Adobe Heiti Std;
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
  font-family: Adobe Heiti Std;

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
  font-family: Adobe Heiti Std;
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
  font-family: Adobe Heiti Std;
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
  font-family: Adobe Heiti Std;
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
  font-family: Adobe Heiti Std;
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
  font-family: Adobe Heiti Std;
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
  font-family: Adobe Heiti Std;
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
  font-family: Adobe Heiti Std;
}
.text11{
  height: 24px;
  font-size: 25px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #858686;
  line-height: 1px;
  padding-top: 30px;
}
.text12{
  height: 24px;
  font-size: 25px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #858686;
  line-height: 1px;
  padding-top: 30px;
}
.text13{
  height: 24px;
  font-size: 25px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #858686;
  line-height: 1px;
  padding-top: 30px;
}
.text14{
  height: 24px;
  font-size: 25px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #858686;
  line-height: 1px;
  padding-top: 30px;
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
  line-height: 1px;
  margin-top: 35px;
  margin-left: 30px;
  color:#2C7DC3;
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