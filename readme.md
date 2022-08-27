# Rwchat
Very simple & customizable twitch chat.  
<img src="./images/example.gif" alt="drawing" width="500"/>

## Usage
1. Download Rwchat from the releases category. Extract it to a folder.
2. Change the channel in 'index.js'
```javascript
const client = new tmi.Client({
	options: { debug: false },
    connection: {
        secure: true,
        reconnect: true
    },
	channels: [ 'channel' ] // <-- change this!
});
```
3. Open the "index.html" which now should show the channel's chat in real time.
4. To use it in OBS add a "Browser" scene and use "Local File" and select the "index.html"


## Licences
- Rwchat ([WTFPL](./LICENCE))
- JQuery ([MIT](https://jquery.org/license/))
- tmijs ([MIT](https://github.com/tmijs/tmi.js/blob/main/LICENSE))
