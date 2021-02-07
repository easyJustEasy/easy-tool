export default [
    {
        title: '智联校园ncpms',
        startDate: '2018.07',
        endDate: '至今',
        desc: `前后端分离
      前端使用vue
      后端使用springboot，mybatis，rabbitmq等
      部署在docker环境
      框架搭建，页面编写，后端接口编写
      项目链接: http://ncpm.zhaopin.com`
    },
    {
        title: '智联校园cpms',
        startDate: '2015.09',
        endDate: '至今',
        desc: `cpms辅助智联校园业务流转的系统，根据校园部门的不同业务场景，开发出来的相关功能。项目后台使用了springmvc，定时器，javamail等，前端使用了gulp，webpack，knockout，bootstrap等流行框架。某些模块设计与开发`
    },

    {
        title: '航班动态统计系统',
        startDate: '2012.05',
        endDate: '2013.03',
        desc: `这个项目是毕业之后做的第一个大型项目，用来给机场做航班统计用，前端使用的是Flex，目前此系统部署在杭州萧山机场`
    },
    {
        title: '南宁航班信息显示系统',
        startDate: '2014.04',
        endDate: '2015.04',
        desc: `项目包括两个部分：<br>
      1.AISS（机场数据与航显数据对接项目）：机场(AODB)通过IB(我们公司的中间件(SOA))发 布 航班数据，AISS订阅， 并做相应的处理到FIDS数据库。
      用到技术：spring+mybatis(generator)+activeMQ。<br>
      2.FIDS（航班显示系统）：在正确的时间正确的地点(主要是显示屏)显示正确的航班。(需求很简单，业务有点复杂)。
      用到的技术：spring+hibernate+flex+webservice+线程(spring切面，hibernate 监听器实现日志等)。`
    },
    {
        title: '机场财务结算系统',
        startDate: '2013.04',
        endDate: '2014.09',
        desc: `财务收益结算系统项目大致业务流程：机场完成运营之后，通过机组人员提交的一些服务与资源，根据民航局下发的文件，对航空公司收取一定的收益。进行结算并导出相应的报表用到的技术：ssh2+extjs+ireport(导出报表用的工具)+线程(java自带的线程池来管理线程)
`
    },
    {
        title: '其他空管系统',
        startDate: '2012.05',
        endDate: '2015.09',
        desc: ` 1.报文解析系统：根据空管发来的报文，通过报文机交给pc串口，用java读取串口，然后解析为航班信息入库。<br>
      2.机场报表系统：根据机场数据库AODB中的数据做统计并导出相关的报表（excel，word等）。<br>
      3.航班动态信息统计系统：根据接收集成AODB中航班的动态信息变化，统计航班的动态（比如，到港多少，离港多少等），最后推送给FLEX端展示。<br>
      4.空管风险管理系统：空管各个部门录入风险，系统根据录入的风险分析，对一些高危隐患发出告警。还可以生成风险报告，导入风险报告等。<br>
      5.数据订阅系统：机场AODB中的数据是通过一个叫IB（activeMq中间件）的程序与子系统交换数据的，所以各个子系统都有一个订阅数据的小系统，此系统就是通过配置，去订阅AODB中不同的数据，如航班数据，机场的基础数据，资源分配数据等。`
    }
]