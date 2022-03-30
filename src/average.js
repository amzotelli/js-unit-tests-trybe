const average = (param) => {
  if (param.length === 0) {
    return undefined;
  }
  for (let i = 0; i < param.length; i += 1) {
    if (typeof param[i] !== 'number') {
      return undefined;
    }
  }
  return Math.round(param.reduce((somaValores, valorAtual) =>
    somaValores + valorAtual, 0) / param.length);
};

module.exports = average;
