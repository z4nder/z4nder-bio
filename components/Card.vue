<template>
    <Component
        :is="tag"
        class="card bg-dark-purple-900 shadow-md shadow-dark-purple-900/200"
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
        background-color: #afa4fd;
    }
</style>
