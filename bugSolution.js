```javascript
const query = {
  name: 'John Doe',
  age: {
    $gte: 30 // Corrected to $gte
  }
};

db.collection('users').find(query).toArray((err, result) => {
  if (err) throw err;
  console.log(result);
});
```