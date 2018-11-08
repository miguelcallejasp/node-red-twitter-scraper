[
    {
        "id": "f3dd4ca.75645b",
        "type": "tab",
        "label": "getTwitterFlow",
        "disabled": false,
        "info": ""
    },
    {
        "id": "efa0a069.40db2",
        "type": "inject",
        "z": "f3dd4ca.75645b",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 140,
        "y": 100,
        "wires": [
            [
                "6b76e21d.721d8c"
            ]
        ]
    },
    {
        "id": "a30a5cce.5dfa",
        "type": "http request",
        "z": "f3dd4ca.75645b",
        "name": "",
        "method": "use",
        "ret": "txt",
        "url": "",
        "tls": "",
        "x": 410,
        "y": 260,
        "wires": [
            [
                "6ece8a72.ad1754",
                "c9e5338f.cab2f",
                "91e21ce4.e605b"
            ]
        ]
    },
    {
        "id": "d5f23237.eecb5",
        "type": "debug",
        "z": "f3dd4ca.75645b",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 510,
        "y": 120,
        "wires": []
    },
    {
        "id": "6ece8a72.ad1754",
        "type": "debug",
        "z": "f3dd4ca.75645b",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 770,
        "y": 120,
        "wires": []
    },
    {
        "id": "6b76e21d.721d8c",
        "type": "function",
        "z": "f3dd4ca.75645b",
        "name": "getevo",
        "func": "max_id = msg.payload\nnode.warn(max_id)\n\nmsg.method = 'GET';\nvar url=\"https://api.twitter.com/1.1/statuses/user_timeline.json\"\nvar twitter_account = \"evoespueblo\"\nvar count = 200;\nvar tweet_mode = 'extended'\nvar trim_user = true\nvar exclude_replies = true\nvar include_rts = false\n\nmsg.headers = {\n    \"cache-control\": \"no-cache\",\n    \"host\":\"api.twitter.com\",\n    \"Content-type\": \"application/x-www-form-urlencoded\",\n    \"json\": true\n}\nmsg.headers['Authorization'] = 'Bearer AA****Y41';\n\nmsg.payload = {};\nmsg.payload = {\n  'screen_name': twitter_account,\n  'count': count,\n  'tweet_mode': tweet_mode,\n  'trim_user': trim_user,\n  'exclude_replies': exclude_replies,\n  'include_rts': include_rts\n};\n\nif (max_id > 1940683668783)\n{\nnode.warn(\"Empieza el ciclo\")\nvar total_url= url+\"?screen_name=\"+twitter_account+\"&count=\"+count+\"&tweet_mode=\"+tweet_mode+\"&trim_user=\"+trim_user+\"&exclude_replies=\"+exclude_replies+\"&include_rts=\"+include_rts+\"&max_id=\"+max_id\n}\nif (max_id < 1940683668783)\n{\nnode.warn(\"First Kick!\")\nvar total_url= url+\"?screen_name=\"+twitter_account+\"&count=\"+count+\"&tweet_mode=\"+tweet_mode+\"&trim_user=\"+trim_user+\"&exclude_replies=\"+exclude_replies+\"&include_rts=\"+include_rts\n}\nmsg.url = total_url;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 310,
        "y": 180,
        "wires": [
            [
                "d5f23237.eecb5",
                "a30a5cce.5dfa",
                "2228d7cd.62efe8"
            ]
        ]
    },
    {
        "id": "2228d7cd.62efe8",
        "type": "debug",
        "z": "f3dd4ca.75645b",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "headers",
        "x": 470,
        "y": 80,
        "wires": []
    },
    {
        "id": "fae74575.ffa658",
        "type": "inject",
        "z": "f3dd4ca.75645b",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 140,
        "y": 700,
        "wires": [
            [
                "123de50.897331b"
            ]
        ]
    },
    {
        "id": "123de50.897331b",
        "type": "function",
        "z": "f3dd4ca.75645b",
        "name": "",
        "func": "msg.method = 'POST';\nmsg.payload = {\n  \"grant_type\":\"client_credentials\"\n}\n\nmsg.url = \"https://api.twitter.com/oauth2/token\";\nmsg.headers = {\n  \"Content-Type\":\"application/x-www-form-urlencoded\",\n  \"Authorization\":\"Basic U3N4O****Dk1Rg==\"\n}\n\nreturn msg",
        "outputs": 1,
        "noerr": 0,
        "x": 240,
        "y": 640,
        "wires": [
            [
                "ac279f80.0075e"
            ]
        ]
    },
    {
        "id": "6a51e349.940a4c",
        "type": "debug",
        "z": "f3dd4ca.75645b",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 430,
        "y": 840,
        "wires": []
    },
    {
        "id": "ac279f80.0075e",
        "type": "http request",
        "z": "f3dd4ca.75645b",
        "name": "",
        "method": "use",
        "ret": "txt",
        "url": "",
        "tls": "",
        "x": 380,
        "y": 740,
        "wires": [
            [
                "6a51e349.940a4c"
            ]
        ]
    },
    {
        "id": "c9e5338f.cab2f",
        "type": "debug",
        "z": "f3dd4ca.75645b",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "headers",
        "x": 730,
        "y": 80,
        "wires": []
    },
    {
        "id": "91e21ce4.e605b",
        "type": "json",
        "z": "f3dd4ca.75645b",
        "name": "",
        "property": "payload",
        "action": "obj",
        "pretty": false,
        "x": 590,
        "y": 260,
        "wires": [
            [
                "3b80bee8.2ffba2",
                "1c41c2f0.5ecfad",
                "62d94298.bce4ec",
                "12dbc754.698f19"
            ]
        ]
    },
    {
        "id": "3b80bee8.2ffba2",
        "type": "debug",
        "z": "f3dd4ca.75645b",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 790,
        "y": 160,
        "wires": []
    },
    {
        "id": "1c41c2f0.5ecfad",
        "type": "csv",
        "z": "f3dd4ca.75645b",
        "name": "",
        "sep": ",",
        "hdrin": false,
        "hdrout": false,
        "multi": "one",
        "ret": "\\n",
        "temp": "created_at,full_text",
        "skip": "0",
        "x": 770,
        "y": 240,
        "wires": [
            [
                "b7a32bbe.4a3ce8",
                "6a162d8f.a37a04"
            ]
        ]
    },
    {
        "id": "b7a32bbe.4a3ce8",
        "type": "debug",
        "z": "f3dd4ca.75645b",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 930,
        "y": 240,
        "wires": []
    },
    {
        "id": "6a162d8f.a37a04",
        "type": "file",
        "z": "f3dd4ca.75645b",
        "name": "",
        "filename": "/data/1.csv",
        "appendNewline": true,
        "createDir": true,
        "overwriteFile": "false",
        "x": 930,
        "y": 280,
        "wires": []
    },
    {
        "id": "62d94298.bce4ec",
        "type": "debug",
        "z": "f3dd4ca.75645b",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload.0",
        "x": 920,
        "y": 320,
        "wires": []
    },
    {
        "id": "12dbc754.698f19",
        "type": "function",
        "z": "f3dd4ca.75645b",
        "name": "",
        "func": "msg.payload=msg.payload[msg.payload.length-1].id\nreturn msg",
        "outputs": 1,
        "noerr": 0,
        "x": 750,
        "y": 360,
        "wires": [
            [
                "f5c32486.1b4488",
                "be116e55.85b33"
            ]
        ]
    },
    {
        "id": "f5c32486.1b4488",
        "type": "debug",
        "z": "f3dd4ca.75645b",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 910,
        "y": 360,
        "wires": []
    },
    {
        "id": "be116e55.85b33",
        "type": "link out",
        "z": "f3dd4ca.75645b",
        "name": "",
        "links": [
            "9602558e.7dde98"
        ],
        "x": 880,
        "y": 440,
        "wires": []
    },
    {
        "id": "9602558e.7dde98",
        "type": "link in",
        "z": "f3dd4ca.75645b",
        "name": "",
        "links": [
            "be116e55.85b33"
        ],
        "x": 75,
        "y": 260,
        "wires": [
            [
                "8a7ec661.5d3258"
            ]
        ]
    },
    {
        "id": "8a7ec661.5d3258",
        "type": "delay",
        "z": "f3dd4ca.75645b",
        "name": "",
        "pauseType": "delay",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 200,
        "y": 260,
        "wires": [
            [
                "6b76e21d.721d8c"
            ]
        ]
    },
    {
        "id": "b34d9730.03a188",
        "type": "http in",
        "z": "f3dd4ca.75645b",
        "name": "",
        "url": "/evo",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 120,
        "y": 440,
        "wires": [
            [
                "39660731.c6d3a8",
                "60da05c6.81ab8c",
                "be19d39f.ebf28"
            ]
        ]
    },
    {
        "id": "39660731.c6d3a8",
        "type": "function",
        "z": "f3dd4ca.75645b",
        "name": "",
        "func": "max_id = msg.payload\nnode.warn(\"Got the trigger for Twitter!\")\n\nmsg.method = 'GET';\nvar url=\"https://api.twitter.com/1.1/statuses/user_timeline.json\"\nvar twitter_account = \"evoespueblo\"\nvar count = 200;\nvar tweet_mode = 'extended'\nvar trim_user = true\nvar exclude_replies = true\nvar include_rts = false\n\nmsg.headers = {\n    \"cache-control\": \"no-cache\",\n    \"host\":\"api.twitter.com\",\n    \"Content-type\": \"application/x-www-form-urlencoded\",\n    \"json\": true\n}\nmsg.headers['Authorization'] = 'Bearer AAAA****Y41';\n\nmsg.payload = {};\nmsg.payload = {\n  'screen_name': twitter_account,\n  'count': count,\n  'tweet_mode': tweet_mode,\n  'trim_user': trim_user,\n  'exclude_replies': exclude_replies,\n  'include_rts': include_rts\n};\n\nvar total_url= url+\"?screen_name=\"+twitter_account+\"&count=\"+count+\"&tweet_mode=\"+tweet_mode+\"&trim_user=\"+trim_user+\"&exclude_replies=\"+exclude_replies+\"&include_rts=\"+include_rts\nmsg.url = total_url;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 290,
        "y": 440,
        "wires": [
            [
                "5ecbb2f8.b532ec"
            ]
        ]
    },
    {
        "id": "5ecbb2f8.b532ec",
        "type": "http request",
        "z": "f3dd4ca.75645b",
        "name": "",
        "method": "use",
        "ret": "txt",
        "url": "",
        "tls": "",
        "x": 450,
        "y": 440,
        "wires": [
            [
                "776f52ff.1afb9c"
            ]
        ]
    },
    {
        "id": "ddd58a11.05bcf8",
        "type": "debug",
        "z": "f3dd4ca.75645b",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 890,
        "y": 500,
        "wires": []
    },
    {
        "id": "60da05c6.81ab8c",
        "type": "http response",
        "z": "f3dd4ca.75645b",
        "name": "",
        "statusCode": "200",
        "headers": {},
        "x": 280,
        "y": 360,
        "wires": []
    },
    {
        "id": "5bdd50ab.30e31",
        "type": "function",
        "z": "f3dd4ca.75645b",
        "name": "",
        "func": "var msgType = \"ephemeral\";\nvar repo = msg.payload.repo;\nvar instance = msg.payload.instance;\n\n\nmsg.url='https://hooks.slack.com/services/TC***71/B***7/1OY****7P';\nmsg.method = \"POST\";\nmsg.headers = {\n    \"Content-type\":\"application/json\"\n}\nmsg.payload = {\n                \"username\": \"the_coffee_cup\",\n                \"channel\": \"#general\",\n                \"link_names\": \"1\",\n                \"icon_url\": \"https://s3-eu-west-1.amazonaws.com/mojixdevops/images/xmojix.png\",\n                \"response_type\": msgType,\n                \"text\": \"Scraping and building Twitter report\",\n                \"attachments\": [\n                    {\n                    \"fallback\": \"Twitter Connected\",\n                    \"color\": \"#36a64f\",\n                    \"author_name\": \"Miguel Callejas\",\n                    \"author_link\": \"https://instagram/coffee.spiller\",\n                    \"title\": \"Scraping @evoespueblo Twitter Status - CLICK HERE\",\n                    \"title_link\": \"http://research.mojix.io:89/twitter.csv\",\n                    \"text\": \"Latest status can be now downloaded\",\n                    \"footer\": \"Coffee Spillers\"\n                    }\n                ]\n            }\n            \nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 290,
        "y": 540,
        "wires": [
            [
                "fe894c61.f8e17"
            ]
        ]
    },
    {
        "id": "c19f8436.87fc38",
        "type": "debug",
        "z": "f3dd4ca.75645b",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 610,
        "y": 620,
        "wires": []
    },
    {
        "id": "fe894c61.f8e17",
        "type": "http request",
        "z": "f3dd4ca.75645b",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "url": "",
        "tls": "",
        "x": 450,
        "y": 540,
        "wires": [
            [
                "c19f8436.87fc38"
            ]
        ]
    },
    {
        "id": "776f52ff.1afb9c",
        "type": "json",
        "z": "f3dd4ca.75645b",
        "name": "",
        "property": "payload",
        "action": "obj",
        "pretty": false,
        "x": 590,
        "y": 440,
        "wires": [
            [
                "51df4d96.97b3e4"
            ]
        ]
    },
    {
        "id": "51df4d96.97b3e4",
        "type": "csv",
        "z": "f3dd4ca.75645b",
        "name": "",
        "sep": ",",
        "hdrin": "",
        "hdrout": "",
        "multi": "one",
        "ret": "\\n",
        "temp": "created_at,full_text",
        "skip": "0",
        "x": 710,
        "y": 440,
        "wires": [
            [
                "ddd58a11.05bcf8",
                "bdea27b0.de9158"
            ]
        ]
    },
    {
        "id": "bdea27b0.de9158",
        "type": "file",
        "z": "f3dd4ca.75645b",
        "name": "",
        "filename": "/web/twitter.csv",
        "appendNewline": true,
        "createDir": true,
        "overwriteFile": "false",
        "x": 820,
        "y": 560,
        "wires": []
    },
    {
        "id": "be19d39f.ebf28",
        "type": "delay",
        "z": "f3dd4ca.75645b",
        "name": "",
        "pauseType": "delay",
        "timeout": "3",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 140,
        "y": 540,
        "wires": [
            [
                "5bdd50ab.30e31"
            ]
        ]
    }
]