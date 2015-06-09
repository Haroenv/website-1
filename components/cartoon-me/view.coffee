module.exports = exports = class CartoonMeView extends tweak.View
  init: ->
    inner = @element '#inner > g'
    display = @element '#display_2_'
    Tween.from inner, 0.5, 
      delay:0.5
      y:'400px'

    console.log display
    Tween.to display, 0.5, 
      delay:1.5
      display:'block'
      opacity:0.6,
      onComplete: ->
        Tween.to display, 1.5,
          delay:0.5
          opacity:0.9
          yoyo:true
          repeat:-1