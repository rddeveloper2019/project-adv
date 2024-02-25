import path from 'path';
import webpack from 'webpack';
import {BuildWebpackConfig} from './config/build/BuildWebpackConfig';
import {BuildEnv, BuildOptions, BuildPaths} from './config/build/types/config';


export default (env: BuildEnv): webpack.Configuration => {

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }
    
    const port = env.port || 3000
    const mode = env.mode || 'development'
    const isDev = mode === 'development'
    const options: BuildOptions = {
        mode,
        paths,
        isDev,
        port,
    }

    return BuildWebpackConfig(options)
}