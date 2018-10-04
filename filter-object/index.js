
const filterObject = (object, keys) => {
  const mapKeyToObject = key => {
    return { [key]: object[key] }
  }

  const buildNewObject = (prev, current) => {
    return { ...prev, ...current }
  }

  return keys.map(mapKeyToObject)
    .reduce(buildNewObject, {})
};

const filterObjects = keys => obj => filterObject(obj, keys);

//Testing the fucntions
const keys = ['name', 'documentId']

const sandro = {
  name: 'Sandro',
  age: 28,
  documentId: '555.555.555-55'
}

const rebecca = {
  name: 'Rebecca',
  age: 25,
  documentId: '555.555.555-55'
}

//Filtering an object:
const newUser = filterObject(sandro, keys);
console.log(newUser);

//Filering a list of objects
const users = [ sandro, rebecca ];
const newUsers = users.map(filterObjects(keys));
console.log(newUsers);
