
<template >
  <div class="container-fluid p-2">
    <el-row class="mb-4">
      <el-button type="primary" @click="clearBox(1)">清空左</el-button>
      <el-button type="success" @click="clearBox(2)">清空右</el-button>
      <el-button type="info" @click="dereplicationBox(1)">去重</el-button>
      <el-button type="warning" @click="replaceBox()">格式化</el-button>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-input v-model="oldText" type="textarea" rows="100" />
      </el-col>
      <el-col :span="12">
        <el-input v-model="newText" type="textarea"  rows="100"/>
      </el-col>
    </el-row>  
  </div>
</template>

<script >
export default {
  data() {
    return {
      oldText: "",
      newText: "",
      data: [],
    };
  },
  created() {},
  methods: {
    clearBox(type) {
      switch (type) {
        case 1:
          this.oldText = "";
          break;
        case 2:
          this.newText = "";
          break;
        default:
      }
    },
    sortBox() {
      let oldText = this.oldText;
      let newText = this.newText;
      let arr = this.toArray(oldText);
      arr.sort();
      arr = arr.map(function (itm, index) {
        itm = itm.replace(/(^\s*)|(\s*$)/g, "");
        return itm;
      });
      newText = arr.join("\r\n");
      this.newText = newText;
      this.data = arr;
    },
    dereplicationBox(w) {
      let newText = this.newText;
      let newArray = this.toArray(newText);
      let oldText = this.oldText;
      let oldArray = this.toArray(oldText);
      let arr = w === 1 ? oldArray : newArray;
      arr = arr.map(function (itm, index) {
        itm = itm.replace(/"/g, "");
        return itm;
      });
      arr = this.deleteRepetion(arr);
      newText = arr.join("\r\n");
      this.newText = newText;
      this.data = arr;
    },
    replaceBox() {
      this.sortBox();
      this.dereplicationBox(1);
      let arr = this.data;
      arr.sort(function (a, b) {
        return a - b;
      });
      let Delete = [];
      let Other = [];
      arr = arr.map((itm, index) => {
        let d = itm.indexOf("D /") > -1;
        if (itm.indexOf("src/main/webapp") > -1) {
          itm = itm.substr(itm.indexOf("src/main/webapp") + 15, itm.length);
        } else if (itm.indexOf("src/main/java") > -1) {
          itm =
            "/WEB-INF/classes" +
            itm.substr(itm.indexOf("src/main/java") + 13, itm.length);
          itm = itm.replace(".java", ".class");
        } else if (itm.indexOf("WEB-INF/classes") > -1) {
          itm = "/" + itm.substr(itm.indexOf("WEB-INF/classes"), itm.length);
        } else if (itm.indexOf("src/main/resources") > -1) {
          itm =
            "/WEB-INF/classes" +
            itm.substr(itm.indexOf("src/main/resources") + 18, itm.length);
        } else if (itm.indexOf("CST") > -1) {
          return "";
        } else if (itm.indexOf("src/main/html") > -1) {
          return "";
        } else if (itm.indexOf("----------") > -1) {
          return "";
        } else if (itm.indexOf("r") === 0) {
          return "";
        } else if (itm.indexOf("Changed paths") === 0) {
          return "";
        }
        if (d) {
          Delete.push(itm);
        } else {
          Other.push(itm);
        }
        return itm;
      });
      Delete.sort(sort);
      Other.sort(sort);

      function sort(a, b) {
        if (a.indexOf("/") > -1) {
          return -1;
        }
        if (b.indexOf("/") > -1) {
          return 1;
        }
        return a - b;
      }
      arr = [
        "------------------------\r\n删除的文件\r\n------------------------\r\n",
      ].concat(
        Delete,
        [
          "\r\n------------------------\r\n上线文件\r\n------------------------\r\n",
        ],
        Other
      );
      arr = this.deleteRepetion(arr);
      let newText = arr.join("\r\n");
      this.newText = newText;
    },
    deleteRepetion(arr) {
      let arrTable = {};

      let arrData = [];
      for (let i = 0; i < arr.length; i++) {
        if (!arrTable[arr[i]]) {
          arrTable[arr[i]] = true;
          arrData.push(arr[i]);
        }
      }
      return arrData;
    },
    toArray(txt) {
      return txt.split(/[\r+\n+|\r+|\n+]+/);
    },
  },
};
</script>
