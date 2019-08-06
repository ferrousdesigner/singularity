module.exports = {
    components: 'src/components/**/[A-Z]*.js',
    ignore: ['**/SubComponents/**', '**/__tests__/**', '**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}', '**/*.d.ts'],
    theme: {
        color: {
            base: '#333',
            light: '#767676',
            lightest: '#ccc',
            link: '#1978c8',
            linkHover: '#1d3dff',
            border: '#e8e8e8',
            name: '#7f9a44',
            type: '#b77daa',
            error: '#c00',
            baseBackground: '#fff',
            codeBackground: '#f5f5f5',
            sidebarBackground: '#f5f5f5',
            ribbonBackground: '#f9970d',
            ribbonText: '#fff',
        },
        fontFamily: {
          base: '"Poppins", sans-serif'
        }
      },
    styles: {
        StyleGuide: {
            '@global :root': {
                fontSize: '10px'
            },
            '@global body': {
                zIndex: 1
            },
            '@global div[class^="rsg-preview"]': {
                border: '1px #e8e8e8 solid',
                background: 'none'
            }
        }
    }
  }