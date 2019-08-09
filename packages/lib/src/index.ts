import sha3 from 'js-sha3';

class PasswordGenerator {
  value: string = '';
  constructor(passphrase: string) {
    this.value = passphrase;
  }
  hash() {
    this.value = sha3.sha3_256(this.value);
    return this;
  }
  concatenate(modifier: string) {
    // Hash passphrase and salt hash with modifier
    this.value = this.value.concat(modifier);
    return this;
  }
  getFirst16() {
    // Gets only the first half of the hash
    this.value = this.value.slice(0, 16);
    return this;
  }

  spaceEvery4() {
    // Add space every 4 characters
    this.value = this.value.replace(/(.{4})/g, '$1 ').slice(0, -1);
    return this;
  }

  getValue() {
    return this.value;
  }
}

export function optr(value: string) {
  return new PasswordGenerator(value);
}

export function generateOptr(phrase: string, modifier: string) {
  let masterPassword = optr(phrase);
  return masterPassword
    .hash()
    .concatenate(modifier)
    .hash()
    .getFirst16()
    .spaceEvery4()
    .getValue();
}
