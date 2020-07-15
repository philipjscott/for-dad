const axios = require('axios')

const url = 'http://wxmaps.org/cgi-bin/draw_meteogram'

module.exports = (req, res) => {
  axios({
    method: 'POST',
    headers: {'content-type': 'text/plain;charset=UTF-8' },
    data: "<gaplot><field><lon>-78.3</lon><lat>44.3</lat><model>0</model><unit>1</unit></field></gaplot>",
    responseType: 'text'
  }).then(r => res.send(r.data))
}
