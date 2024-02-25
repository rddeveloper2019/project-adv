import webpack from 'webpack';
import {buildLoaders} from './buildLoaders';
import {buildResolvers} from './buildResolvers';
import {buildPlugins} from './buildPlugins';
import {BuildOptions} from './types/config';
import {buildDevserver} from './buildDevServer';

export function BuildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        module: buildLoaders(options),
        resolve: buildResolvers(options),
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevserver(options) : undefined
    }
}