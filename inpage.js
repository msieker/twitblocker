$(function(){
    var blockTemplate = `
    <div class='blockWithReasonContainer'>
        <h2>Block With Reason</h2>
        <div>
        Block @<span class="user"></span> because <input class="blockReason" />
        <button class="btn" type="button">Block</button>
        </div>
    </div>
    `
    function blockWithReason(tweet){
        var tweetId = $(tweet).data("tweet-id");
        var screenName = $(tweet).data("screen-name");
        var userId = $(tweet).data("user-id");
        console.log("Blocking with a reason", tweet);
        var template = $(blockTemplate);
        
        $(".user",template).text(screenName);
        
        $("button", template).click(function(){
            $.featherlight.current().close();
            chrome.runtime.sendMessage({"action":"block","forTweet":tweetId,"who":screenName,"userId":userId, reason:$(".blockReason").val() },function(response){
                console.log(response);
            });
        });
        
        $.featherlight(template,$.featherlight.defaults);
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