(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "http://connect.facebook.net/zh_TW/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



 $(document).on("page:change", function(){
    var id = "1676425955944996";
    var value = $.getJSON("https://graph.facebook.com/v2.5/"+ id +"?fields=likes&access_token=CAACEdEose0cBAFfFCvUZCyBjvoeNs3UKDjFZBPefgvkH27ICaTTZAjcSxZB8veKJRvMU0QjPGU4kaQ7mz40hu36JUpn5xa9ZAF3IA3LjrxFoZBVxvm9OWajhnOjgKikJJWZCwDjhCt7LVZAnqIVEuHmZAiTf32DBvhuH6HPtqQECF4daGhDX0CNoOeww4bEwozBgGD1QVgZCHMKgZDZD", function (data) {
        $likes = (data["likes"] == undefined) ? 0 : data["likes"];
        if ($likes < 0) $likes = 0;
        $("#fblike").text($likes);
    });
 
});
