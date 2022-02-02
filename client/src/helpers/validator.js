export function validateEmail (email) {
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export function validateCheatsheetConfig (config) {
  const { title, description, section, tags } = config
  let errors = { ok: false, msg: [] }

  if (title === 'Documento sin título' || title === '') {
    errors = { ok: true, msg: [...errors.msg, 'Titulo'] }
  }

  if (description === 'Descripción' || description === '') {
    errors = { ok: true, msg: [...errors.msg, 'Descripción'] }
  }

  if (Object.keys(section).length === 0) {
    errors = { ok: true, msg: [...errors.msg, 'Sección'] }
  }

  if (tags.length === 0) {
    errors = { ok: true, msg: [...errors.msg, 'Tags'] }
  }
  return errors
}
