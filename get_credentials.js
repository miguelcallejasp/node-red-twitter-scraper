msg.method = 'POST';
msg.payload = {
    "grant_type": "client_credentials"
}

msg.url = "https://api.twitter.com/oauth2/token";
msg.headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Basic U3N4O*******1Rg=="
}

return msg