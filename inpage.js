$(function(){
    function blockWithReason(tweet)
    {
        console.log("Blocking with a reason", tweet);
    }
    
    function addMenuItem(root, tweet){
        var button = $(".block-with-reason",root);
        if(!button.length){
            console.log("adding menu item to", root);        
            var li = $("<li>").addClass("embed-link");
            button = $("<button>").addClass("dropdown-link block-with-reason");
            button.attr("role","menuitem");
            button.text("Block With Reason");
            li.append(button);

            button.click(function(){blockWithReason(tweet)});        
            root.append(li);
        }
    }
    
    function startHook(button){
        var tweet = button.closest(".tweet");
        console.log("tweet:",tweet);
        var tweetId =
        
        setTimeout(function(){
            addMenuItem($(".dropdown-menu ul",button.parent()),tweet);
        }, 5);
    }
    
    $("#timeline").on("click",".ProfileTweet-actionButton", function(){startHook($(this));});
    $(".PermalinkOverlay").on("click",".ProfileTweet-actionButton", function(){startHook($(this));});
});