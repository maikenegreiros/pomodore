module.exports = {
    entry: {
        main: './main.ts'
    },
    mode: "development",
    resolve: {
        extensions: ['.js','.ts']
    },
    output: {
        path: __dirname + "/public/js/",
        filename: '[name]-bundle.js'
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    }
};
