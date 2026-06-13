const { consturctServer } = require('../server')

// Build the Express app once on cold start, reused across warm invocations
const appPromise = consturctServer()

module.exports = async (req, res) => {
  const app = await appPromise
  return app(req, res)
}
