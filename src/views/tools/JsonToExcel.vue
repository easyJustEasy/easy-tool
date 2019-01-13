<style>
</style>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <form class="form-inline">
          <a href="javascript:void(0);" class="btn btn-outline-secondary" @click="formatData()">格式化</a>
          <a href="javascript:void(0);" class="btn btn-outline-secondary" @click="exportData()">导出</a>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <b-form-textarea v-model="myText" placeholder="Enter something" :rows="20" :max-rows="20"></b-form-textarea>
      </div>
    </div>
    <a id="totopicon" href="#" class="btn btn-default">
      <i class="glyphicon glyphicon-chevron-up"></i>
    </a>
  </div>
</template>

<script>
import X from 'xlsx'
import FileSaver from 'file-saver'
export default {
  data () {
    return {
      myText: ''
    }
  },
  created () {},
  methods: {
    formatData () {
      let data = JSON.parse(this.myText)
      this.myText = JSON.stringify(data, null, 2)
    },
    exportData () {
      try {
        let valData = JSON.parse(this.myText)
        this.export_json_to_excel('xlsx', 'data', valData)
      } catch (e) {
        console.log(e)
      } finally {
      }
    },
    s2ab (s) {
      if (typeof ArrayBuffer !== 'undefined') {
        let buf = new ArrayBuffer(s.length)
        let view = new Uint8Array(buf)
        for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xff
        return buf
      } else {
        let buf = new Array(s.length)
        for (let i = 0; i !== s.length; ++i) buf[i] = s.charCodeAt(i) & 0xff
        return buf
      }
    },
    export_json_to_excel (type, fn, json) {
      let sheet = X.utils.json_to_sheet(json)
      let wb = X.utils.book_new()
      X.utils.book_append_sheet(wb, sheet, 'sheet')
      let wbout = X.write(wb, {
        bookType: type,
        bookSST: true,
        type: 'binary'
      })
      let fname = (fn || 'test') + '.' + type
      try {
        FileSaver.saveAs(
          new Blob([this.s2ab(wbout)], {
            type: 'application/octet-stream'
          }),
          fname
        )
      } catch (e) {
        if (typeof console !== 'undefined') console.log(e, wbout)
      }
      return wbout
    }
  }
}
</script>
