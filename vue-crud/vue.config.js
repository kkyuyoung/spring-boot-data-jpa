module.exports = {
    outputDir: "../src/main/resources/static",
    indexPath: "../static/index.html",
    devServer: {
        proxy: "http://192.168.0.60:8081" //vue 개발 주소
    }
};