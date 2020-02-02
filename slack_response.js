var msgType = "ephemeral";
var repo = msg.payload.repo;
var instance = msg.payload.instance;


msg.url = 'https://hooks.slack.com/services/ABCDEFG/ABCDEF12437/ABCDEFGHIJKP';
msg.method = "POST";
msg.headers = {
    "Content-type": "application/json"
}
msg.payload = {
    "username": "the_coffee_cup",
    "channel": "#general",
    "link_names": "1",
    "icon_url": "https://webiste.com/icon.png",
    "response_type": msgType,
    "text": "Scraping and building Twitter report",
    "attachments": [
        {
            "fallback": "Twitter Connected",
            "color": "#36a64f",
            "author_name": "Miguel Callejas",
            "author_link": "https://instagram/coffee.spiller",
            "title": "Scraping @evoespueblo Twitter Status - CLICK HERE",
            "title_link": "http://<public-url-server>:89/twitter.csv",
            "text": "Latest status can be now downloaded",
            "footer": "Coffee Spillers"
        }
    ]
}

return msg;
