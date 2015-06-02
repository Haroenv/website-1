class App extends tweak.Controller

  pages = [
    'about',
    'skills',
    'portfolio',
    'contact'
  ]

  init: ->
    @root = @
    @page = null
    root = window

    root.Tween = root.TweenMax or root.TweenLite
    tweak = root.tweak or throw new Error 'TweakJS is a required dependecy'
    root.TweenMax?.selector = tweak.$
    root.TweenLite?.selector = tweak.$


    @main = $('body > main')

    document.documentElement.className += " #{@mobilePlatform().toLowerCase()}"
    @addRouting()

    @addPages()
    @addHeader()
    @addFooter()


  mobilePlatform: ->
    ua = navigator.userAgent.toLowerCase()
    if /android\s[0-9\.]*/i.test ua then 'Android'
    else if /iphone|ipad|ipod/i.test ua then 'iOS'
    else if /blackberry/i.test ua then 'Blackberry'
    else if /iemobile/i.test ua then 'IEMobile'
    else ''
 

  addHeader: ->
    header = @header = new tweak.Component @,
      name:'header'
      view:
        attach:
          to:'header'
          method: 'replace'
    header.init()
    header.render()

  addFooter: ->
    footer = @footer = new tweak.Component @,
      name:'footer'
      view:
        attach:
          to:'footer'
          method: 'replace'
    footer.init()
    footer.render()

  addPages: ->
    @pages = {}
    for page in pages
      Page = new tweak.Component @,
        name:page
      Page.init()
      Page.render()
      @pages[page] = Page

  first = null
  addRouting: ->
    @router = new tweak.Router {}

    @router.add 'goTo:page', /^(\S*)$/
    # Add event listener to listen for page changes
    @router.addEvent 'goTo:page', (data) ->
      # Update the router
      @routerChanged data.data[0]
      if not first
        first = true
        @scrollTo @page.name, 0

    , @

    tweak.History.start {}

  routerChanged: (page) ->
    if page is '' then page = 'about'
    if pages.indexOf(page) is -1 then page = 'about'
    @page = @pages[page]

  scrollTo: (page, speed = 1) ->
    point = $("[data-scroll='#{page}'] > section").offset().top or 0
    Tween.to [$('body'),$('html')], speed, scrollTop:point, ease:Quart.EaseInOut

App = window.App = new App()
App.init()