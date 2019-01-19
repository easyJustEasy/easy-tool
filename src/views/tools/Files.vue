
<template lang="html">
<div class="files-hander p-2">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <form class="form-inline">
                    <a href="javascript:void(0);" class="btn btn-outline-secondary" @click="clearBox(1)">清空左</a>
                    <a href="javascript:void(0);" class="btn btn-outline-secondary" @click="clearBox(2)">清空右</a>
                    <a href="javascript:void(0);" class="btn btn-outline-secondary" @click="dereplicationBox(1)">去重</a>
                    <a href="javascript:void(0);" class="btn btn-outline-secondary" @click="replaceBox()">格式化</a>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
              <b-form-textarea
                     v-model="oldText"
                     placeholder="Enter something"
                     :rows="20"
                     :max-rows="20">
              </b-form-textarea>
            </div>
            <div class="col-md-6">
              <b-form-textarea
                     v-model="newText"
                     placeholder="Enter something"
                     :rows="20"
                     :max-rows="20">
              </b-form-textarea>
            </div>
        </div>
    </div>
    <a id="totopicon" href="#" class="btn btn-default">
        <i class="glyphicon glyphicon-chevron-up"></i>
    </a>
</div>

</template>

<script>
export default {
    data () {
        return {
            oldText: '',
            newText: '',
            data: []
        }
    },
    created () {},
    methods: {
        clearBox (type) {
            switch (type) {
            case 1:
                this.oldText = ''
                break
            case 2:
                this.newText = ''
                break
            default:
            }
        },
        sortBox () {
            let oldText = this.oldText
            let newText = this.newText
            let arr = this.toArray(oldText)
            arr.sort()
            arr = arr.map(function (itm, index) {
                itm = itm.replace(/(^\s*)|(\s*$)/g, '')
                return itm
            })
            newText = arr.join('\r\n')
            this.newText = newText
            this.data = arr
        },
        dereplicationBox (w) {
            let newText = this.newText
            let newArray = this.toArray(newText)
            let oldText = this.oldText
            let oldArray = this.toArray(oldText)
            let arr = w === 1 ? oldArray : newArray
            arr = arr.map(function (itm, index) {
                itm = itm.replace(/"/g, '')
                return itm
            })
            arr = this.deleteRepetion(arr)
            newText = arr.join('\r\n')
            this.newText = newText
            this.data = arr
        },
        replaceBox () {
            this.sortBox()
            this.dereplicationBox(1)
            let arr = this.data
            arr.sort(function (a, b) {
                return a - b
            })
            let Delete = []
            let Other = []
            arr = arr.map((itm, index) => {
                let d = itm.indexOf('D /') > -1
                if (itm.indexOf('src/main/webapp') > -1) {
                    itm = itm.substr(itm.indexOf('src/main/webapp') + 15, itm.length)
                } else if (itm.indexOf('src/main/java') > -1) {
                    itm =
            '/WEB-INF/classes' +
            itm.substr(itm.indexOf('src/main/java') + 13, itm.length)
                    itm = itm.replace('.java', '.class')
                } else if (itm.indexOf('WEB-INF/classes') > -1) {
                    itm = '/' + itm.substr(itm.indexOf('WEB-INF/classes'), itm.length)
                } else if (itm.indexOf('src/main/resources') > -1) {
                    itm =
            '/WEB-INF/classes' +
            itm.substr(itm.indexOf('src/main/resources') + 18, itm.length)
                } else if (itm.indexOf('CST') > -1) {
                    return ''
                } else if (itm.indexOf('src/main/html') > -1) {
                    return ''
                } else if (itm.indexOf('----------') > -1) {
                    return ''
                } else if (itm.indexOf('r') === 0) {
                    return ''
                } else if (itm.indexOf('Changed paths') === 0) {
                    return ''
                }
                if (d) {
                    Delete.push(itm)
                } else {
                    Other.push(itm)
                }
                return itm
            })
            Delete.sort(sort)
            Other.sort(sort)

            function sort (a, b) {
                if (a.indexOf('/') > -1) {
                    return -1
                }
                if (b.indexOf('/') > -1) {
                    return 1
                }
                return a - b
            }
            arr = [
                '------------------------\r\n删除的文件\r\n------------------------\r\n'
            ].concat(
                Delete,
                [
                    '\r\n------------------------\r\n上线文件\r\n------------------------\r\n'
                ],
                Other
            )
            arr = this.deleteRepetion(arr)
            let newText = arr.join('\r\n')
            this.newText = newText
        },
        deleteRepetion (arr) {
            let arrTable = {}

            let arrData = []
            for (let i = 0; i < arr.length; i++) {
                if (!arrTable[arr[i]]) {
                    arrTable[arr[i]] = true
                    arrData.push(arr[i])
                }
            }
            return arrData
        },
        toArray (txt) {
            return txt.split(/[\r+\n+|\r+|\n+]+/)
        }
    }
}
</script>
