const mongoose = require("mongoose");
const { search } = require("../routes");

const Movie = mongoose.model("Movies");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const Movies = await Movie.paginate({}, { page, limit: 20 });

    return res.status(200).json(Movies);
  },
  async addCom(req, res) {
    Movie.updateOne(
      { _id: req.params.id },
      { $push: { comentarys: req.body } },
      { safe: true, upsert: true },
      function (err, model) {
        console.log(err);
      }
    );

    return res.status(200).json({ Status: "Done" });
  },

  async getMoviesCom(req, res) {
    let moviesArray = [];
    const { page = 1 } = req.query;
    const Movies = await Movie.paginate({}, { page, limit: 20 });

    let fromDBArray = Movies.docs;

    fromDBArray.forEach((i, n) => {
      i.comentarys.forEach((index, num) => {
        if (index.userid == req.params.userid) {
          let obj = {
            userid: index.userid,
            username: index.username,
            rating: index.rating,
            commentary: index.commentary,
            movieId: i._id,
            movieName: i.name,
          };

          console.log(obj);
          moviesArray.push(obj);
        }
      });
    });

    return res.status(200).json(moviesArray);
  },

  async getInfo(req, res) {
    const backMovie = Movie.findOne({ _id: req.params.id }, function (
      err,
      movie
    ) {
      return res.status(200).json(movie);
    });
  },
  async delete(req, res) {
    return res.json(req.params.id);
  },
  async update(req, res) {
    const Moviee = await Movie.updateOne({ _id: req.params.id }, req.body);

    return res.status(200).json(Moviee);
  },
  async insert(req, res) {
    await Movie.create(req.body);

    return res.status(200).json({ Status: "Done" });
  },
  async search(req, res) {
    let moviesArray = [];
    const { page = 1 } = req.query;
    const Movies = await Movie.paginate({}, { page, limit: 20 });

    let fromDBArray = Movies.docs;

    fromDBArray.forEach((i, n) => {
      if (i.name.toLowerCase().includes(req.params.term.toLowerCase())) {
        moviesArray.push(i);
      }
    });

    return res.status(200).json({ docs: moviesArray });
  },
};
