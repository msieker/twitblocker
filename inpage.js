$(function(){
    
    function blockWithReason()
    {
        
    }
    
    $(".stream-container").on("click",".ProfileTweet-actionButton", function(){
        var button = $(this);
        var tweet = button.closest(".tweet");
        console.log("tweet:",tweet);
        var tweetId =
        
        setTimeout(function(){
            console.log(button.parent());
        }, 5);
    });
});