const router = require("express").Router();
const Workout = require("../models/workouts.js");
const { db } = require("../models/workouts.js");

router.get('/range', (req, res) => {
  db.Workout.aggregate([{
      $addFields: {
          totalDuration: { $sum: '$exercises.duration'}
      }
  }])
  .then(dbWorkout => {
      res.json(dbWorkout);
  })
  .catch(err => {
      res.status(400).json(err);
  });
});

router.get('/', (req, res) => {
  db.Workout.aggregate([{
      $addFields: {
          totalDuration: { $sum: '$exercises.duration'}
      }
  }])
  .then(dbWorkout => {
      res.json(dbWorkout);
  })
  .catch(err => {
      res.status(400).json(err);
  });
});

router.post('/', ({ body }, res) => {
  db.Workout.create(body)
  .then(dbWorkout => {
      res.json(dbWorkout);
  })
  .catch(err => {
      res.status(400).json(err);
  });
});

router.put('/:id', ( {body, params }, res) => {
  db.Workout.findByIdAndUpdate({
      _id: params.id
  },
  {
      $push: {exercises: body }
  },
  {
      new: true})
  .then(dbWorkout => {
      res.json(dbWorkout);
  })
  .catch(err => {
      res.status(400).json(err);
  });
});


module.exports = router;