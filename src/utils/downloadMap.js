import { svgAsDataUri, saveSvgAsPng } from 'save-svg-as-png'

const trackEvent = (type, mapType) => {
  if (process.env.NODE_ENV !== 'production') return

  window.ga('send', {
    hitType: 'event',
    eventCategory: 'Save Button',
    eventAction: type,
    eventLabel: mapType,
  });
}

export const downloadPng = (mapType) => {
  const gElement = document.getElementById('root-svg-group')
  const scaleFactor = gElement.getBoundingClientRect().width / gElement.getBBox().width
  const scale = 3 * scaleFactor

  const options = { scale, backgroundColor: 'white' }
  saveSvgAsPng(document.getElementsByTagName('svg')[0], 'datamapsco', options);
  trackEvent('PNG', mapType)
}

export const downloadSvg = (mapType) => {
  const a = document.createElement('a')
  const svg = document.getElementsByTagName('svg')[0]
  svgAsDataUri(svg, {}, (uri) => { a.href = uri })

  a.download = 'datamapsco'
  document.body.appendChild(a)
  a.addEventListener('click', () => a.parentNode.removeChild(a))
  a.click()
  trackEvent('SVG', mapType)
}
