<template>
    <div
        class="text-primary-50 container flex flex-col items-center px-5 mx-auto lg:px-20 lg:pt-20 py-3 md:flex-row"
    >
       
        <div
            class="flex flex-col items-center text-center lg:flex-grow lg:pl-24 pt-10"
        >
            <h1
                class="mb-8 text-2xl font-bold tracking-tighter text-center lg:text-left lg:text-5xl title-font"
            >
                Realizo algumas lives na twitch 👋🏼
            </h1>
            <p
                class="mb-8 text-base leading-relaxed text-center lg:text-left lg:text-1xl"
            >
                Essa é minha bio pessoal de código aberto, e sinta-se livre para
                fazer o uso que desejar desse código, se curtiu interaja comigo
                nos meus links e vamos movimentar a comunidade
            </p>
            <div class="flex justify-center">
                <button
                    class="
                        flex items-center px-6 py-2 mt-auto font-semibold transition duration-500 
                        ease-in-out transform 
                        bg-primary-400 rounded-lg hover:bg-primary-500 
                        focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2
                    "
                >
                    <a
                        target="_blank"
                        href="https://github.com/z4nder/z4nder-bio"
                    >Código fonte </a>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MakeInteraction',

        data() {
            return {};
        },

        methods: {},
    };
</script>
