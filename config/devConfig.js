const path=require('path');
const webpack = require('webpack'); //访问内置的插件

const config={
//	entry:__dirname+'/../src/main.js',
	mode:'development',
	entry:path.resolve(__dirname,'../src/main.js'),
	output:{
		filename:'[name].bundle.js',
//		path:__dirname+'/../dist'
		path:path.resolve(__dirname,'../dist'),
		publicPath:'dist/'
	},
	devServer:{
		contentBase:'./',
		port:6001,
		hot:true
	},
	module:{
		rules:[
			{test:/\.vue$/,use:'vue-loader'},
			{test:/\.css$/,use:['style-loader','css-loader']},
			{test:/\.less$/,use:['style-loader','css-loader','less-loader']},
			{
				test:/\.(png|svg|jpg|jpeg|gif)$/,
				use:{
					loader:'file-loader',
					options:{
						outputPath:'images'
					}
				}
			},
			{
				test:/\.(woff|woff2|eot|ttf|otf)$/,
				use:{
					loader:'file-loader',
					options:{
						outputPath:'fonts'
					}
				}
			}
		]
	},
	plugins:[
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
		  $: 'jquery',
		  Bscroll:'better-scroll'
//		  cc: 'jquery',
//		  mui:'muia'
		})
	]				
};

module.exports=config;
