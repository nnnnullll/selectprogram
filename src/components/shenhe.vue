<template>
    <div class="notebox">
        <v-top></v-top>
        <div class="mainbox">
            <v-left></v-left>
            <div class="rightbox">
                <div class="righttitle">项目审核</div>
                <div class="rightline"></div>
                <!-- 要改的展示的模块就是这里 -->
                <div class="rightmainbox">
                    <table class="list" border="1" cellpadding="0" cellspacing="0">
                        <thead>
                        <tr>
                            <th style="width: 112px;">课题号</th>
                            <th style="width: 280px">课题名</th>
                            <th style="width: 168px">课题性质</th>
                            <th style="width: 168px">课题来源</th>
                            <th style="width: 112px">限报人数</th>
                            <th style="width: 280px">课题审核</th>
                        </tr>
                        </thead>
                        <tr v-for="(item,index) in curlists" :key="item.index">
                            <td style="width: 112px;">{{item.kth}}</td>
                            <td style="width: 280px">{{item.ktm}}</td>
                            <td style="width: 168px">{{item.ktxz}}</td>
                            <td style="width: 168px">{{item.ktly}}</td>
                            <td style="width: 112px">{{item.xbrs}}</td>
                            <td style="width:280px">
                                <button @click="contitlePass($event,index)" style="background-color: #2C7DC3">
                                    通过审核
                                </button>
                                <button @click="contitleFail($event,index)" style="background-color: #2C7DC3">
                                    无法通过
                                </button>
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
                            &nbsp;总课题{{totalTCount}}个，当前第{{Tpage}}/{{totalTPage}}页
                        </td>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import vTop from '../components/topshow'
  import vLeft from '../components/leftshow_c'

  const axios = require('axios')
  export default {
    name: 'shenhe',
    components: {
      vTop,
      vLeft,
    },
    data () {
      return {
        titles: [],
        Tpage: 0,
        totalTCount: 0,
        pageSize: 15,
        totalTPage: 0,
        curlists: [],
      }
    },
    activated () {
      this.getAllTitles()
    },
    mounted: function () {

    },
    methods: {
      contitlePass(e,index){
        this.$confirm('此操作将审核通过该课题, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.titlePass(e,index)
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消操作'
            });          
          });
      },
       contitleFail(e,index){
        this.$confirm('此操作将退回该课题, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.titleFail(e,index)
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消操作'
            });          
          });
      },
      getAllTitles: function () {
        axios.post('http://localhost:8010/getalltitles')
          .then((response) => {
            console.log(response.data)
            this.titles = response.data
            if (this.titles.length != 0) {
              this.page = 1
              this.totalTCount = this.titles.length
              if (this.totalTCount % this.pageSize == 0) {
                this.totalTPage = parseInt(this.totalTCount / this.pageSize)
              } else {
                this.totalTPage = parseInt(this.totalTCount / this.pageSize) + 1
              }
              var end = this.pageSize
              if (this.pageSize > this.totalTCount) {
                end = this.totalTCount
              }
              this.curlists = this.titles.slice(0, end)
            }
          }).catch(function (error) { // 请求失败处理
          console.log('---查询出错---！' + error)
        })
      },
      titlePass (e, index) {
        var item = this.curlists[index]
        axios.post('http://localhost:8010/settitlestate1?kth=' + item.kth)
          .then((response) => {
            if (response.data != 0) {
              this.getAllTitles()
              window.location.reload()
            }
          }).catch(function (error) { // 请求失败处理
          console.log('---查询出错---！' + error)
        })
      },
      titleFail (e, index) {
        var item = this.curlists[index]
        axios.post('http://localhost:8010/settitlestate3?kth=' + item.kth)
          .then((response) => {
            if (response.data != 0) {
              this.getAllTitles()
              window.location.reload()
            }
          }).catch(function (error) { // 请求失败处理
          console.log('---查询出错---！' + error)
        })
      },
      fstPage () {
        this.page = 1
        var end = this.pageSize
        if (end > this.totalCount) {
          end = this.totalCount
        }
        this.curlists = this.titles.slice(0, end)
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
        this.curlists = this.titles.slice(start, end)
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
        this.curlists = this.titles.slice(start, end)
      },
      lastPage () {
        this.page = this.totalPage
        var start = (this.page - 1) * this.pageSize
        var end = start + this.pageSize
        if (end > this.totalCount) {
          end = this.totalCount
        }
        this.curlists = this.titles.slice(start, end)
      },
      turnto () {
        var pageno = document.getElementById('pageNo').value
        if (pageno >= this.totalPage) {
          this.lastPage()
        } else if (pageno <= 1) {
          this.fstPage()
        } else {
          var start = (pageno - 1) * this.pageSize
          var end = start + this.pageSize
          this.curlists = this.titles.slice(start, end)
        }
      },
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

    .list {
        width: 1124px;
        height: 60px;
        margin-top: 20px;
        margin-left: 50px;
        margin-bottom: 0;
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


    .list td button {
        width: 40%;
        font-size: 16px;
        border-radius: 4px;
        padding: 0;
        border: none;
        line-height: 26px;
        color: white;
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



