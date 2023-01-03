// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    app: { 
        head: { 
            link: [ 
                {rel: 'icon', type: "image/x-icon", href: '/img/favicon.svg'},
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=DM+Sans&family=Nunito:wght@200;400;600&display=swap'
                }
            ] 
        } 
    }
})
