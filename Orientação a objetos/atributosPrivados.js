class User {
  #nome;
  #email;

  constructor(nome, email) {
    this.#nome = nome;
    this.#email = email;
  }

  get nome() {
    return this.#nome;
  }

  get email() {
    return this.#email;
  }
}
