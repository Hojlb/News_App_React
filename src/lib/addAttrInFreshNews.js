export default function addAttrInFreshNews(data) {
  if( Array.isArray(data) ) {
    return data.map( item => Object.assign(item,
      {
        like:0,
        viewers: 0,
        newsID: item.title || new Date().toString()
      }
      ))
  }
  return Object.assign(data, {
    like:0,
    viewers: 0,
    newsID: data.title || new Date().toString(),
  });
}