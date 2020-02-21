module.exports = class JestFailureReporter {
  constructor(globalConfig, options) {
    this.globalConfig = globalConfig
    this.options = options
  }

  onRunComplete(contexts, results) {
    for (const value of contexts.values()) {
      var rootDir = value.config.rootDir
    }
    const retryCommand = this.options.retryCommand || 'yarn test -t'
    results.testResults.forEach(result => {
      const testFilePath = result.testFilePath
      const failure = []
      result.testResults.forEach(test => {
        if (test.status === 'failed') {
          const title = [...test.ancestorTitles, test.title]
            .join(' ')
            .replace(/"/g, '\\"')
          failure.push(`${retryCommand} "${title}"`)
        }
      })
      if (failure.length > 0) {
        console.log(testFilePath.replace(rootDir, '.'))
        console.log(failure.join('\n'))
      }
    })
  }
}
