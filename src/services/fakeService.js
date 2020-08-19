var simpleState = {
  "isMobileApp": false,
  "isMobile": false,
  "lang": "en",
  "direction": "ltr",
  "dialogStatus": {
    "isOpen": false
  },
  "showLoader": false,
  "windowLocation": "app.vcita.com",
  "brandModule": {
    "branding": {
      "whitelabel": false,
      "direct": true,
      "system_host": "www.vcita.com",
      "facebook_pages_app_id": 241321656577051,
      "primary_color": "#4675d9",
      "secondary_color": "#a434eb",
      "text_color": "#000000",
      "logo_path": "https://d16en1l8aqtg35.cloudfront.net/vue/img/vcita-logo-white.248f25ed.svg",
      "force": "true",
      "use_login_with_code": true,
      "hide_sign_up": false,
      "new_logo_path": "https://d16en1l8aqtg35.cloudfront.net/vue/img/new-vcita-logo.3bed5b5b.svg"
    }
  },
  "todo": {
    "todo": {}
  },
  "test": 7565766,
}

const getState = (iframeId) => {
  return Promise.resolve(simpleState)
}

export default {
  getState
}