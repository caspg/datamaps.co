import d3 from 'd3'
import { List } from 'immutable'

function countOccurences(delimiter, string) {
  const result = string.match(new RegExp(`\\${delimiter}`, 'g'))

  return result ? result.length : 0
}

export default function parseFile(string) {
  const delimiters = [',', ';', 't', '|']
  const occurrences = delimiters.reduce((results, delimiter, i) =>
    results.push({
      count: countOccurences(delimiter, string),
      index: i,
    })
  , new List())

  return d3.dsv(
    delimiters[occurrences.sortBy(i => i.count).last().index]
  ).parse(string)
}
