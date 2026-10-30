import { googleLanguageCodes } from './language-options.js'

let libraryPromise

function waitForLibrary() {
  if (window.google?.translate?.TranslateElement) return Promise.resolve(true)
  if (libraryPromise) return libraryPromise
  libraryPromise = new Promise((resolve) => {
    let finished = false
    const done = (result) => {
      if (finished) return
      finished = true
      resolve(result)
    }
    window.googleTranslateElementInit = () => done(true)
    let script = document.querySelector('script[data-shagun-translate]')
    if (!script) {
      script = document.createElement('script')
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      script.async = true
      script.dataset.shagunTranslate = 'true'
      script.onerror = () => done(false)
      document.head.appendChild(script)
    }
    window.setTimeout(() => done(Boolean(window.google?.translate?.TranslateElement)), 8000)
  })
  return libraryPromise
}

function waitForSelector(attempt = 0) {
  const select = document.querySelector('#google_translate_element .goog-te-combo')
  if (select || attempt > 60) return Promise.resolve(select)
  return new Promise((resolve) => window.setTimeout(() => resolve(waitForSelector(attempt + 1)), 50))
}

function translationApplied() {
  return document.documentElement.classList.contains('translated-ltr') || document.documentElement.classList.contains('translated-rtl')
}

function dispatchLanguage(select, code) {
  select.value = code
  select.dispatchEvent(new Event('change', { bubbles: true }))
}

function waitForTranslation(attempt = 0) {
  if (translationApplied() || attempt > 50) return Promise.resolve(translationApplied())
  return new Promise((resolve) => window.setTimeout(() => resolve(waitForTranslation(attempt + 1)), 60))
}

export async function activateAutomaticTranslation(code) {
  const ready = await waitForLibrary()
  const mount = document.getElementById('google_translate_element')
  if (!ready || !mount || !window.google?.translate?.TranslateElement) return false
  mount.replaceChildren()
  new window.google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: googleLanguageCodes,
    autoDisplay: false,
  }, 'google_translate_element')
  const select = await waitForSelector()
  if (!select) return false
  if (!translationApplied() && select.value === code) {
    dispatchLanguage(select, '')
    await new Promise((resolve) => window.setTimeout(resolve, 80))
  }
  dispatchLanguage(select, code)
  return waitForTranslation()
}

export function prepareAutomaticTranslation(code) {
  const value = `/en/${code}`
  document.cookie = `googtrans=${value}; path=/; SameSite=Lax`
  const hostname = location.hostname
  if (hostname && hostname !== 'localhost' && hostname !== '127.0.0.1') {
    document.cookie = `googtrans=${value}; path=/; domain=${hostname}; SameSite=Lax`
  }
}

export function clearAutomaticTranslation() {
  const expires = 'Thu, 01 Jan 1970 00:00:00 GMT'
  document.cookie = `googtrans=; expires=${expires}; path=/`
  if (location.hostname) document.cookie = `googtrans=; expires=${expires}; path=/; domain=${location.hostname}`
}
