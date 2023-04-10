const getPagesCount = (maxPages: number): Array<number> => {
  let pages: Array<number> = [];
  for (let i = 1; i <= maxPages && i < 4; i += 1) {
    pages.push(i);
  }
  return pages;
}

export default getPagesCount;