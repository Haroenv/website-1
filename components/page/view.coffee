module.exports = exports = class PageView extends tweak.View
  init: ->
    links = @element('[data-link]')
    links.on 'click', ->
      tweak.History.set $(@).attr('data-link'), {silent:false}
      
    $(window).on 'resize', @scrolled
    $(window).on 'scroll', @scrolled

  inView: (item = @el) ->    
    $item = $ item
    $item.offset().top - (($(window).height()/4)*1) <= @scrollAmount <= $item.offset().top + $item.height() 

  scrolled: =>
    @scrollAmount = scrollTop = $('html')[0].scrollTop or $('body')[0].scrollTop
    height = $(window).height()
    Tween.to @element('.bg-image'), 0.2, backgroundPosition:"0px -#{(scrollTop/height)*400}px"