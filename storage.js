var blockList;
chrome.storage.local.get("blockList",function(object){
    blockList = object;
    if(Object.keys(blockList).length ===0){
        blockList = [];
    }
    console.log("blockList",blockList);
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log("storage",request, sender);
    if(request.action==="block"){    
        blockList.push(request);
        console.log(blockList);
        chrome.storage.local.set({"blockList":blockList},function(){});
    }
});