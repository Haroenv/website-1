module.exports = exports = class ContactPageModel extends tweak.Model
  init: ->
    super()

  blankReg = /^\s*$/
  isNameValid: ->
    name = @get('name') or ''
    if blankReg.test name then return 'Name can not be left blank'
    true

  isEmailValid: ->
    email = @get('email') or ''
    emailReg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    if blankReg.test email then return 'Email can not be left blank'
    else if not emailReg.test email then return 'Email is not valid'
    true

  isPhoneValid: -> true

  isMessageValid: ->
    message = @get('message') or ''
    if blankReg.test message then return 'Email can not be left blank'
    true

  isValid: ->
    if @isNameValid() is true and @isEmailValid() is true and @isPhoneValid() is true and @isMessageValid() is true then return true
    'Error: Please confirm fields are correct'

  __getMail: ->
    name: @get 'name'
    email: @get 'email'
    message: "Email: #{@get 'email'}\nPhone/Skype: #{@get 'phone'}\n\n#{@get 'message'}"
   