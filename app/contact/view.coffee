PageView = require 'page/view'
module.exports = exports = class ContactPageView extends PageView
  init: ->
    super()

    $errors = @element('#contact-form .error')
    @nameInput = @element('#contact-form .name')[0]
    @nameError = $errors[0]
    @emailInput = @element('#contact-form .email')[0]
    @emailError = $errors[1]
    @phoneInput = @element('#contact-form .phone')[0]
    @phoneError = $errors[2]
    @messageInput = @element('#contact-form .message')[0]
    @messageError = $errors[3]
    @submit = @element('#contact-form .submit-button')[0]
    @generalError = $errors[4]

    @addInputListeners()

  addInputListeners: ->
    model = @model
    context = @
    $(@nameInput).on 'change keydown input', ->
      model.set 'name', $(@).val()
      context.checkFieldValid model.isNameValid(), @, context.nameError
      valid = model.isEmailValid()
      context.checkFormValid()

    $(@emailInput).on 'change keydown input', ->
      model.set 'email', $(@).val()
      context.checkFieldValid model.isEmailValid(), @, context.emailError
      valid = model.isEmailValid()
      context.checkFormValid()

    $(@phoneInput).on 'change keydown input', ->
      model.set 'phone', $(@).val()
      context.checkFieldValid model.isPhoneValid(), @, context.phoneError
      valid = model.isPhoneValid()
      context.checkFormValid()

    $(@messageInput).on 'change keydown input', ->
      model.set 'message', $(@).val()
      context.checkFieldValid model.isMessageValid(), @, context.messageError
      valid = model.isMessageValid()
      context.checkFormValid()

    $(@submit).on 'click', -> context.submitClicked @


  checkFieldValid: (valid, field, error) ->
    field = $ field
    error = $ error
    if valid isnt true then field.addClass 'invalid' else field.removeClass 'invalid'
    if valid isnt true then error.html valid else error.html ''

  checkFormValid: =>
    valid = @model.isValid()
    $(@submit).removeClass 'disabled'
    if valid isnt true then $(@submit).addClass 'disabled'
    else $(@generalError).html('')

  submitClicked: (targ) =>
    valid = @model.isValid()
    $form = @element 'form'
    if valid is true and not $form.hasClass 'locked'
      $(targ).html 'Sending...'
      @element('input', $form).prop 'disabled', true
      @element('textarea', $form).prop 'disabled', true
      $form.addClass 'locked'

      data = @model.get 'mail'
      $.ajax(
        type: 'POST',
        url: 'http://blakenewman.co.uk:9812/mailer',
        data: mail:data,
        success: -> $(targ).html 'Sent'
        error: -> $(targ).html 'Error sending'
      )




    