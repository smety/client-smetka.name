export default function getMockData(data) {
  return `${ process.env.NODE_ENV === `development` ?
      'http://localhost:3001' :
      'http://www.smetka.name' }/static/mock/${ data }.json`
}
