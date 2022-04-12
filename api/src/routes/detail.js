const { Router } = require("express")

const router = Router()

router.get("/:id", (req, res) => {
    const { id } = req.params
    res.send(`Detail for game: ${id}`)
})

module.exports = router
