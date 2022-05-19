module.exports = {
    devServer: {
        proxy: 'http://159.75.110.59:8090',
        // proxy: {
        //     '/user': {
        //         taarget: 'http://159.75.110.59:8090',
        //         changeorigin: true,
        //     },
        // }
    }
}