$(function(){
    chrome.storage.local.get("blockList",function(object){
        blockList = object;
        if(Object.keys(blockList).length ===0){
            blockList = [];
        }
        console.log("blockList",blockList);
        
        blockList.blockList.forEach(function(i){
            table.row.add([i.who,i.reason,i.forTweet]).draw( false );
        });
    });
    var table = $("#blocklist").DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv'
        ],
        columnDefs:[
            {
                targets:2,
                render:function(data,type,row){
                    var link = "https://twitter.com/" + row[0] + "/status/" + row[2];                
                    return "<a href='" + link + "' target='_blank'>" + link + "</a>";
                }
            }
        ]
    });
});