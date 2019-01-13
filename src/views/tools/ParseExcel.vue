<style lang="less">
.custom-file {
  width: auto;
}
</style>

<template>
  <div class="files-hander">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <b-form inline>
            <b-form-group label label-for description>
              <b-form-file v-model="excel" class="mb-3 mr-8" plain @change="changeFile"></b-form-file>
            </b-form-group>
            <b-form-group label label-for description>
              <b-form-select v-model="sheet" :options="sheets" class="mb-3" @change="changeSheet"></b-form-select>
            </b-form-group>
          </b-form>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <b-form-textarea v-model="myText" placeholder="Enter something" :rows="20" :max-rows="20"></b-form-textarea>
        </div>
      </div>
    </div>
    <a id="totopicon" href="#" class="btn btn-default">
      <i class="glyphicon glyphicon-chevron-up"></i>
    </a>
  </div>
</template>

<script>
import X from 'xlsx'
export default {
  data () {
    return {
      excel: null,
      myText: '',
      sheet: '',
      sheets: [''],
      data: {}
    }
  },
  created () {},
  methods: {
    changeSheet () {
      let json = this.data[this.sheet]
      this.myText = JSON.stringify(json, null, 2)
    },
    changeFile (e) {
      let f = this.excel || e.target.files[0]
      let that = this
      if (f) {
        let reader = new FileReader()
        reader.readAsBinaryString(f)
        reader.onload = function (e) {
          let data = e.target.result
          let wb
          wb = X.read(data, {
            type: 'binary'
          })
          that.process(wb)
        }
      }
    },
    process (wb) {
      let json = this.to_json(wb)
      this.data = json
      this.myText = JSON.stringify(json, null, 2)
      try {
        this.sheets = wb.SheetNames
      } catch (e) {
        this.sheets = []
      }
    },
    to_json (workbook) {
      let result = {}
      workbook.SheetNames.forEach(function (sheetName) {
        let roa = X.utils.sheet_to_row_object_array(workbook.Sheets[sheetName])
        if (roa.length > 0) {
          result[sheetName] = roa
        }
      })
      return result
    }
  }
}
</script>
