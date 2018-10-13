module.exports = function authenticate (req, res, next) {
  console.log(req.headers)
  next()
}
