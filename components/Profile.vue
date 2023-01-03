<template>
    <div class="text-primary-50 flex items-center space-x-4 rounded-2xl ">
        <img
            class="flex-none flex items-center justify-center rounded-3xl p-2 sm:p-3 w-20 h-20 sm:w-40 sm:h-40"
            src="/img/profile.png"
            alt="Avatar"
        >

        <div>
            <div>
                <span class="text-base md:text-2xl"><span class="font-light">Olá, eu sou o</span> <b class="font-bold">Zanders</b></span>
            </div>
            <div class="mt-1 md:flex md:items-center md:space-x-3 space-y-1 md:space-y-0">
                <div class="flex items-center space-x-3">
                    <div class="flex items-center space-x-1 text-sm">
                        Eterno estudante e engenheiro de software
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Profile',

        data() {
            return {
            };
        },

        methods: {},
    };
</script>