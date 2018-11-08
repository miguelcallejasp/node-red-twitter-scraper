# node-red-twitter-scraper
Node RED Flow for Twitter Scrapping Timeline

### How it works
The Node RED flows includes 3 executables workflows. One to create the Bearer token for Twitter, one to make a static request and build a CSV file from a Twitter timeline triggered by Slack. And one to automate a scrapping workflow based on the latest timestamp ID. This last one retrieves up to 3200 tweets or what is limited by the Twitter API. 

Refer to https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline.html for more information.

### Get the bearer token
Concatenate both the Access token & access token secret with a `:` in the middle and send it coded in Base64 to the Authentication API Endpoint to get the Bearer Token.

### Slack Integration
Change the webhook URL in the nodes related to the response to Slack whenever there is a on-demand Twitter call for status. The integration webhook can be found when creating a `/command` application in the Slack website. 

Refer to https://api.slack.com/slash-commands for more information

### Server side
The server side uses Docker Engine to start up both a NodeRED container and a simple Nginx server to make a CSV file available for download. Change the URL used in the Slack Response node. Docker compose files are available in this repository. 