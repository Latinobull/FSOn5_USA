const phonebook = {
  contacts: [],
  read: function () {
    return this.contacts;
  },
  add(contact) {
    const newContact = {
      list: 'default',
      ...contact,
      id: this.generateId(),
      createdAt: this.getDate(),
    };
    this.contacts.push(newContact);
    return 'Added the new contact';
  },
  delete: function (name) {
    this.contacts = this.contacts.filter(item => item.name != name);
    return `${name} was deleted`;
  },
  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    return Date.now();
  },
};
console.log(
  phonebook.add({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  })
);
console.log(
  phonebook.add({
    name: 'Poly',
    email: 'poly@hotmail.com',
  })
);
console.log(phonebook.read());
console.log(phonebook.delete('Mango'));
console.log(phonebook.read());
