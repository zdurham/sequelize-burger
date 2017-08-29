var db = require('../models')

module.exports = (app) => {
  app.get("/", (req, res) => {
    db.Burger.findAll().then((dbBurger) => {
      res.render("index", {burgers: dbBurger})
    })
  })

  app.post("/", (req, res) => {
    db.Burger.create(req.body).then((dbBurger) => {
      res.redirect("/")
    })
  })

  app.put("/:id", (req, res) => {

    db.Burger.update({devoured: 'true'}, {
      where: {
        id: req.params.id
      }
    }).then((dbBurger) => {
      res.redirect("/")
    })
  })
}
