import plugin from '@marp-team/marpit/plugin'

// An example of Marpit plugin to add transition support for reveal.js
export default plugin(({ core, marpit }) => {
  marpit.customDirectives.local.transition = transition => ({ transition })

  core.ruler.after(
    'marpit_directives_apply',
    'marpit_reveal_transition',
    state => {
      if (state.inlineMode) return

      for (const token of state.tokens) {
        const { marpitDirectives } = token.meta || {}
        const { transition } = marpitDirectives || {}

        if (transition) token.attrSet('data-transition', transition)
      }
    }
  )
})
