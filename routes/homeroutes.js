const router = require("express").Router();
const path = require('path');

router.get('/', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../public/index.html"))
  }
  catch (error) {
    console.log(error);
  }
});
router.get('/exercise', (req, res) => {
  try {

    res.sendFile(path.join(__dirname, "../public/exercise.html"))
  }
  catch (error) {
    console.log(error);
  }
});
router.get('/stats', (req, res) => {
  try {

    res.sendFile(path.join(__dirname, "../public/stats.html"))
  }
  catch (error) {
    console.log(error);
  }
});



module.exports = router