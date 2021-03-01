<template>
  <div class="notebox">
    <v-top></v-top>
    <div class="mainbox">
      <v-left></v-left>
      <div class="rightbox">
        <div class="righttitle">个人信息维护</div>
        <div class="rightline"></div>
        <!-- 要改的展示的模块就是这里 -->
        <div class="rightmainbox">
          <div class="rightbox_title">
            <div>学生信息</div>
          </div>
          <div class="studentform" style="display: flex;flex-direction: column;margin-top: 20px">
            <div class="studentnum" style="display: flex;flex-direction: row;margin-left: 394px">
              <div class="text1">学号：</div>
              <input :readonly="flag0?false:'readonly'" class="input1" v-model="student.num" :placeholder="student.num"></input>
              <div class="text1" style="margin-left: 5px" @click="changeFlag0">{{msg0}}</div>
            </div>
            <div class="studentname"  style="display: flex;flex-direction: row;margin-left: 394px;margin-top: 6px;">
              <div  class="text2">姓名：</div>
              <input :readonly="flag1?false:'readonly'" class="input2" v-model="student.name" :placeholder="student.name"></input>
              <div class="text2" style="margin-left: 5px" @click="changeFlag1">{{msg1}}</div>
            </div>
            <div class="studentpsw"  style="display: flex;flex-direction: row;margin-left: 394px;margin-top: 6px;">
              <div  class="text2">密码：</div>
              <input :readonly="flag2?false:'readonly'" class="input2" v-model="student.password" :placeholder="student.password"></input>
              <div class="text2" style="margin-left: 5px" @click="changeFlag2">{{msg2}}</div>
            </div>
            <div class="studentac" style="display: flex;flex-direction: row;margin-top: 6px;margin-left: 394px">
              <div class="text3">学院：</div>
              <select v-model="this.accindex" class="select1" id="academyselect" name="academyselect" @change="selectac($event)">
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
              <input :readonly="flag4?false:'readonly'" class="input4" v-model="student.major" :placeholder="student.major"></input>
              <div class="text4" style="margin-left: 5px"@click="changeFlag4">{{msg4}}</div>
            </div>
            <div class="studentgrade" style="display: flex;flex-direction: row;margin-left: 394px;margin-top: 6px;">
              <div  class="text5">年级：</div>
              <input :readonly="flag5?false:'readonly'" class="input5" v-model="student.grade" :placeholder="student.grade"></input>
              <div class="text5" style="margin-left: 5px" @click="changeFlag5">{{msg5}}</div>
            </div>
            <div class="studentgender" style="display: flex;flex-direction: row;margin-top: 6px;margin-left: 394px">
              <div class="text6">性别：</div>
              <select class="select2" v-model="this.genderindex" id="genderselect" name="genderselect" @change="selectgender($event)">
                <option value =0>请选择性别</option>
                <option value =1>男</option>
                <option value =2>女</option>
              </select>
            </div>
            <div class="studentemail" style="display: flex;flex-direction: row;margin-top: 6px;margin-left: 340px">
              <div class="text7" style="margin-left: 6px">电子邮箱：</div>
              <input :readonly="flag7?false:'readonly'" class="input7" v-model="student.email" :placeholder="student.email"></input>
              <div class="text7" style="margin-left: 5px" @click="changeFlag7">{{msg7}}</div>
            </div>
            <div class="studentqq" style="display: flex;flex-direction: row;margin-top: 6px;margin-left: 390px">
              <div class="text8" style="margin-left: 6px;">QQ：</div>
              <input :readonly="flag8?false:'readonly'" class="input8" v-model="student.qq" :placeholder="student.qq"></input>
              <div class="text8" style="margin-left: 5px" @click="changeFlag8">{{msg8}}</div>
            </div>
            <div class="studentphone" style="display: flex;flex-direction: row;margin-top: 6px;margin-left: 365px">
              <div class="text9" style="margin-left: 6px">手机号：</div>
              <input :readonly="flag9?false:'readonly'" class="input9" v-model="student.phone" :placeholder="student.phone"></input>
              <div class="text9" style="margin-left: 5px" @click="changeFlag9">{{msg9}}</div>
            </div>
            <div class="studentinfo" style="display: flex;flex-direction: row;margin-top: 6px;margin-left: 340px">
              <div class="text10" style="margin-left: 6px">个人简介：</div>
              <textarea style="min-height: 80px" :readonly="flag10?false:'readonly'" class="input10" v-model="student.introduction" :placeholder="student.introduction"></textarea>
              <div class="text10" style="margin-left: 5px" @click="changeFlag10">{{msg10}}</div>
            </div>
            <div class="confirmbtn" @click="renew">提交</div>
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
  name: "info",
  components:{
    vTop,
    vLeft,
  },
  data(){
    return{
      genderindex:-1,
      accindex:-1,
      msg0:"编辑",
      msg1:"编辑",
      msg2:"编辑",
      msg3:"编辑",
      msg4:"编辑",
      msg5:"编辑",
      msg6:"编辑",
      msg7:"编辑",
      msg8:"编辑",
      msg9:"编辑",
      msg10:"编辑",
      flag0:false,
      flag1:false,
      flag2:false,
      flag3:false,
      flag4:false,
      flag5:false,
      flag6:false,
      flag7:false,
      flag8:false,
      flag9:false,
      flag10:false,
      student:{
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
  activated:function(){
    this.getStuInfo();
  },
  methods:{
    renew(){
      axios.post("/user/renewstu",{
        xh:this.student.num,
        xm:this.student.name,
        mm:this.student.password,
        yxh:this.accindex,
        zy:this.major,
        nj:this.student.grade,
        xb:this.student.gender,
        yx:this.student.email,
        qq:this.student.qq,
        sjh:this.student.phone,
        zwjs:this.student.introduction,
      })
          .then(res=>{
            console.log(res)
            alert("修改成功")
          })
          .catch(err=>{
            console.log(err)
          })
    },
    getStuInfo(){
      axios.post("/user/getStuById",{
        xh:localStorage.getItem('xh'),
      })
          .then(res=>{
            console.log(res.data.res);
            let tmp=res.data.res;
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
    },
    changeFlag0(){
      if(this.flag0==false){
        this.flag0=true;
        this.msg0="保存"
      }
      else{
        this.flag0=false;
        this.msg0="编辑"
      }

    },
    changeFlag1(){
      if(this.flag1==false){
        this.flag1=true;
        this.msg1="保存"
      }
      else{
        this.flag1=false;
        this.msg1="编辑"
      }

    },
    changeFlag2(){
      if(this.flag2==false){
        this.flag2=true;
        this.msg2="保存"
      }
      else{
        this.flag2=false;
        this.msg2="编辑"
      }
    },
    changeFlag3(){
      if(this.flag3==false){
        this.flag3=true;
        this.msg3="保存"
      }
      else{
        this.flag3=false;
        this.msg3="编辑"
      }
    },
    changeFlag4(){
      if(this.flag4==false){
        this.flag4=true;
        this.msg4="保存"
      }
      else{
        this.flag4=false;
        this.msg4="编辑"
      }

    },
    changeFlag5(){
      if(this.flag5==false){
        this.flag5=true;
        this.msg5="保存"
      }
      else{
        this.flag5=false;
        this.msg5="编辑"
      }
    },
    changeFlag6(){
      if(this.flag6==false){
        this.flag6=true;
        this.msg6="保存"
      }
      else{
        this.flag6=false;
        this.msg6="编辑"
      }
    },
    changeFlag7(){
      if(this.flag7==false){
        this.flag7=true;
        this.msg7="保存"
      }
      else{
        this.flag7=false;
        this.msg7="编辑"
      }

    },
    changeFlag8(){
      if(this.flag8==false){
        this.flag8=true;
        this.msg8="保存"
      }
      else{
        this.flag8=false;
        this.msg8="编辑"
      }
    },
    changeFlag9(){
      if(this.flag9==false){
        this.flag9=true;
        this.msg9="保存"
      }
      else{
        this.flag9=false;
        this.msg9="编辑"
      }
    },
    changeFlag10(){
      if(this.flag10==false){
        this.flag10=true;
        this.msg10="保存"
      }
      else{
        this.flag10=false;
        this.msg10="编辑"
      }
    },
  }
}
</script>

<style scoped>
.confirmbtn{
  width: 217px;
  height: 41px;
  background: #2C7DC3;
  border-radius: 10px;
  text-align:center;
  font-size: 24px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #FFFFFF;
  margin-left: 550px;
  margin-top: 10px;
  margin-bottom: 20px;
}
.rightbox_title{
  width: 1124px;
  height: 40px;
  background: #2C7DC3;
  text-align: center;
  font-size: 24px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #FFFFFF;
  margin-left: 30px;
  margin-top: 12px;
}
.text{
  width: 50px;
  height: 24px;
  font-size: 25px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #858686;
  line-height: 1px;
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
  width: 1236px;
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
  width: 1225px;
  height: 688px;
  overflow: auto;
}
</style>