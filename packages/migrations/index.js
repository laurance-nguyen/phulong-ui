// Requiring the module
const reader = require('xlsx');
const axios = require('axios').default;

// Reading our test file
const file = reader.readFile('./files/products.xlsx');

const data = [];

const sheets = file.SheetNames;

for (let i = 0; i < sheets.length; i++) {
  const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
  for (res of temp) {
    data.push(res);
    await axios.post('https://mint-home-cms.fly.dev/api/collections/products/records', res, {
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDU4MjA1OTQsImlkIjoicXhvbnF2ZnA5ZmE2NWpyIiwidHlwZSI6ImFkbWluIn0.pKO8PC7E3ZoThCxzr1eewwC-M7IZiIy8ZT-e99n7eqE',
      },
    });
  }

}

// Printing data
console.log(data);

// axios
//   .post('https://mint-home-cms.fly.dev/api/admins/auth-with-password', {
//     identity: 'nguyenconglong95@gmail.com',
//     password: 'Truesoul1995$',
//   })
//   .then((res) => {
//     console.log(res.data);
//   });
