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
                Z4nders Club 👋🏼             
            </h1>
            <p
                class="mb-8 text-xl leading-relaxed text-justify lg:text-left lg:text-1xl"
            >
                Z4nders Club é um canal do Discord focado em criar um ambiente de aprendizado mútuo.
            </p>
            <div class="flex justify-center">              
                <a
                    class="
                    flex items-center px-6 py-2 mt-auto font-semibold 
                    transition duration-500 
                    bg-primary-400 rounded-lg hover:bg-primary-500 
                    focus:shadow-outline focus:outline-none 
                    focus:ring-2 ring-offset-current 
                    ring-offset-2
                    "
                    target="_blank"
                    href="https://discord.gg/JspQr3GPve"
                >
                    <span>
                        <font-awesome-icon icon="fa-brands fa-discord" class="py-2 px-2 text-xl"/>
                    </span>
                    <span>Venha fazer parte</span>
                </a>
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
