const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
            '@images': path.resolve(__dirname, './resources/images'),
            '@lang': path.resolve(__dirname, './resources/lang'),
            '@utils': path.resolve(__dirname, './resources/js/common/utils'),
            '@font': path.resolve(__dirname, './resources/fonts'),
        }
    }
};
