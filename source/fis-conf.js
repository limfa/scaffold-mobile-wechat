fis.match('**', {
    domain: '.',
});
// 使用hash
fis.match('*.{css,js,png,jpg,gif}', {
    // useHash: true,
});
// 不发布文件
fis.match('scss/**', {
    release: false,
});
fis.match('img/icon/**', {
    release: false,
});
fis.match('**.{md,rb,cmd}', {
    release: false,
});

// -------------------- public 
fis.media('pub').match('**.js', {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin('uglify-js')
});
fis.media('pub').match('**.css', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
});
fis.media('pub').match('**.png', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
});
