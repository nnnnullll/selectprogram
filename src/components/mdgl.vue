<template>
    <div class="notebox">
        <v-top></v-top>
        <div class="mainbox">
            <v-left></v-left>
            <div class="rightbox">
                <div class="righttitle">我的课题</div>
                <div class="rightline"></div>
                <!-- 要改的展示的模块就是这里 -->
                <div class="rightmainbox">
                    <div style="margin-bottom: 30px" v-for="(item,index) in teacherSelects" :key="index">
                        <div class="notelist_title">
                            <div class="notelist_title_text">待匹配课题列表</div>
                        </div>
                        <div class="notelist_lan">
                            <div class="notelist_lan1">课题号</div>
                            <div class="notelist_lan2">发布时间</div>
                            <div class="notelist_lan3">课题内容</div>
                            <div class="notelist_lan4">报名情况</div>
                        </div>
                        <div class="notelistbox">
                            <div class="notelistrq">{{item.kt.kth}}</div>
                            <div class="notelistdx">{{item.kt.fbsj}}</div>
                            <div class="notelistnr">
                                <div class="notelistnr_bt">课题名：{{item.kt.ktm}}</div>
                                <div class="notelistnr_nr">课题介绍：{{item.kt.ktjs}}</div>
                            </div>
                            <div class="notelistsc" v-if="testShow(index)">待选择</div>
                            <div class="notelistsc" v-else>未选择</div>
                        </div>
                        <table class="select-table" border="1" cellpadding="0" cellspacing="0" v-if="testShow(index)">
                            <thead>
                            <th>年级</th>
                            <th>学号</th>
                            <th>姓名</th>
                            <th>性别</th>
                            <th>专业</th>
                            <th>均绩</th>
                            <th>选择</th>
                            </thead>
                            <tr v-for="(subitem,sindex) in teacherSelects[index].stuList" :key="sindex">
                                <td>{{subitem.nj}}</td>
                                <td>{{subitem.xh}}</td>
                                <td>{{subitem.xm}}</td>
                                <td>{{subitem.xb}}</td>
                                <td>{{subitem.zy}}</td>
                                <td>{{subitem.jj}}</td>
                                <td>
                                    <el-button @click="myselect(index,sindex)">选择</el-button>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div class="notelist_title">
                        <div class="notelist_title_text">已选择列表</div>
                    </div>
                    <div class="notelist_lan">
                        <div class="notelist_lan1">课题号</div>
                        <div class="notelist_lan2">发布时间</div>
                        <div class="notelist_lan3">课题内容</div>
                        <div class="notelist_lan4">报名情况</div>
                    </div>
                    <div v-for="(itemed,indexed) in teacherSelected" :key="indexed">
                        <div class="notelistbox">
                            <div class="notelistrq">{{itemed.kt.kth}}</div>
                            <div class="notelistdx">{{itemed.kt.fbsj}}</div>
                            <div class="notelistnr">
                                <div class="notelistnr_bt">课题名：{{itemed.kt.ktm}}</div>
                                <table class="selected-table" border="1" cellpadding="0" cellspacing="0">
                                    <tr v-for="(subitemed,sindexed) in teacherSelected[indexed].stuList"
                                        :key="sindexed">
                                        <td>{{subitemed.xh}}</td>
                                        <td>{{subitemed.xm}}</td>
                                        <td>{{subitemed.xb}}</td>
                                        <td>{{subitemed.sjh}}</td>
                                        <td>{{subitemed.yx}}</td>
                                    </tr>
                                </table>

                            </div>
                            <div class="notelistsc">已匹配</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import vTop from '../components/topshow'
  import vLeft from '../components/leftshow_t'

  const axios = require('axios')
  export default {
    name: 'mdgl',
    components: {
      vTop,
      vLeft,
    },
    data () {
      return {
        teacherSelects: [],
        teacherSelected: [],
      }
    },
    activated () {
      this.getlstktList()
      this.getprektList()
    },
    mounted: function () {

    },
    methods: {
      //在最终表的课题表
      getlstktList () {
        axios.post('http://localhost:8010/getlastktlist?gh=' + localStorage.getItem('gh'))
          .then((response) => {
            console.log(response.data)
            this.teacherSelected = response.data
          }).catch(function (error) { // 请求失败处理
          console.log('---查询出错---！' + error)
        })
      },
      //不在最终表但在预选表的课题表
      getprektList () {
        axios.post('http://localhost:8010/getprektlist?gh=' + localStorage.getItem('gh'))
          .then((response) => {
            console.log(response.data)
            this.teacherSelects = response.data
          }).catch(function (error) { // 请求失败处理
          console.log('---查询出错---！' + error)
        })
      },
      testShow: function (index) {
        if (this.teacherSelects[index].stuList != null) {
          return true
        } else {
          return false
        }
      },
      myselect: function (index, sindex) {
        var teacherselectKt = this.teacherSelects[index].kt
        var teacherselectStuList = this.teacherSelects[index].stuList
        var teacherselectStu = teacherselectStuList[sindex]

        //老师一轮接收学生阶段：被选学生选择1->2    最终完成课题进入最终表  且被选课题状态1->2
        this.addFinal(localStorage.getItem('gh'), teacherselectStu.xh, teacherselectKt.kth)
        this.titleState2(teacherselectKt.kth)
        this.studentState2(teacherselectStu.xh)
        alert('状态更改完毕')
        this.getlstktList()
        this.getprektList()
        location.reload()
      },
      addFinal (gh, xh, kth) {
        // alert("addFinal gh="+gh+" xh="+xh+" kth="+kth)
        axios.post('http://localhost:8010/addFinal?gh=' + gh + '&xh=' + xh + '&kth=' + kth)
          .then((response) => {
          }).catch(function (error) { // 请求失败处理
          console.log('---查询出错---！' + error)
        })
      },
      titleState2 (kth) {
        // alert("titleState2 kth="+kth)
        axios.post('http://localhost:8010/settitlestate2?kth=' + kth)
          .then((response) => {
          }).catch(function (error) { // 请求失败处理
          console.log('---查询出错---！' + error)
        })
      },
      studentState2 (xh) {
        // alert("studentState2 xh="+xh)
        axios.post('http://localhost:8010/studentState2?xh=' + xh)
          .then((response) => {
          }).catch(function (error) { // 请求失败处理
          console.log('---查询出错---！' + error)
        })
      }
    }
  }
</script>

<style scoped>
    .notebox {
        width: 1440px;
        height: 768px;
        font-family: SimHei;
    }

    .mainbox {
        width: 1440px;
        height: 718px;
        display: flex;
        flex-direction: row;
    }

    .rightbox {
        width: 1236px;
        height: 718px;
        display: flex;
        flex-direction: column;
    }

    .righttitle {
        width: 129px;
        height: 28px;
        font-size: 30px;
        font-family: SimHei;
        font-weight: 400;
        color: #2C7DC3;;
        line-height: 1px;
        margin-top: 35px;
        margin-left: 30px;
    }

    .rightline {
        width: 1186px;
        height: 1px;
        background: #C6CACE;
        margin-top: 5px;
        margin-left: 30px;
    }

    /* /////////////////////////// */
    .rightmainbox {
        width: 1225px;
        height: 688px;
        overflow: auto;
    }

    .notelist_title {
        width: 1124px;
        height: 40px;
        margin-top: 20px;
        margin-left: 50px;
        background-color: #2C7DC3;
    }

    .notelist_title_text {
        width: 100%;
        height: 20px;
        color: white;
        font-size: 20px;
        padding: 10px;
        font-weight: 700;
        text-align: center;
    }

    .notelist_lan {
        width: 1124px;
        height: 40px;
        margin-left: 50px;
        font-size: 20px;
        font-weight: 700;
        display: flex;
        flex-direction: row;
        border-bottom: #C6CACE solid 1px;
    }

    .notelist_lan1 {
        width: 120px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        border-left: #C6CACE solid 1px;
        border-right: #C6CACE solid 1px;
    }

    .notelist_lan2 {
        width: 120px;
        height: 40px;
        line-height: 40px;
        text-align: center;
    }

    .notelist_lan3 {
        width: 864px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-left: #C6CACE solid 1px;
        border-right: #C6CACE solid 1px;
    }

    .notelist_lan4 {
        width: 200px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-right: #C6CACE solid 1px;
    }

    .notelistbox {
        display: flex;
        flex-direction: row;
        width: 1124px;
        min-height: 40px;
        margin-left: 50px;
        font-size: 18px;
        border-bottom: #C6CACE solid 1px;
    }

    .notelistrq {
        width: 120px;
        min-height: 40px;
        display: table-cell;
        text-align: center;
        line-height: 40px;
        border-left: #C6CACE solid 1px;
        border-right: #C6CACE solid 1px;
    }

    .notelistdx {
        width: 120px;
        min-height: 40px;
        line-height: 40px;
        text-align: center;
        vertical-align: middle;
    }

    .notelistnr {
        width: 864px;
        min-height: 40px;
        text-align: left;
        vertical-align: middle;
        border-left: #C6CACE solid 1px;
        border-right: #C6CACE solid 1px;
        display: flex;
        flex-direction: column;
    }

    .notelistnr_bt {
        font-weight: 700;
        line-height: 40px;
    }

    .notelistnr_nr {
        line-height: 30px;
    }

    .notelistsc {
        width: 200px;
        min-height: 40px;
        line-height: 40px;
        text-align: center;
        vertical-align: middle;
        border-right: #C6CACE solid 1px;
    }

    .select-table {
        width: 1124px;
        min-height: 40px;
        margin-left: 50px;
        font-size: 18px;
        line-height: 30px;
        margin-top: 10px;
        border-bottom: #C6CACE solid 1px;
        text-align: center;
    }

    .select-table thead {
        background-color: #DCE7F0;
    }

    .selected-table{
        width: 90%;
        margin: 5px auto;
    }
    .selected-table tr{
        text-align: center;
        background-color: rgba(230,255,255,0.5);
    }
</style>
