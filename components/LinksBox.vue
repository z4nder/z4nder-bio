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
                }
            ]
        }
    },

    methods: {}
}
</script>
