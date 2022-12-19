<template>
    <Component
        :is="tag"
        class="card bg-dark-purple-900 border"
        :class="{ 'border-opacity-25': !noBorderOpacity, 'bg-opacity-50': !noBgOpacity }"
    >
        <slot />
    </Component>
</template>

<script>
    export default {
        name: 'Card',

        props: {
            tag: {
                type: String,
                default: 'div',
            },
            noBorderOpacity: {
                type: Boolean,
                default: false,
            },
            noBgOpacity: {
                type: Boolean,
                default: false,
            },
        },
    };
</script>

<style
>
    .card {
        border-color: #8d2191;
    }
</style>
