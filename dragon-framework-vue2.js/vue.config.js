/**
 * 导入压缩插件
 */
const CompressionWebpackPlugin = require('compression-webpack-plugin');

/**
 * 导入程序信息
 */
const appInfo = require('./package.json');

process.env.VUE_APP_NAME = appInfo.name;
process.env.VUE_APP_DESCRIPTION = appInfo.description;
process.env.VUE_APP_VERSION = appInfo.version;

/**
 * 如果没有指定访问路径，则默认将项目名称作为访问路径
 */
if (!process.env.VUE_APP_PUBLIC_PATH) {
  process.env.VUE_APP_PUBLIC_PATH = `/${process.env.VUE_APP_NAME}/`;
}

const isDev = process.env.NODE_ENV === 'development'; // 是否开发环境

module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  outputDir: `dist/${process.env.VUE_APP_NAME}_${process.env.VUE_APP_VERSION}.${process.env.VUE_APP_NODE_ENV}`,
  assetsDir: 'static',
  productionSourceMap: true, // 生成 map 文件，map 文件可用于浏览器调试时代码定位
  lintOnSave: true,
  runtimeCompiler: true,
  pages: {
    index: {
      title: process.env.VUE_APP_TITLE,
      entry: 'src/entry.ts',
      template: 'public/index.html',
      filename: 'index.html',
      // 指定程序启动所需模块
      chunks: [
        'vue',
        'vuex',
        'vue-router',
        'axios',
        'element-ui',
        'echarts',
        'vendors',
        'index',
      ],
    },
  },
  chainWebpack: (config) => {
    // ignore this method.
  },
  configureWebpack: (config) => {
    // noinspection JSUnusedGlobalSymbols
    config.performance = {
      // 文件太大给出性能警告
      hints: 'warning',
      // 入口文件超过 512 KB 报出警告
      maxEntrypointSize: 512 * 1024 * (isDev ? 100 : 1),
      // 编译文件超过 256 KB 报出警告
      maxAssetSize: 256 * 1024 * (isDev ? 100 : 1),
      // 给出 html、css、js 文件太大性能警告
      assetFilter: (filename) => {
        const suffixes = ['.html', '.css', '.js'];
        for (const suffix of suffixes) {
          if (filename.endsWith(suffix)) {
            return true;
          }
        }
        return false;
      },
    };
    config.optimization = {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vue: {
            name: 'vue',
            test: /[\\/]node_modules[\\/]vue[\\/]/,
            priority: 1,
          },
          vuex: {
            name: 'vuex',
            test: /[\\/]node_modules[\\/]vuex[\\/]/,
            priority: 1,
          },
          'vue-router': {
            name: 'vue-router',
            test: /[\\/]node_modules[\\/]vue-router[\\/]/,
            priority: 1,
          },
          axios: {
            name: 'axios',
            test: /[\\/]node_modules[\\/]axios[\\/]/,
            priority: 1,
          },
          'element-ui': {
            name: 'element-ui',
            test: /[\\/]node_modules[\\/]element-ui[\\/]/,
            priority: 1,
          },
          echarts: {
            name: 'echarts',
            test: /[\\/]node_modules[\\/]echarts[\\/]/,
            priority: 1,
          },
          components: {
            name: 'components',
            test: /[\\/]src[\\/]components[\\/]/,
            priority: 1,
          },
          vendors: {
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: 0,
          },
        },
      },
    };
    if (!isDev) {
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: /\.html$|\.js$|\.css|\.json$/,
          threshold: 10 * 1024, // 文件超过 10 KB 开启 GZip 压缩
          algorithm: 'gzip',

          /*
           * 下面这个配置参数有坑：
           * 1) 需要开启 nginx 静态压缩 gzip_static，依赖模块：--with-http_gzip_static_module
           * 2) 而且因为 nginx 配置 try_files 没有找到文件则返回 index.html
           *    删除原始文件后无法找到请求文件，直接返回 index.html，因此无法正确加载压缩文件
           */

          // deleteOriginalAssets: true, // 删除原始文件
          compressionOptions: {
            level: 2,
          },
        }),
      );
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      // 以下三种 patterns 方式都是对的
      patterns: './src/assets/var.less',
      // patterns: ['./src/assets/var.less'],
      // patterns: [
      //   // 两种路径写法都行，这里的路径不能用 @ 符号
      //   // path.resolve(__dirname, './src/assets/var.less'),
      //   // path.resolve(__dirname, 'src/assets/var.less'),
      // ],
    },
  },
  css: {
    extract: true, // 启用 CSS 提取，配置是否将 CSS 提取成单独文件
    sourceMap: true, // 生成 map 文件，map 文件可用于浏览器调试时代码定位
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        // 定义全局变量
        globalVars: {
          PUBLIC_PATH: process.env.VUE_APP_PUBLIC_PATH,
        },
      },
    },
  },
  devServer: {
    // 后端接口服务代理
    proxy: {
      [process.env.VUE_APP_GATEWAY_BASE_URL]: {
        target: process.env.VUE_APP_GATEWAY,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          [`^${process.env.VUE_APP_GATEWAY_BASE_URL}`]: '/',
        },
      },
    },
  },
};
