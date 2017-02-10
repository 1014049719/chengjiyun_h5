$(document).ready(function() {
  var data = {
    "exam" :[
      {
        "input" : [
          {
            "type" : "checkbox",
            "tag" : "20"
          }
        ],
        "name" : "初三下学期期末考试",
        "item" : [
          {
            "subject" : "语文"
          },
          {
            "subject" : "数学"
          }
        ],
        "exam_time" : "2016-9-20",
        "publish_time" : "2019-8-3"
      },
      {
        "input" : [
          {
            "type" : "checkbox",
            "tag" : "21"
          }
        ],
        "name" : "初三上学期期末考试",
        "item" : [
          {
            "subject" : "语文"
          },
          {
            "subject" : "数学"
          },
          {
            "subject" : "英语"
          }
        ],
        "exam_time" : "2016-18-20",
        "publish_time" : "2017-7-4"
      },
      {
        "input" : [
          {
            "type" : "checkbox",
            "tag" : "21"
          }
        ],
        "name" : "初二下学期期末考试",
        "item" : [
            {
              "subject" : "政治"
            }
        ],
        "exam_time" : "2015-3-19",
        "publish_time" : "2015-6-11"
      }
    ]
  };
  var myTemplate = Handlebars.compile($("#table-template").html());
  $('#tableList').html(myTemplate(data));
})


$(document).ready(function() {
    $(".select-all").click(function () { 
      $("#list-ss :checkbox").prop("checked", $(this).prop("checked", true)); 
}); 
  
})

// $(document).ready(function() {
//   if($(".select-all").attr('value') == true) {
//     $(".select-all").click(function () { 
//     $("#list-ss :checkbox").attr("checked", false);
      
// });
//   }
// })