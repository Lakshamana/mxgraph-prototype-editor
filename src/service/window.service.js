export function addToWindow(key, value) {
  window[key] = value
}

export function removeFromWindow(key) {
  delete window[key]
}
