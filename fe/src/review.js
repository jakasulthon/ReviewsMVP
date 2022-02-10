async function listAllReviews (product) {
    return await fetch('http:localhost:3000/product/'+ product);
}

async function listReview (product_id) {
    return await fetch('http:localhost:3000/testproducts');
}

async function saveReview (review) {
    return await fetch('http:localhost:3000/testreviews', {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    console.log(JSON.stringify(review));
}

async function listReviews (review) {
    return await fetch('https://jsonplaceholder.typicode.com/todos/' + review);
}

async function deleteReview (review) {
    return await fetch('https://jsonplaceholder.typicode.com/todos/' + review);
}
