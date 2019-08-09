import { optr, generateOptr } from '../src';

const v = {
  masterPassword: 'lovelace first programmer blue',
  masterPasswordHash:
    '27910acab3e1ed72c2cb2e52ae1ed20802c8658bf806c109fcbc529f3158225f',
  modifier: 'fb',
  concatenatedModifier:
    '27910acab3e1ed72c2cb2e52ae1ed20802c8658bf806c109fcbc529f3158225ffb',
  concatenatedHash:
    'd8eb543a358549a9cf3413600a320666df3f84937df99407cefedc8eadb26df5',
  concatenatedHashHalf: 'd8eb543a358549a9',
  finalPasswordHash: 'd8eb 543a 3585 49a9',
};

const testHash = optr(v.masterPassword);

// MD5 Hashes for testing
// Passphrase "lovelace" = ecd70632ba7448615b1e1ed01f724053
// Hash "lovelace" + modifier "facebook" = 2e0f05dd9cfd67605d9828f81526721a
// Half of hash = 2e0f05dd9cfd6760
// With spaces every 4 characters = 2e0f 05dd 9cfd 6760

describe('Password Generator', () => {
  it('Adds passphrase', () => {
    expect(testHash.value).toEqual(v.masterPassword);
  });

  it('Sha3 hash of passphrase', () => {
    expect(testHash.hash().value).toEqual(v.masterPasswordHash);
  });

  it('Concatenate Modifier', () => {
    expect(testHash.concatenate(v.modifier).value).toEqual(
      v.concatenatedModifier
    );
  });

  it('MD5 Hash Passphrase and Modifier', () => {
    expect(testHash.hash().value).toEqual(v.concatenatedHash);
  });

  it('Slice hash in half', () => {
    expect(testHash.getFirst16().value).toEqual(v.concatenatedHashHalf);
  });

  it('Add space every 4 characters', () => {
    expect(testHash.spaceEvery4().value).toEqual(v.finalPasswordHash);
  });

  it('Get value', () => {
    expect(testHash.getValue()).toEqual(v.finalPasswordHash);
  });

  it('Generates Password Function', () => {
    expect(generateOptr(v.masterPassword, v.modifier)).toEqual(
      v.finalPasswordHash
    );
  });
});
