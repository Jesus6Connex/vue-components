const spacingSet = {
  mobile: '7.0625rem',
  desktop: '4.0625rem',
}

module.exports = {
  /**
   * To generate utilities as !important, set the important key in your configuration options to true
   * See: https://tailwindcss.com/docs/configuration#important
   */
  important: true,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.vue'],
  theme: {
    extend: {
      gridTemplateColumns: {
        footer: 'repeat(4, minmax(auto, auto))'
      },
      opacity: {
        60: '.6',
        87: '0.87'
      },
      colors: {
        primary: 'var(--primary)',
        'primary-light-50': '#e8ebf4'
      },
      inset: {
        ...spacingSet
      },
      spacing: {
        ...spacingSet,
      },
      height: {
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
      }
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'checked', 'active'],
    boxShadow: ['responsive', 'hover', 'focus', 'checked', 'active'],
    margin: ['responsive', 'first']
  },
  plugins: [],
  /**
   * Tailwind's generated utility classes will be prefixed with 'tw-',
   * all tailwind classes MUST include 'tw-'
   * See: https://tailwindcss.com/docs/configuration#prefix
   */
  prefix: 'tw-',
  corePlugins: {
    /**
     * Disables Tailwind'cs base styles injection
     * See: https://tailwindcss.com/docs/preflight
     */
    preflight: false,
    /**
     * Disables Tailwind's container core plugin
     * See: https://tailwindcss.com/docs/configuration#core-plugins
     */
    container: false
  }
}
