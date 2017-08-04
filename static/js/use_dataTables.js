

var table=$('#data-table-1').DataTable({    
    dom: '<"table-buttons"B>frt',
    ordering:false,
    pagging:false,
    buttons: [
            {
                extend:'excel',
                text:'导出数据'
            }
        ],
    language: {
        aria: {
            sortAscending: ": activate to sort column ascending",
            sortDescending: ": activate to sort column descending"
        },
        
        sLoadingRecords: "载入中...",
        emptyTable: "无记录",
        info: "_START_ - _END_ 条/共计 _TOTAL_ 条",
        infoEmpty: "表格无记录",
        infoFiltered: "(1 到 _MAX_ 条)",
        zeroRecords: "查询不到记录",
        lengthMenu: "每页 _MENU_ 条记录&nbsp&nbsp"
    },
    lengthMenu: [
        [5, 10, 15, -1],
        [5, 10, 15, "全部"]
    ],
    pageLength:10,
    //服务器模式
    bServerSide:false,
    searching:false,
    ajax:{
        url:"http://localhost:8081/metadata/data2.json",
        type:"POST",
        dataType:"text",
        dataSrc:'',
        dataFilter:function(data){
            return JSON.parse(data);
        }
    },
    columns:[
        {"data":"body.fieldGroupId"},
        {"data":"body.fieldName"},
        {"data":"body.wfCount"},
        {"data":"body.wtCount"},
        {"data":"body.dataCount"},
        {"data":"body.size"},
        {"data":"body.expectedDataCount"},
        {"data":"body.lastUpdateTime"},
        {"data":"body.lastUpdateTime"}
    ]
});





var table2=$('#data-table-2').DataTable({    
    dom: '<"table-buttons"B>frtip',
        buttons: [
            {
                extend:'excel',
                text:'导出数据'
            }
        ],
    language: {
        aria: {
            sortAscending: ": activate to sort column ascending",
            sortDescending: ": activate to sort column descending"
        },
        
        sLoadingRecords: "载入中...",
        emptyTable: "无记录",
        info: "_START_ - _END_ 条/共计 _TOTAL_ 条",
        infoEmpty: "表格无记录",
        infoFiltered: "(1 到 _MAX_ 条)",
        zeroRecords: "查询不到记录",
        lengthMenu: "每页 _MENU_ 条记录&nbsp&nbsp"
    },
    pageLength:10,
    //服务器模式
    bServerSide:false,
    searching:false,
    ajax:{
        url:"http://localhost:8081/metadata/missRate.json",
        type:"POST",
        dataType:"text",
        dataSrc:'',
        dataFilter:function(data){
            return JSON.parse(data);
        }
    },
    columns:[
        {"data":"fieldGroupId"},
        {"data":"fieldName"},
        {"data":"wfCount"},
        {"data":"wtCount"},
        {"data":"dataCount"},
        {"data":"size",render:function(a){
            if(a/1024/1024/1024>2){
                return (a/1024/1024/1024).toFixed(1)+'GB';
            }
            else {
                return (a/1024/1024).toFixed(0)+'MB'
            }

        }},
        {"data":"expectedDataCount"},
        {"data":"missRate",render:function(a){
            var b=(a*100).toFixed(2);
            var str='';
            if(b<=0.1){
                return '<span class="MR-green">小于0.1</span>';
            }
            else if(0.1<b&&b<=0.5){
                return '<span class="MR-green">'+b+'%</span>'
            }
            else if(0.5<b&&b<=5){
                return '<span class="MR-orange">'+b+'%</span>'
            }
            else if(b>5)
                return '<span class="MR-red">'+b+'%</span>'

            }
        }
    ]
});


$(".dp-search")[0].onclick=function(){
    var dpStart=$("#datemin")[0].value;
    var dpEnd=$("#datemax")[0].value;
    table2.ajax.data={
            dpStart:dpStart,
            dpEnd:dpEnd
        },
    table2.ajax.reload(null,true);
}





