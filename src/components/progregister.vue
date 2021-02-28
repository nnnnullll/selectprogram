<template>
    <div class="notebox">
        <v-top></v-top>
        <div class="mainbox">
            <v-left></v-left>
            <div class="rightbox">
                <div class="righttitle">项目报名</div>
                <div class="rightline"></div>
                <!-- 要改的展示的模块就是这里 -->
                <div class="rightmainbox">
                    <table class="list" border="1" cellpadding="0" cellspacing="0">
                        <thead>
                        <tr>
                            <th style="width: 90px;">序号</th>
                            <th style="width: 310px;">课题名</th>
                            <th style="width: 143px;">课题性质</th>
                            <th style="width: 143px;">课题来源</th>
                            <th style="width: 143px;">指导老师</th>
                            <th style="width: 123px;">已报人数 / 限报人数</th>
                            <th style="width: 168px;">课题报名</th>
                        </tr>
                        </thead>
                        <tr v-for="(item,index) in curlists" :key="item.xuhao">
                            <td>{{item.xuhao}}</td>
                            <td><a class="target" href="javascript:void(0);" @click="todetail(index)">{{item.ktm}}</a>
<!--                            <td><a class="target" href="javascript:void(0);" @click="todetail(index)" target="_blank">{{item.ktm}}</a>-->
                            </td>
                            <td>{{item.ktxz}}</td>
                            <td>{{item.ktly}}</td>
                            <td>{{item.xm}}</td>
                            <td>{{item.xkrs}}/{{item.xbrs}}</td>
                            <td>
                                <el-button v-if="testBM(index)"
                                           @click="handleButtonClick($event,index)"
                                           :style="{background:'cornflowerblue'},{height:'26px'},{width:'80%'}">取消报名
                                </el-button>
                                <el-button v-else @click="handleButtonClick($event,index)"
                                           :style="{background:'cornflowerblue'},{height:'26px'},{width:'80%'}">报 名
                                </el-button>
                            </td>
                        </tr>
                    </table>
                    <table class="page">
                        <td>
                            <el-button @click="fstPage()" size="small" type="primary" round>首页</el-button>
                            <el-button @click="prevPage()" size="small" type="primary" round>上一页</el-button>
                            <el-button @click="nextPage()" size="small" type="primary" round>下一页</el-button>
                            <el-button @click="lastPage()" size="small" type="primary" round>尾页</el-button>
                            <input type="text" id="pageNo" class="page_no"/>
                            <el-button @click="turnto()" size="small" type="primary" round>转到</el-button>
                            &nbsp;总记录条数{{totalCount}}条，当前第{{page}}/{{totalPage}}页
                        </td>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import vTop from '../components/topshow'
  import vLeft from '../components/leftshow_s'

  const axios = require('axios')
  export default {
    name: 'progregister',
    components: {
      vTop,
      vLeft,
    },
    data () {
      return {
        relists: [],
        page: 0,
        totalCount: 0,
        pageSize: 15,
        totalPage: 0,
        curlists: [],
        myselect: -1
      }
    },
    activated: function () {
      this.getRelist()
      this.getMyselect()
    },
    mounted: function () {

    },
    methods: {
      getRelist () {
        axios.post('http://localhost:8010/getrelist')
          .then((response) => {
            this.relists = response.data
            if(this.relists.length!=0){
              this.page=1
              this.totalCount = this.relists.length
              if (this.totalCount % this.pageSize == 0) {
                this.totalPage = parseInt(this.totalCount / this.pageSize)
              } else {
                this.totalPage = parseInt(this.totalCount / this.pageSize) + 1
              }
              var end = this.pageSize
              if (this.pageSize > this.totalCount) {
                end = this.totalCount
              }
              this.curlists = this.relists.slice(0, end)
            }
          }).catch(function (error) { // 请求失败处理
          console.log('---查询出错---！' + error)
        })
      },
      getMyselect () {
        // axios.post('http://localhost:8010/getmyselect?xh=2')
          axios.post('http://localhost:8010/getmyselect?xh='+localStorage.getItem('xh'))
          .then((response) => {
            if (response.data != 0) {
              this.myselect = response.data
            }
          }).catch(function (error) { // 请求失败处理
          console.log('---查询出错---！' + error)
        })
      },
      studentSign1 (kth, gh, xh) {
        alert('kth=' + kth + ',gh=' + gh + ',xh=' + xh)
        axios.post('http://localhost:8010/studentSign1?kth=' + kth + '&gh=' + gh + '&xh=' + xh)
          // http://localhost:8010/studentSign?kth=1&gh=1&xh=2
          .then((response) => {
            this.getRelist()
          }).catch(function (error) { // 请求失败处理
          console.log('---查询出错---！' + error)
        })
      },
      studentState1 (xh) {
        axios.post('http://localhost:8010/studentState1?xh=' + xh)
          .then((response) => {
          }).catch(function (error) { // 请求失败处理
          console.log('---查询出错---！' + error)
        })
      },
      studentSign0 (kth, gh, xh) {
        axios.post('http://localhost:8010/studentSign0?kth=' + kth + '&gh=' + gh + '&xh=' + xh)
          // http://localhost:8010/studentSign?kth=1&gh=1&xh=2
          .then((response) => {
            this.getRelist()
          }).catch(function (error) { // 请求失败处理
          console.log('---查询出错---！' + error)
        })
      },
      studentState0 (xh) {
        axios.post('http://localhost:8010/studentState0?xh=' + xh)
          .then((response) => {
            console.log(response)
          }).catch(function (error) { // 请求失败处理
          console.log('---查询出错---！' + error)
        })
      },
      handleButtonClick (e, index) {
        var item = this.relists[index]

        if (e.currentTarget.innerText === '取消报名') {
          // this.studentSign0(item.kth, item.gh, 2)
          this.studentSign0(item.kth, item.gh, parseInt(sessionStorage.getItem(xh)))
          // this.studentState0(2)
          this.studentState0(parseInt(sessionStorage.getItem(xh)))
          e.currentTarget.innerText = '报 名'
          alert('已取消报名')
        } else {
          // this.studentState1(2)
          this.studentState1(parseInt(sessionStorage.getItem(xh)))
          // this.studentSign1(item.kth, item.gh, 2)
          this.studentSign1(item.kth, item.gh, parseInt(sessionStorage.getItem(xh)))
          e.currentTarget.innerText = '取消报名'
          alert('成功报名')
        }
        this.getRelist()
        window.location.reload()
      },
      fstPage () {
        this.page = 1
        var end = this.pageSize
        if (end > this.totalCount) {
          end = this.totalCount
        }
        this.curlists = this.relists.slice(0, end)
      },
      prevPage () {
        var curpage = this.page
        if (curpage <= 2) {
          this.page = 1
        } else {
          this.page = curpage - 1
        }
        var start = (this.page - 1) * this.pageSize
        var end = start + this.pageSize
        if (end > this.totalCount) {
          end = this.totalCount
        }
        this.curlists = this.relists.slice(start, end)
      },
      nextPage () {
        var curpage = this.page
        if (curpage >= this.totalPage - 1) {
          this.page = this.totalPage
        } else {
          this.page = curpage + 1
        }
        var start = (this.page - 1) * this.pageSize
        var end = start + this.pageSize
        if (end > this.totalCount) {
          end = this.totalCount
        }
        this.curlists = this.relists.slice(start, end)
      },
      lastPage () {
        this.page = this.totalPage
        var start = (this.page - 1) * this.pageSize
        var end = start + this.pageSize
        if (end > this.totalCount) {
          end = this.totalCount
        }
        this.curlists = this.relists.slice(start, end)
      },
      turnto () {
        var pageno = document.getElementById('pageNo').value
        alert('turn to page=' + pageno)
        if (pageno >= this.totalPage) {
          this.lastPage()
        } else if (pageno <= 1) {
          this.fstPage()
        } else {
          var start = (pageno - 1) * this.pageSize
          var end = start + this.pageSize
          this.curlists = this.relists.slice(start, end)
        }
      },
      testBM: function (index) {
        return this.relists[index].kth == this.myselect
      },
      todetail: function (index) {
        let routeUrl = this.$router.resolve({
          path: "/titledetail",
          query: {kth:this.relists[index].kth}
        });
        window.open(routeUrl.href, '_blank');
      }
    }
}
</script>

<style scoped>
.title{
  font-size: 40px;
  text-align: center;
}
.box{
  /*margin-top: 10%;*/
  width: 400px;
  /*background-color: #dee5ed;*/
  /*background-color: #f5f9fd;*/

}
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
    .rightmainbox {
        width: 1280px;
        height: 688px;
    }

    .list {
        width: 1124px;
        height: 60px;
        margin-top: 20px;
        margin-left: 50px;
    }

    .list thead {
        height: 40px;
        color: white;
        font-size: 20px;
        line-height: 40px;
        font-weight: 300;
        background-color: #2C7DC3;

    }

    .list tr {
        height: 30px;
        text-align: center;
    }

    .list tr a {
        color: #2C7DC3;
        text-decoration: none;
    }

    .list tr button {
        font-size: 16px;
        border-radius: 4px;
        padding: 0 20px;
        border: none;
    }

    .page {
        padding-top: 20px;
        width: 1000px;
        margin: 0 auto;
        text-align: center;
        height: 24px;
        line-height: 20px;
    }

    .page_no {
        width: 60px;
    }

</style>
