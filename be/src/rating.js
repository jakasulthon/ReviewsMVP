// const http = require('http');
//
// const Rating = {
//
//   updateOnProducts : (productId) => {
//
//     // return productId;
//
//     const request_json = {
//       id: productId,
//     };
//
//     // console.log(request_json);
//
//     // return await fetch('http://localhost:3000/updatereviewonproducts/' + productId, {
//     //
//     //   method: 'POST',
//     //   mode: 'cors',
//     //   headers: {
//     //     'Content-Type' : 'application/json',
//     //   },
//     //   body: JSON.stringify(request_json),
//     //
//     // });
//
//     const data = JSON.stringify({
//       todo: 'Buy the milk'
//     })
//
//     const options = {
//       hostname: 'localhost',
//       port: 3000,
//       method: 'POST',
//       path: '/updatereviewonproducts/' + productId,
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(request_json),
//     }
//
//     console.log(JSON.stringify(options.body));
//
//
//     const req = http.request(options, res => {
//       // console.log(`statusCode: ${res.statusCode}`);
//
//
//       res.on('data', d => {
//         process.stdout.write(d);
//       });
//     });
//
//     // console.log(req);
//
//     return req;
//     //
//     // req.on('error', error => {
//     //   console.error(error)
//     // })
//     //
//     // req.write(data);
//     // req.end();
//     //
//     // return req;
//     //
//     // console.log(JSON.stringify(request_json));
//   }
//
// };
//
// module.exports = Rating;
