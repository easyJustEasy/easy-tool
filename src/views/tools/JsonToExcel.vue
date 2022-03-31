<template>
  <div class="container-fluid p-2">
    <el-row class="mb-4">
      <el-button type="primary" @click="formatData(1)">格式化</el-button>
      <el-button type="success" @click="exportData(2)">导出</el-button>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="18">
        <el-input v-model="myText" type="textarea" rows="100" />
      </el-col>
    </el-row>    
  </div>
</template>

<script>
import * as X from "xlsx"
import FileSaver from "file-saver"
export default {
  data() {
    return {
      myText: "",
    };
  },
  created() {},
  methods: {
    formatData() {
      let data = JSON.parse(this.myText);
      this.myText = JSON.stringify(data, null, 2);
    },
    exportData() {
      try {
        let valData = JSON.parse(this.myText);
        this.export_json_to_excel("xlsx", "data", valData);
      } catch (e) {
        console.log(e);
      } finally {
      }
    },
    s2ab(s) {
      if (typeof ArrayBuffer !== "undefined") {
        let buf = new ArrayBuffer(s.length);
        let view = new Uint8Array(buf);
        for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
        return buf;
      } else {
        let buf = new Array(s.length);
        for (let i = 0; i !== s.length; ++i) buf[i] = s.charCodeAt(i) & 0xff;
        return buf;
      }
    },
    export_json_to_excel(type, fn, json) {
      let sheet = X.utils.json_to_sheet(json);
      let wb = X.utils.book_new();
      X.utils.book_append_sheet(wb, sheet, "sheet");
      let wbout = X.write(wb, {
        bookType: type,
        bookSST: true,
        type: "binary",
      });
      let fname = (fn || "test") + "." + type;
      try {
        FileSaver.saveAs(
          new Blob([this.s2ab(wbout)], {
            type: "application/octet-stream",
          }),
          fname
        );
      } catch (e) {
        if (typeof console !== "undefined") console.log(e, wbout);
      }
      return wbout;
    },
  },
}
</script>
