export default {
    rootDir: 'app',
    head: {
        titleTemplate: '%s - Nuxt.js',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        
            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
            { hid: 'description', name: 'description', content: 'Meta description' },
            {rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
        ]
    },
    css: [
        '~/style/index.scss',
    ],
    modules: ['@nuxtjs/style-resources'],
    styleResources: {
        scss: [
            '~/style/vars/index.scss',
        ]
    },
    plugins: [
        {src: '~/plugins/mq.js', mode: 'client'}
    ]
}