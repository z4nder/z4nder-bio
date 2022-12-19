<template>
    <div>
        <Heading tag="h2">
            <span>Técnologias</span>
            <span>👨🏻‍💻</span>
        </Heading>

        <div class="text-white grid grid-cols-4 md:grid-cols-5 gap-2">
            <Card
                v-for="link in links"
                :key="link.label"
                tag="a"
                :href="link.href"
                target="_blank"
                class="flex flex-col md:flex-row items-center md:space-x-3 space-y-3 md:space-y-0 rounded-lg px-5 py-5"
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
        name: 'SkillsBox',

        data() {
            return {
                links: [
                    { 
                        label: 'Laravel', 
                        icon: 'fa-brands fa-laravel', 
                        href: 'https://laravel.com/' 
                    },
                    { 
                        label: 'VueJs', 
                        icon: 'fa-brands fa-vuejs',  
                        href: 'https://vuejs.org/' 
                    },
                ],
            };
        },

        methods: {},
    };
</script>
