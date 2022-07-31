# Jaden Casing Strings

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

```
  Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
  Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
```



# My Solution
*I tried to think of something more descriptive and easier to understand.*
*I used typescript for this challenge*

```ts
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
```

A smarter, shorter solution:
```ts
String.prototype.toJadenCase = function (): string {
  return this.split(/\s/)
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(' ');
};
```