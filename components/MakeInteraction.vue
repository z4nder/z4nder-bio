<template>
    <div
        class="container flex flex-col items-center px-5 mx-auto lg:px-20 lg:py-5 py-3 md:flex-row"
    >
        <div class="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
            <img
                class="object-cover object-center rounded"
                src="@/assets/img/app_development.svg"
                alt="Computador"
            >
        </div>
        <div
            class="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left"
        >
            <h1
                class="mb-8 text-2xl font-bold tracking-tighter text-center lg:text-left lg:text-5xl title-font text-white"
            >
                Realizo algumas lives na twitch 👋🏼
            </h1>
            <p
                class="text-white mb-8 text-base leading-relaxed text-center text-gray-700 lg:text-left lg:text-1xl"
            >
                Essa é minha bio pessoal de código aberto, e sinta-se livre para
                fazer o uso que desejar desse código, se curtiu interaja comigo
                nos meu meus links e vamos movimentar a comunidade
            </p>
            <div class="flex justify-center">
                <button
                    class="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-900 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
                >
                    <a
                        target="_blank"
                        href="https://www.sympla.com.br/desenvolvendo-uma-api-rest-com-laravel__1168500"
                    >Codigo fonte </a>
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
