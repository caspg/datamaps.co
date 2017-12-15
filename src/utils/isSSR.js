/**
 * @returns {Boolean}
 */
function isSSR() {
  return (typeof window === 'undefined')
}

export default isSSR
