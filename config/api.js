export default function domain(domain) {
  return `${ process.env.NODE_ENV === `development` ?
      'http://localhost:29599' :
      'https://gramofon-shop.cz/' }/api/${ domain }`
}