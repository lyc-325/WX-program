import R from '../libs/ramda'

const _log = R.curry((type, options) => {
  const { page, opr, info } = options
  const prompt = `[${page}] --> [${opr}]`
  switch (type) {
    case 'error':
      console.error(prompt, info)
      break
    case 'info':
      console.info(prompt, info)
      break
    case 'log':
      console.log(prompt, log)
      break
  }
})

export const error = _log('error')
export const info = _log('info')
export const log = _log('log')
