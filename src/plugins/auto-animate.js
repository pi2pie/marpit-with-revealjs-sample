import plugin from '@marp-team/marpit/plugin'

// An example of Marpit plugin to add auto-animate support for reveal.js
export default plugin(({ core, marpit }) => {
  marpit.customDirectives.local.autoAnimate = autoAnimate => ({ autoAnimate })

  core.ruler.after(
    'marpit_directives_apply',
    'marpit_reveal_auto_animate',
    state => {
      if (state.inlineMode) return

      for (const token of state.tokens) {
        const { marpitDirectives } = token.meta || {}
        const { autoAnimate } = marpitDirectives || {}

        if (autoAnimate) token.attrSet('data-auto-animate', !!autoAnimate)
      }
    }
  )
})
