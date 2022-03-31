
<template>
  <div class="container-fluid p-2">
    <el-row class="mb-4">
      <input
        type="file"
        ref="excelFileInput"
        @change="changeFile"
        style="display: none"
      />
      <el-button type="primary" @click="selectFile(1)">选择文件</el-button>
      <el-select
        v-model="sheet"
        class="ml-2"
        placeholder=""
        @change="changeSheet"
      >
        <el-option
          v-for="item in sheets"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="18">
        <el-input v-model="myText" type="textarea" rows="100" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as X from "xlsx";
export default {
  data() {
    return {
      excel: null,
      myText: "",
      sheet: "",
      sheets: [""],
      data: {},
    };
  },
  created() {},
  methods: {
    selectFile() {
      this.$refs.excelFileInput.click();
    },
    changeSheet() {
      let json = this.data[this.sheet];
      this.myText = JSON.stringify(json, null, 2);
    },
    changeFile(e) {
      let f = this.excel || e.target.files[0];
      let that = this;
      if (f) {
        let reader = new FileReader();
        reader.readAsBinaryString(f);
        reader.onload = function (e) {
          let data = e.target.result;
          let wb;
          wb = X.read(data, {
            type: "binary",
          });
          that.process(wb);
        };
      }
    },
    process(wb) {
      let json = this.to_json(wb);
      this.data = json;
      this.myText = JSON.stringify(json, null, 2);
      try {
        this.sheets = wb.SheetNames;
        console.log(this.sheets);
      } catch (e) {
        this.sheets = [];
      }
    },
    to_json(workbook) {
      let result = {};
      workbook.SheetNames.forEach(function (sheetName) {
        let roa = X.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        if (roa.length > 0) {
          result[sheetName] = roa;
        }
      });
      return result;
    },
  },
};
</script>
<style lang="less">
.custom-file {
  width: auto;
}
</style>
