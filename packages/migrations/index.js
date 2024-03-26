// Requiring the module
const reader = require('xlsx')
const axios = require('axios').default

// Reading our test file
const file = reader.readFile('./files/products.xlsx')

const data = []

const domain = 'https://mint-home-cms.fly.dev'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTI2NzI1NzksImlkIjoicXhvbnF2ZnA5ZmE2NWpyIiwidHlwZSI6ImFkbWluIn0.wSk5FdPo8coSmF0GUX-Vh7akoOwTqnCMaP16ak-TVyQ'

const sheets = file.SheetNames

for (let i = 0; i < sheets.length; i++) {
  const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
  for (res of temp) {
    data.push(res)
    axios.post(`${domain}/api/collections/products/records`, res, {
      headers: {
        Authorization: token,
      },
    })
  }
}

// Printing data
console.log(data)

// axios
//   .post('https://mint-home-cms.fly.dev/api/admins/auth-with-password', {
//     identity: 'nguyenconglong95@gmail.com',
//     password: 'Truesoul1995$',
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
