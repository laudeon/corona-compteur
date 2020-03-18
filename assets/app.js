const App = (function (ctx) {
  ctx.compteurElem = document.querySelector('#compteur p')

  ctx.start = () => {
    while (!moment) setTimeout(ctx.start, 500)
    moment.locale("fr")

    setInterval(() => ctx.updateCompteurElem(ctx.calcDiff()), 1000)
  }

  ctx.calcDiff = () => {
    const now = new moment()
    const startedOn = new moment("2020-03-16 12:00")
    const diff = moment.duration(now.diff(startedOn))

    return diff
  }

  ctx.updateCompteurElem = diff => ctx.compteurElem.innerHTML = 'Tu es confiné⋅e depuis ' + diff.days() + ' jours, ' + diff.hours() + ' heures, ' + diff.minutes() + ' minutes et ' + diff.seconds() + ' secondes !'

  return ctx
})({})