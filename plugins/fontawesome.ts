// For Nuxt 3
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faJs, faPhp, faGithub, faInstagram, faLaravel, faVuejs, faRust, faTwitter, faLinkedin, faTwitch } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false
library.add(
  faGithub, faInstagram, faLaravel, faVuejs, faJs,
  faRust, faTwitter, faLinkedin, faTwitch, faPhp
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})