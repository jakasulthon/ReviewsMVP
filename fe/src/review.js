async function listAllReviews (product_id) {
    const request_json = {
      id : product_id,
    }

    return await fetch('http:localhost:3000/products/'+ product_id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request_json),
    });
}

async function listReview () {
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
