module.exports = exports = class HeaderView extends tweak.View
  init: ->
    links = @element('[data-link]')
    root = @root
    links.on 'click', ->
      root.scrollTo $(@).attr('data-link').replace /^([\/\\])+/, ''

    links.on 'mouseover touchstart', @buttonOver
    links.on 'mouseout click touchend', @buttonOut

    @root.addEvent 'page:changed', (data) ->
      links.each ->
        $targ = $(@)
        $targ.removeClass 'active'
        if "/#{data}" is $targ.attr('data-link') then $targ.addClass 'active'

  buttonOver: ->
    $targ = $ @
    if $targ.hasClass 'active' then return
    $targ.addClass 'hover'

  buttonOut: ->
    $targ = $ @
    $targ.removeClass 'hover'

