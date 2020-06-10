const mongoose = require("mongoose");

const Profile = mongoose.model("Movies");

module.exports = {
  async getAll(req, res) {
    const { page = 1 } = req.query;
    const profiles = await Profile.paginate({}, { page, limit: 50 });

    return res.json(profiles);
  },
};
