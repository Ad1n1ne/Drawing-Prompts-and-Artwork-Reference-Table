/* Application fields and sample data. MIT License. */
const SPEC={
  "id": "A05",
  "slug": "prompt-gallery",
  "name": "绘图提示词与作品对照台",
  "desc": "保存提示词、参数和作品，比较版本并复用创作记录。",
  "fields": [
    {
      "key": "project",
      "label": "创作项目",
      "type": "text",
      "value": "水杯概念图"
    },
    {
      "key": "images",
      "label": "导入已有作品（文件名关联下方版本）",
      "type": "upload",
      "value": [],
      "mode": "image"
    }
  ],
  "tables": [
    {
      "key": "items",
      "label": "提示词版本",
      "columns": [
        {
          "key": "version",
          "label": "版本",
          "type": "text"
        },
        {
          "key": "prompt",
          "label": "提示词",
          "type": "textarea"
        },
        {
          "key": "params",
          "label": "模型与参数",
          "type": "text"
        },
        {
          "key": "file",
          "label": "作品文件名",
          "type": "text"
        },
        {
          "key": "score",
          "label": "评分0—5",
          "type": "number"
        }
      ],
      "rows": [
        {
          "version": "v1",
          "prompt": "旅行水杯，米白背景，柔和侧光，留出右侧文案区域",
          "params": "手工记录，比例1:1",
          "file": "sample-cup.svg",
          "score": 4
        }
      ]
    }
  ],
  "sampleFiles": "image",
  "dirname": "prompt-gallery",
  "example": {
    "_files": {
      "images": [
        {
          "name": "sample-cup.svg",
          "type": "image/svg+xml",
          "size": 645,
          "data": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iODAwIiB2aWV3Qm94PSIwIDAgODAwIDgwMCI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiNlOGVlZTIiLz48ZWxsaXBzZSBjeD0iNDAwIiBjeT0iNjUwIiByeD0iMTc1IiByeT0iMjgiIGZpbGw9IiNjZWQ5YzgiLz48cmVjdCB4PSIyNzgiIHk9IjIwMyIgd2lkdGg9IjI0NCIgaGVpZ2h0PSI0MjQiIHJ4PSI2NSIgZmlsbD0iI2ZkZmJmNSIgc3Ryb2tlPSIjOWFhZDllIiBzdHJva2Utd2lkdGg9IjQiLz48cmVjdCB4PSIyNzMiIHk9IjE3NSIgd2lkdGg9IjI1NCIgaGVpZ2h0PSI3NSIgcng9IjIzIiBmaWxsPSIjMjQ0YjNkIi8+PHBhdGggZD0iTTM0NSAxOTVINDU1IiBzdHJva2U9IiM3NDhkNzMiIHN0cm9rZS13aWR0aD0iOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTMyNCAyOTBWNTQwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjE1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSI0MDAiIGN5PSI0MDEiIHI9IjM5IiBmaWxsPSIjZDRkZWM5Ii8+PHBhdGggZD0iTTM4MSA0MDRxMTkgLTQyIDM5IDBxLTE5IDQyIC0zOSAwIiBmaWxsPSIjNjg4MzY1Ii8+PC9zdmc+"
        }
      ]
    },
    "project": "水杯概念图",
    "items": [
      {
        "version": "v1",
        "prompt": "旅行水杯，米白背景，柔和侧光，留出右侧文案区域",
        "params": "手工记录，比例1:1",
        "file": "sample-cup.svg",
        "score": 4
      }
    ]
  },
  "inputTitle": "创作记录",
  "outputTitle": "版本对照",
  "action": "查看对照"
};
