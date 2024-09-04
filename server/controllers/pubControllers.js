const publicationData = require('../models/publication')

const getPublications = async (req, res) => {
  try {
    let data = await publicationData.find()
    res.json(data)
  } catch {
    res.status('400').json({ error: 'error fetching data' })
  }
}

const insertPublication = async (req, res) => {
  req.body.image = req.file.filename
  req.body.metrics = JSON.parse(req.body.metrics)
  console.log(req.body)
  try {
    const newPublication = new publicationData(req.body)
    // console.log(newPublication)
    await newPublication.save()
    return res.status(200).json({
      message: "Successfully signed up!"
    })
  } catch {
    res.status('400').json({ error: 'error saving data' })
  }
}

const deletePublication = async (req, res) => {
  try {
    let result = await publicationData.deleteOne({ _id: req.params.pubid })
    let data = await publicationData.find()
    res.json(data)
  } catch (err) {
    return res.status(400).json({ error: err })
  }
}

const getPublicationByID = async (req, res) => {
  const publication = await publicationData.findById(req.params.id);
  if (publication) {
    res.status(200).json(publication);
  } else {
    res.status(404).json({ error: "Publication not found" });
  }
};

module.exports = { getPublications, insertPublication, deletePublication, getPublicationByID }