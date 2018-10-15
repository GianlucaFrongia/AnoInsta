const config = {
	plugins: {
	  'postcss-import': {},
	  'postcss-url': {},
	  'postcss-custom-properties': {
		 preserve: false
	  },
	  'postcss-nested': {},
	  'postcss-nesting': {},
	  'postcss-custom-selectors': {},
	  'postcss-preset-env': {
		 stage: 0,
		 features: ['css-nesting']
	  },
	  'cssnano': {
		 preset: ['default', {
			discardComments: {
			  removeAll: true,
			},
		 }]
	  },
	}
 };
 
 
 module.exports = config;