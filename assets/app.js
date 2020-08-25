const App = (function (ctx) {
  ctx.compteurElem = document.querySelector('#compteur p')

  ctx.start = () => {
    while (!moment) setTimeout(ctx.start, 500)
    moment.locale("fr")

    ctx.updateCompteurElem(ctx.calcDiff())
  }

  ctx.calcDiff = () => {
    const endsDate = new moment("2020-05-11 12:00")
    const startedOn = new moment("2020-03-16 12:00")
    const diff = moment.duration(endsDate.diff(startedOn))

    return diff
  }

  ctx.updateCompteurElem = diff => ctx.compteurElem.innerHTML = 'Tu as été confiné⋅e pendant ' + diff.months() + ' mois et ' + diff.days() + ' jours !'

  return ctx
})({})
