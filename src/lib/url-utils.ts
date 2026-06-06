export function withTrailingSlash(href: string | undefined): string | undefined {
  if (!href || !href.startsWith('/') || href.startsWith('//') || href === '/') {
    return href
  }

  const hashIndex = href.indexOf('#')
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : ''
  const withoutHash = hashIndex >= 0 ? href.slice(0, hashIndex) : href
  const queryIndex = withoutHash.indexOf('?')
  const query = queryIndex >= 0 ? withoutHash.slice(queryIndex) : ''
  const path = queryIndex >= 0 ? withoutHash.slice(0, queryIndex) : withoutHash
  const lastSegment = path.split('/').pop() ?? ''

  if (path.endsWith('/') || lastSegment.includes('.')) {
    return href
  }

  return `${path}/${query}${hash}`
}
