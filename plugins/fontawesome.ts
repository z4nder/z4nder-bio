// For Nuxt 3
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faInstagram, faLaravel, faVuejs } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false
library.add(faGithub, faInstagram, faLaravel, faVuejs)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})