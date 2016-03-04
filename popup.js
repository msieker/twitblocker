$(function(){
   $("#viewBlocks").click(function(){
        chrome.tabs.create({'url':chrome.extension.getURL('blocklist.html')},function(tab){
            
        });
   });   
});