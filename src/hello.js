module.exports = (pluginContext) => {
  return {
    respondsTo: (query) => {
      return query.match(/hello.*/)
    },
    search: (query, env = {}) => {
      const name = query.split(/\s+/)[1] || ''
      const title = name ? `Hello, ${name}!` : 'Hello!'
      return new Promise((resolve, reject) => {
        resolve([
          {
            icon: 'fa-hand-spock-o',
            title,
            subtitle: 'Please type your name!',
          }
        ])
      })
    },
  }
}
