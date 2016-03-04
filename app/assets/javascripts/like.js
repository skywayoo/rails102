
(function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


 $(document).on("page:change", function(){
    var id = "1676425955944996";
    var token = "1073024356051881|5TX40NjgnJ_-ANzcwORJoCIlrfM";
    var getter = $.getJSON("https://graph.facebook.com/v2.5/"+id+"?fields=likes&access_token="+token, function (data) {
        $likes = (data["likes"] == undefined) ? 0 : data["likes"];
        if ($likes < 0) $likes = 0;
        $("#fblike").text($likes);
    });
});
