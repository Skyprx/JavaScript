const tips_SameContents = (a, b) => {
    for (const v of new Set([...a, ...b]))
      if (a.filter(e => e === v).length !== b.filter(e => e === v).length) return false;
    return true;
  };
  
  console.log(tips_SameContents([1, 2, 4, 6], [6, 2, 4, 1]));