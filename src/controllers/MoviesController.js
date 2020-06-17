const mongoose = require("mongoose");

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
  async getInfo(req, res) {
    const backMovie = Movie.findOne({ _id: req.params.id }, function (
      err,
      adventure
    ) {
      return res.status(200).json(backMovie);
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
};
