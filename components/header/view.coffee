module.exports = exports = class HeaderView extends tweak.View
  init: ->
    links = @element('[data-link]')
    root = @root
    links.on 'click', ->
      root.scrollTo $(@).attr('data-link').replace /^([\/\\])+/, ''

    ###
      Add an active class on first button
    ###
    $(links[0]).addClass 'active'

    links.on 'mouseover touchstart', @buttonOver
    links.on 'mouseout click touchend', @buttonOut

    @root.router.addEvent 'goTo:page', (data) ->
      data = data.data[0]
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

