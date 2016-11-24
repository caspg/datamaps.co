import { dsvFormat } from 'd3-dsv'
import { List } from 'immutable'

function countOccurences(delimiter, string) {
  const result = string.match(new RegExp(`\\${delimiter}`, 'g'))

  return result ? result.length : 0
}

export default function parseFile(string) {
  const delimiters = [',', ';', '\t', '|']
  const occurrences = delimiters.reduce((results, delimiter, i) =>
    results.push({
      count: countOccurences(delimiter, string),
      index: i,
    })
  , new List())

  const delimiter = delimiters[occurrences.sortBy(i => i.count).last().index]

  return dsvFormat(delimiter).parseRows(string)
}
