function printContactsInfo(userData) {
  const { names, phones } = userData;
  const nameList = names.split(',');
  const phoneList = phones.split(',');
  console.log(nameList.length);
  console.log(phoneList.length);
  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
}

// It was
// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// printContactsInfo(names, phones);

// Is expected
const userData = {
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
};
printContactsInfo(userData);
