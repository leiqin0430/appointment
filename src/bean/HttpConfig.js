class HttpConfig {
  constructor (cfg) {
    this.caller = cfg.caller || null
    // url is required
    this.url = cfg.url || ''
    // 默认值为'get'
    this.method = cfg.method ? cfg.method.toLowerCase() : 'get'
    this.params = cfg.params || null
    // 默认值为true
    this.reminder = cfg.reminder !== false
    this.success = cfg.success || null
    this.error = cfg.error || null
  }
  testFn () {
    console.log('httpconfig')
  }
}

export default HttpConfig
