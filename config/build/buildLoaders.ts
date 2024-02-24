import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from './types/config';

export const buildLoaders = ({isDev}: BuildOptions): webpack.RuleSetRule => {
    const scssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (
                            resourcePath: string,
                        ): boolean => Boolean(resourcePath.includes('.module')),
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:5]',
                    }
                },

            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    }

    const typescriptLoaders = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return {
        rules: [
            typescriptLoaders, scssLoaders
        ],
    }
}