const express = require('express')
const app = express()

const PORT =  3000
console.log(PORT)  // eslint-disable-line no-console

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  const totta = true
  if (totta) {
    res.send('ok')
  }

})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)  // eslint-disable-line no-console

})