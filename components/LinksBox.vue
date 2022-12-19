<template>
    <div>
        <Heading tag="h2">
            <span>Meus links</span>
            <span>🔗</span>
        </Heading>

        <div class="text-white grid grid-cols-4 md:grid-cols-5 gap-2">
            <Card
                v-for="link in links"
                :key="link.label"
                tag="a"
                :href="link.href"
                target="_blank"
                class="flex flex-col md:flex-row items-center md:space-x-3 space-y-3 md:space-y-0 rounded-lg px-3 py-3"
            >
                <div class="flex-none flex items-center justify-center w-8 h-8">
                    <font-awesome-icon icon="fa-brands fa-laravel" />
                </div>

                <div class="text-xs md:text-sm truncate">
                    {{ link.label }}
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LinksBox',

    data() {
        return {
            links: [
                {
                    label: 'GitHub',
                    img: '/img/github.svg',
                    img_alt: 'GitHub',
                    href: 'https://github.com/gusttavodev'
                },
                {
                    label: 'Instagram',
                    img: '/img/instagram.svg',
                    img_alt: 'Instagram @gusttavo212',
                    href: 'https://www.instagram.com/gusttavo212/'
                }
                // { label: 'Youtube', img: require('@/assets/img/youtube.svg'), img_alt: 'Youtube /tiagomatosweb', href: 'https://www.youtube.com/tiagomatosweb?sub_confirmation=1' },
                // { label: 'Blog', img: require('@/assets/img/laptop.svg'), img_alt: 'Blog blog.tiagomatos.com', href: 'https://blog.tiagomatos.com/' },
            ]
        }
    },

    methods: {}
}
</script>
