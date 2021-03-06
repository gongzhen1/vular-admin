export default {
  "name" : "vular-list-page",
  "props" : {
    "title" : "产品列表",
    "vularId" : "product-list-1",
    defaultModel:{
      keywords:'',
      page:1,
      pagination:'',
      cagegory:'none',
      attribute:'none',
      readings:'none',
      status:'none',
    },
    "addNewAction":{
      "name":"openPage",
      "api":"post-edit"
    },
    "queryAction":{
      "name" : "doAction",
      "api" : "/api/action",
      "belongsTo" : "product-list-1",
      params : {
        actionName:"/Water/Vular/Actions/Query",
        modelName:"/Water/Vular/Model/Products",
      }
    },
    "canSelect" : true,
    "transshapeBreakPoint" : "sm",
    "batchActions" : [
      {
        "icon": "mdi-delete-sweep-outline",
        "title": "删除",
        "shortcut": true,
        "action":"action_iddelteed"
      },
      {
        "icon": "mdi-arrow-collapse-down",
        "title": "下载",
        "shortcut": true,
        "action":"action_id1"
      },
      {
        "icon": "mdi-publish",
        "title": "发布",
        "shortcut": true,
        "action":"action_id2"
      },
      {
        "icon": "mdi-shield-check-outline",
        "title": "审核",
        "shortcut": false,
        "action":"action_id3"
      },
      {
        "icon": "mdi-content-copy",
        "title": "克隆",
        "shortcut": false,
        "action":"action_id4"
      }
    ],
    "rowActions":[
      {
        "icon": "mdi-pencil",
        "title": "编辑",
        "shortcut": true,
        "action":"action_id2"
      },
      {
        "icon": "mdi-eye-outline",
        "title": "隐藏",
        "shortcut": false,
        "action":"action_id1"
      },
      {
        "icon": "mdi-content-copy",
        "title": "克隆",
        "shortcut": false,
        "action":"action_id3"
      },
      {
        "icon": "mdi-trash-can",
        "title": "删除",
        "shortcut": false,
        "action":"action_id4"
      }
    ],
    "filters":[
      {
        "title":"分类",
        "shortcut": true,
        "rules":{
          "cat1" : "Category1",
          "cat2" : "Category2",
          "cat3" : "Category3",
          "cat4" : "Category4",
          "cat5" : "Category5",
          "cat6" : "Category6"
        },
        "blankTitle":"全部分类",
        "blankValue":"",
        "field":"cagegory"
      },
      {
        "title":"属性",
        "shortcut": true,
        "rules":{
          "attr1" : "Attribute1",
          "attr2" : "Attribute2",
          "attr3" : "Attribute3",
          "attr4" : "Attribute4",
          "attr5" : "Attribute5",
          "attr6" : "Attribute6"
        },
        "blankTitle":"全部属性",
        "blankValue":"",
        "field":"attribute"
      },
      {
        "title":"阅读量",
        "rules":{
          "sales1" : "最好",
          "sales2" : "最差",
          "sales3" : "一般"
        },
        "blankTitle":"全部",
        "blankValue":"",
        "field":"readings"
      },
      {
        "title":"状态",
        "rules":{
          "ststus1" : "正在编辑",
          "ststus2" : "已经发布",
          "ststus3" : "未发布",
          "ststus4" : "被拒绝"
        },
        "blankTitle":"全部",
        "blankValue":"",
        "field":"status"
      }
    ],
    "columns":[
      {
        "field":"avatar",
        "title": "",
        "width":"80px"
      },
      {
        "field":"title",
        "title": "标题",
        "width":"",
        "flex": "4" 
      },
      {
        "field":"author",
        "title": "作者",
        "width":"",
        "flex": "2" 
      },
      {
        "field":"date",
        "title": "更新时间",
        "width":"",
        "flex": "2"
      },
      {
        "field":"status",
        "title": "状态",
        "width":"",
        "flex": "1" 
      }
    ],
    "actionsColumn":{
      "width":"150px"
    }

  }
}