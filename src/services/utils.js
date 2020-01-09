export function mountTweetUrl(quote) {
  let { text, author } = quote;
  text = text.split(' ').join('%20');
  author = author.split(' ').join('%20');
  const url = `https://twitter.com/intent/tweet?hashtags=quotes&text=%22${text}%22%20-%20${author}`;
  return url;
}

export const colors = [
  '#222',
  '#7159C1',
  '#2292A4',
  '#008148',
  '#00BD9D',
  '#DA2C38',
  '#43291F',
];
