```javascript
const query = {
  name: 'John Doe',
  age: {
    $gt: 30 // This is causing the error, should be $gte
  }
};

db.collection('users').find(query).toArray((err, result) => {
  if (err) throw err;
  console.log(result);
});
```