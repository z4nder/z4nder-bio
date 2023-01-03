<template>
    <Component
        :is="tag"
        class="text-primary-50 flex items-center space-x-3 text-lg font-medium"
    >
        <slot />
    </Component>
</template>

<script>
    export default {
        name: 'Heading',

        props: {
            tag: {
                type: String,
                default: 'div',
            },
        },

        data() {
            return {
            };
        },

        methods: {},
    };
</script>
