import random, { number, string, from as randomFrom } from '../src';

describe('@zcorky/random', () => {
  it('default', () => {
    expect(random(0, 0)).toBe(0);
    expect(random(16, 16)).toBe(16);
    expect(random(0, 16)).toBeGreaterThanOrEqual(0);
    expect(random(0, 16)).toBeLessThan(16);
    expect(random(1, 16)).toBeGreaterThanOrEqual(1);
    expect(random(1, 16)).toBeLessThan(16);
    expect(random(9, 16)).toBeGreaterThanOrEqual(9);
    expect(random(9, 16)).toBeLessThan(16);
  });

  it('number', () => {
    expect(number(0, 0)).toBe(0);
    expect(number(16, 16)).toBe(16);
    expect(number(0, 16)).toBeGreaterThanOrEqual(0);
    expect(number(0, 16)).toBeLessThan(16);
    expect(number(1, 16)).toBeGreaterThanOrEqual(1);
    expect(number(1, 16)).toBeLessThan(16);
    expect(number(9, 16)).toBeGreaterThanOrEqual(9);
    expect(number(9, 16)).toBeLessThan(16);
  });

  it('string', () => {
    expect(string().length).toBeGreaterThanOrEqual(16);
    expect(string(0).length).toBe(0);
    expect(string(1).length).toBe(1);
    expect(string(9).length).toBe(9);
    expect(string(16).length).toBe(16);
    expect(string(100).length).toBe(100);
  });

  it('from:count', () => {
    expect(Array.isArray(randomFrom(['a', 'bc', 'de', 'f']))).toBeFalsy();
    expect(randomFrom(['a', 'bc', 'de', 'f'], 2).length).toBe(2);
    expect(randomFrom(['a', 'bc', 'de', 'f'], 0).length).toBe(0);
    expect(randomFrom(['a', 'bc', 'de', 'f'], 10).length).toBe(10);
  });

  it('from:realworld', () => {
    const gravatar = [
      '//img.souche.com/20161230/png/58f22ad636a0f33bad8762688f78d425.png',
      '//img.souche.com/20161230/png/6cdcda90c2f86ba1f45393cf5b26e324.png',
      '//img.souche.com/20161230/png/f9d10bb683d940dd14dc1b1344e89568.png',
      '//img.souche.com/20161230/png/8bb4f0fd45ed6ae26533eadd85f0f7ea.png',
      '//img.souche.com/20161230/png/0795744371fd5869af6cab796bdacb95.png',
      '//img.souche.com/20161230/png/bc836261fbb654dda6b653e428014279.png',
      '//img.souche.com/20161230/png/fd9f8aecab317e177655049a49b64d02.png'
    ];

    expect(gravatar.some(e => e === randomFrom(gravatar))).toBeTruthy();

    const three = randomFrom(gravatar, 3);
    expect(three.length).toBe(3);
    expect(gravatar.some(e => e === three[0])).toBeTruthy();
    expect(gravatar.some(e => e === three[1])).toBeTruthy();
    expect(gravatar.some(e => e === three[2])).toBeTruthy();
  });
});
