max_id = msg.payload
node.warn(max_id)

msg.method = 'GET';
var url = "https://api.twitter.com/1.1/statuses/user_timeline.json"
var twitter_account = "evoespueblo"
var count = 200;
var tweet_mode = 'extended'
var trim_user = true
var exclude_replies = true
var include_rts = false

msg.headers = {
    "cache-control": "no-cache",
    "host": "api.twitter.com",
    "Content-type": "application/x-www-form-urlencoded",
    "json": true
}
msg.headers['Authorization'] = 'Bearer AAA*****Y41';

msg.payload = {};
msg.payload = {
    'screen_name': twitter_account,
    'count': count,
    'tweet_mode': tweet_mode,
    'trim_user': trim_user,
    'exclude_replies': exclude_replies,
    'include_rts': include_rts
};

if (max_id > 1940683668783) {
    node.warn("Empieza el ciclo")
    var total_url = url + "?screen_name=" + twitter_account + "&count=" + count + "&tweet_mode=" + tweet_mode + "&trim_user=" + trim_user + "&exclude_replies=" + exclude_replies + "&include_rts=" + include_rts + "&max_id=" + max_id
}
if (max_id < 1940683668783) {
    node.warn("First Kick!")
    var total_url = url + "?screen_name=" + twitter_account + "&count=" + count + "&tweet_mode=" + tweet_mode + "&trim_user=" + trim_user + "&exclude_replies=" + exclude_replies + "&include_rts=" + include_rts
}
msg.url = total_url;

return msg;