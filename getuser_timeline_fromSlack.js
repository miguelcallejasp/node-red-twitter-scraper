max_id = msg.payload
node.warn("Got the trigger for Twitter!")

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
msg.headers['Authorization'] = 'Bearer AAAAA***NY41';

msg.payload = {};
msg.payload = {
    'screen_name': twitter_account,
    'count': count,
    'tweet_mode': tweet_mode,
    'trim_user': trim_user,
    'exclude_replies': exclude_replies,
    'include_rts': include_rts
};

var total_url = url + "?screen_name=" + twitter_account + "&count=" + count + "&tweet_mode=" + tweet_mode + "&trim_user=" + trim_user + "&exclude_replies=" + exclude_replies + "&include_rts=" + include_rts
msg.url = total_url;

return msg;