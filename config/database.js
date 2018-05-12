if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://Bobby:Bobby@ds119370.mlab.com:19370/vidjotprod'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}