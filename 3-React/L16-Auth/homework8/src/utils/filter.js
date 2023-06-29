export default function filterFunction(contacts, filter) {
  return contacts.filter(contact => {
    const contactName = contact.name.toLowerCase();
    const filterText = filter.toLowerCase();

    return contactName.includes(filterText);
  });
}
