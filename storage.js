var blockList;
chrome.storage.local.get("blockList",function(object){
    blockList = object;
    if(Object.keys(blockList).length ===0){
        blockList = [];
    }
    console.log("blockList",blockList);
});

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log("storage",request, sender);
    if(request.action==="block"){
        request.id = guid();
        blockList.push(request);
        console.log(blockList);
        chrome.storage.local.set({"blockList":blockList},function(){});
    }
});