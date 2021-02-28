<template>
  <div class="notebox">
    <v-top></v-top>
    <div class="mainbox">
      <v-left></v-left>
      <div class="rightbox">
        <div class="righttitle">公告发布</div>
        <div class="rightline"></div>
        <!-- 要改的展示的模块就是这里 -->
        <div class="rightmainbox">
            <el-form   :model="noteForm" :rules="rules" ref="noteForm" label-width="100px" class="demo-noteForm">
              <el-form-item class="notelabel" label="公告标题" prop="bt">
                <el-input class="notelabel"  v-model="noteForm.bt"></el-input>
              </el-form-item>
              <el-form-item class="notelabel"  label="公告对象" prop="dx">
                <el-radio-group  v-model="noteForm.dx">
                  <el-radio class="notelabel"  label="老师"></el-radio>
                  <el-radio class="notelabel"  label="学生"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item class="notelabel" label="公告内容" prop="nr">
                <el-input class="notelabel2"  type="textarea" v-model="noteForm.nr"></el-input>
              </el-form-item>
              <el-form-item >
                <el-button  type="primary" @click="submitForm('noteForm')">立即创建</el-button>
                <el-button  @click="resetForm('noteForm')">重置</el-button>
              </el-form-item>
            </el-form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vTop from '../components/topshow';
import vLeft from '../components/leftshow_c'
const axios=require('axios');
export default {
  name: "addnote",
  components:{
    vTop,
    vLeft,
  },
  data(){
    return{
      noteForm: {
          bt: '',
          dx: '',
          nr: ''
        },
        rules: {
          bt: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur' }
          ],
          dx: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          nr: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      
    }
  },
  mounted:function(){
    
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // console.log(this.noteForm)
          axios.post('http://localhost:8010/addnote?bt='+this.noteForm.bt+'&nr='+this.noteForm.nr+'&dx='+this.noteForm.dx+'&rq='+this.current())
          .then((response)=>{
            // console.log(response)
            alert('发布成功!');
            this.$refs[formName].resetFields();
          }).catch(function (error) { // 请求失败处理
            console.log("---查询出错---！"+error);
          })
        } else {
          alert('发布失败!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>
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
  width: 1225px;
  height: 688px;
  overflow: auto;
}
.demo-noteForm{
  width: 1180px;
  height: 638px;
  margin-top: 50px;
  margin-left: 30px;
  margin-right: 50px;
}
.notelabel>>>.el-form-item__label{
  font-size: 18px;
}
.notelabel>>>.el-input__inner{
  font-size: 18px;
}
.notelabel>>>.el-radio__label{
  font-size: 18px;
}
.notelabel2>>>.el-textarea__inner{
  font-size: 18px;
  min-height: 350px !important;
}
</style>
