<template>
    <div>
        <Heading tag="h2">
            <span>Meus links</span>
            <span>🔗</span>
        </Heading>

        <div class="grid grid-cols-3 md:grid-cols-5 gap-2">
            <Card
                v-for="link in links"
                :key="link.label"
                tag="a"
                :href="link.href"
                target="_blank"
                class="flex flex-col md:flex-row items-center md:space-x-3 space-y-3 md:space-y-0 rounded-lg px-3 py-3"
            >
                <div class="flex-none flex items-center justify-center w-8 h-8">
                    <font-awesome-icon :icon="link.icon" class="text-2xl"/>
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
                    icon: 'fa-brands fa-github',
                    href: 'https://github.com/z4nder'
                },
                {
                    label: 'Instagram',
                    icon: 'fa-brands fa-instagram',
                    href: 'https://www.instagram.com/z4nder212/'
                },
                {
                    label: 'Twitter',
                    icon: 'fa-brands fa-twitter',
                    href: 'https://twitter.com/z4nder212'
                },
                {
                    label: 'Twitch',
                    icon: 'fa-brands fa-twitch',
                    href: 'https://www.twitch.tv/z4nder212'
                },
                {
                    label: 'Linkedin',
                    icon: 'fa-brands fa-linkedin',
                    href: 'https://www.linkedin.com/in/gustavo-alexandre-052126150/'
                }
            ]
        }
    },

    methods: {}
}
</script>
