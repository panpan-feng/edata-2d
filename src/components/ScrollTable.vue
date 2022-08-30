<template>
  <div class="box">
    <table border="1" class="table_main">
      <thead>
        <tr>
          <th>工单号</th>
          <th>是否紧急</th>
          <th>工单状态</th>
          <th>报修科室</th>
          <th>维修事项</th>
          <th>维修地点</th>
          <th>备注</th>
          <th>派工时间</th>
          <th>处理人</th>
        </tr>
      </thead>
      <thead class="zindex">
        <tr>
          <th>工单号</th>
          <th>是否紧急</th>
          <th>工单状态</th>
          <th>报修科室</th>
          <th>维修事项</th>
          <th>维修地点</th>
          <th>备注</th>
          <th>派工时间</th>
          <th>处理人</th>
        </tr>
      </thead>
      <tbody :class="{ anim: animate == true }">
        <tr
          v-for="(item, index) in tableData"
          :key="index"
          :class="{
            red: item.gdStatusName === '待受理',
            yellow: item.gdStatusName === '待接收',
          }"
        >
          <td class="coll1" :title="item.code">{{ item.code }}</td>
          <td class="coll2" :title="item.isUrgentName">
            {{ item.isUrgentName }}
          </td>
          <td class="coll3" :title="item.gdStatusName">
            {{ item.gdStatusName }}
          </td>
          <td class="coll4" :title="item.deptName">{{ item.deptName }}</td>
          <td class="coll5" :title="item.items">{{ item.items }}</td>
          <td class="coll6" :title="item.palce">{{ item.palce }}</td>
          <td class="coll7" :title="item.remarks">{{ item.remarks }}</td>
          <td class="coll8" :title="item.distributeTime">
            {{ item.distributeTime }}
          </td>
          <td class="coll9" :title="item.userName">{{ item.userName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ScrollTable",
  props: {},
  data() {
    return {
      timer: "",
      animate: false,
      tableData: [],
      endId: "",
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      console.log(this.$http);
      this.axios.get("/data.json").then((res) => {
        console.log("res", res);
        this.tableData = res.data;
        this.endId = this.tableData[this.tableData.length - 1].id;
        console.log(this.endId);
        if (this.tableData.length > 10) {
          this.timer = setInterval(this.scroll, 2000);
        } else {
          clearInterval(this.timer);
        }
      });
    },
    scroll() {
      this.animate = true;
      setTimeout(() => {
        this.tableData.push(this.tableData[0]);
        this.tableData.shift();
        this.animate = false;
        if (this.tableData[0].id === this.endId) {
          // console.log('请求刷新数据')
          this.getList();
          clearInterval(this.timer);
        }
      }, 100);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 400px;
  padding: 10px;
  overflow: hidden;
  background: rgba(6, 6, 122, 0.4);
}
.table_main {
  width: 100%;
  text-align: center;
  border: 1px solid #86c7ff;
  color: #fff;
  position: relative;
}
.table_main tr {
  line-height: 32px;
}
.table_main {
  thead {
    width: 100%;
    line-height: 40px;
    font-size: 16px;
    display: table;
    table-layout: fixed;
    border-bottom: none;
    box-sizing: border-box;
  }
}
.zindex {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  background: #10107a;
  border-bottom: none;
}
.zindex tr th {
  border-bottom: none;
}
.table_main thead th {
  font-weight: 300;
  table-layout: fixed;
  box-sizing: border-box;
}

.table_main {
  tbody {
    display: block;
    width: 100%;
    background: rgba(6, 6, 122, 0.6);
  }
}
.table_main tbody::-webkit-scrollbar {
  display: none;
}
.table_main tbody tr {
  display: table;
  table-layout: fixed;
  width: 100%;
}
.table_main tbody tr td {
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.anim {
  transition: all 0.1s;
  margin-top: -32px;
}

.red {
  color: #ff0000;
}
.yellow {
  color: #ffcc00;
}
</style>
