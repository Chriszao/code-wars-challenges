String.prototype.toJadenCase = function (): string {
  const text = this.valueOf();

  let result = '';

  for (let index = 0; index < text.length; index += 1) {
    const currentPosition = text[index];
    const previousPosition = text[index - 1];

    if (previousPosition === ' ') {
      result = result.concat(currentPosition.toUpperCase());
      continue;
    }

    if (index === 0) {
      result = result.concat(currentPosition.toUpperCase());
      continue;
    }

    result = result.concat(currentPosition);
  }

  return result;
};

interface String {
  toJadenCase(): string;
}
