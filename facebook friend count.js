https = require('https');

var friends_count_url = "https://graph.facebook.com/fql?q=SELECT friend_count FROM user WHERE uid = ";
var data = '';

https.get(friends_count_url + profile_id, function(res){
	res.setEncoding('utf8');
    res.on('data', function(chunk){
        data += chunk; 
    });
    res.on('end',function(){
		var obj = JSON.parse(data);
		console.log( obj.data[0].friend_count );
   	})
});
