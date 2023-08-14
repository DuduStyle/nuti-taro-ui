const config = {
  projectName: 'nuti-taro-ui',
  date: '2023-8-4',
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: ['@tarojs/plugin-html'],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  compiler: {
    type: 'webpack5',
    prebundle: {
      enable: false
    }
  },
  cache: {
    enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ['nut-']
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/h5',
    staticDirectory: 'static',
    // esnextModules: ['nutui-react'],
    webpackChain(chain, Webpack) {
      const MiniCssExtractPlugin = require('mini-css-extract-plugin')
      chain.merge({
        module: {
          rules: [
            {
              test: /\.css$/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: () => {
                      return '//mallstatic-s-cdn2.xxx.cn/mall/h5/'
                    },
                  },
                },
                'css-loader',
              ],
            },
          ],
        },
      })
    },
    router: {
      mode: 'browser', // 使用history模式
      basename: '/h5', // 添加basesname为/h5后 使用taro路由跳转后的路径为 /h5/url 但在地址栏输入 url 和 /h5/url 都可以访问到对应的页面
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ['nut-']
        }
      },
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    output: {
      filename: `js/[name].[hash:8].js`,
      chunkFilename: `js/[name].[chunkhash:8].js`,
      publicPath: () => {
        return `//mallstatic-s-cdn2.xxx.cn/mall/h5/`
      },
    },
    miniCssExtractPluginOption: {
      filename: `css/[name].[hash:8].css`,
		  chunkFilename: `css/[id].[chunkhash:8].css`,
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
