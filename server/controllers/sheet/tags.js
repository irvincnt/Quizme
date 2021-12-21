const { response } = require('express')
const Sheet = require('../../models/Sheet')
// const User = require('../../models/User')

const tags = async (req, res = response) => {
  const { id: userId } = req

  try {
    const allTagsForSheet = await Sheet.find({ author: userId }, 'tags')

    const grouped = {}
    const allTags = []

    for (const item of allTagsForSheet) {
      for (const tag of item.tags) {
        if (!grouped[tag.value]) {
          grouped[tag.value] = tag
          allTags.push(tag)
        }
      }
    }

    res.status(200).json({
      ok: true,
      data: { allTags }
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      ok: false,
      msg: 'Error tags'
    })
  }
}

module.exports = tags
