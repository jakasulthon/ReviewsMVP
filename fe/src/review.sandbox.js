
function listAllReviews () {
  const REVIEW_DATA = [
    {
      id: 1,
      product: "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",
      author: "Mark Manson",
      rating : 4.4,
      reviews : [
        {
            review_id : 1,
            rating : 4,
            description: "[a] good yardstick by which self-improvement books should be measured."
        },
        {
            review_id : 2,
            rating : 5,
            description : "If you follow my reviews/blog at all, you probably already know that I am already a zero fucks given kind of gal when it comes to, well, bullshit."
        },
        {
            review_id : 3,
            rating : 3,
            description : "I sometimes diverge from my comfort zone (fiction mainly mystery, thriller, classics etc.) to explore other genres. This read was the outcome of such an expedition."
        },
      ]
    },
    {
      id: 2,
      product: "To Kill a Mockingbird",
      author: "Harper Lee",
      rating : 4.27,
      reviews : [
        {
            review_id : 1,
            rating : 4,
            description: "[a] good yardstick by which self-improvement books should be measured."
        },
        {
            review_id : 2,
            rating : 5,
            description : "If you follow my reviews/blog at all, you probably already know that I am already a zero fucks given kind of gal when it comes to, well, bullshit."
        },
        {
            review_id : 3,
            rating : 3,
            description : "I sometimes diverge from my comfort zone (fiction mainly mystery, thriller, classics etc.) to explore other genres. This read was the outcome of such an expedition."
        },
      ]
    },
    {
      id: 3,
      product: "Some We Love, Some We Hate, Some We Eat: Why It's So Hard to Think Straight About Animals",
      author: "Hal Herzog",
      rating : 4.4,
      reviews : [
        {
            review_id : 1,
            rating : 4,
            description: "[a] good yardstick by which self-improvement books should be measured."
        },
        {
            review_id : 2,
            rating : 5,
            description : "If you follow my reviews/blog at all, you probably already know that I am already a zero fucks given kind of gal when it comes to, well, bullshit."
        },
        {
            review_id : 3,
            rating : 3,
            description : "I sometimes diverge from my comfort zone (fiction mainly mystery, thriller, classics etc.) to explore other genres. This read was the outcome of such an expedition."
        },
      ]
    },
    {
      id: 4,
      product: "Eating Animals",
      author: "Jonathan Safran Foer",
      rating : 4,
      reviews : [
        {
            review_id : 1,
            rating : 4,
            description: "[a] good yardstick by which self-improvement books should be measured."
        },
        {
            review_id : 2,
            rating : 5,
            description : "If you follow my reviews/blog at all, you probably already know that I am already a zero fucks given kind of gal when it comes to, well, bullshit."
        },
        {
            review_id : 3,
            rating : 3,
            description : "I sometimes diverge from my comfort zone (fiction mainly mystery, thriller, classics etc.) to explore other genres. This read was the outcome of such an expedition."
        },
      ]
    },
    {
      id: 5,
      product: "Eating Animals",
      author: "Jonathan Safran Foer",
      rating : 4.4,
      reviews : [
        {
            review_id : 1,
            rating : 4,
            description: "[a] good yardstick by which self-improvement books should be measured."
        },
        {
            review_id : 2,
            rating : 5,
            description : "If you follow my reviews/blog at all, you probably already know that I am already a zero fucks given kind of gal when it comes to, well, bullshit."
        },
        {
            review_id : 3,
            rating : 3,
            description : "I sometimes diverge from my comfort zone (fiction mainly mystery, thriller, classics etc.) to explore other genres. This read was the outcome of such an expedition."
        },
      ]
    }
  ]
  return REVIEW_DATA;
}

function listReview (id) {
  const REVIEW_DATA = [
    {
      id: 1,
      product: "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",
      author: "Mark Manson",
      rating : 4.4,
      reviews : [
        {
            review_id : 1,
            rating : 4,
            description: "[a] good yardstick by which self-improvement books should be measured."
        },
        {
            review_id : 2,
            rating : 5,
            description : "If you follow my reviews/blog at all, you probably already know that I am already a zero fucks given kind of gal when it comes to, well, bullshit."
        },
        {
            review_id : 3,
            rating : 3,
            description : "I sometimes diverge from my comfort zone (fiction mainly mystery, thriller, classics etc.) to explore other genres. This read was the outcome of such an expedition."
        },
      ]
    },
    {
      id: 2,
      product: "To Kill a Mockingbird",
      author: "Harper Lee",
      rating : 4.27,
      reviews : [
        {
            review_id : 1,
            rating : 4,
            description: "[a] good yardstick by which self-improvement books should be measured."
        },
        {
            review_id : 2,
            rating : 5,
            description : "If you follow my reviews/blog at all, you probably already know that I am already a zero fucks given kind of gal when it comes to, well, bullshit."
        },
        {
            review_id : 3,
            rating : 3,
            description : "I sometimes diverge from my comfort zone (fiction mainly mystery, thriller, classics etc.) to explore other genres. This read was the outcome of such an expedition."
        },
      ]
    },
    {
      id: 3,
      product: "Some We Love, Some We Hate, Some We Eat: Why It's So Hard to Think Straight About Animals",
      author: "Hal Herzog",
      rating : 4.4,
      reviews : [
        {
            review_id : 1,
            rating : 4,
            description: "[a] good yardstick by which self-improvement books should be measured."
        },
        {
            review_id : 2,
            rating : 5,
            description : "If you follow my reviews/blog at all, you probably already know that I am already a zero fucks given kind of gal when it comes to, well, bullshit."
        },
        {
            review_id : 3,
            rating : 3,
            description : "I sometimes diverge from my comfort zone (fiction mainly mystery, thriller, classics etc.) to explore other genres. This read was the outcome of such an expedition."
        },
      ]
    },
    {
      id: 4,
      product: "Eating Animals",
      author: "Jonathan Safran Foer",
      rating : 4,
      reviews : [
        {
            review_id : 1,
            rating : 4,
            description: "[a] good yardstick by which self-improvement books should be measured."
        },
        {
            review_id : 2,
            rating : 5,
            description : "If you follow my reviews/blog at all, you probably already know that I am already a zero fucks given kind of gal when it comes to, well, bullshit."
        },
        {
            review_id : 3,
            rating : 3,
            description : "I sometimes diverge from my comfort zone (fiction mainly mystery, thriller, classics etc.) to explore other genres. This read was the outcome of such an expedition."
        },
      ]
    },
    {
      id: 5,
      product: "Eating Animals",
      author: "Jonathan Safran Foer",
      rating : 4.4,
      reviews : [
        {
            review_id : 1,
            rating : 4,
            description: "[a] good yardstick by which self-improvement books should be measured."
        },
        {
            review_id : 2,
            rating : 5,
            description : "If you follow my reviews/blog at all, you probably already know that I am already a zero fucks given kind of gal when it comes to, well, bullshit."
        },
        {
            review_id : 3,
            rating : 3,
            description : "I sometimes diverge from my comfort zone (fiction mainly mystery, thriller, classics etc.) to explore other genres. This read was the outcome of such an expedition."
        },
      ]
    }
  ]
  return REVIEW_DATA[id];
}

function saveReview(review, id) {
  const REVIEW_DATA = [
      {
        id: 1,
        product: "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",
        author: "Mark Manson",
        rating : 4.4,
        reviews : [
          {
              review_id : 1,
              rating : 4,
              description: "[a] good yardstick by which self-improvement books should be measured."
          },
          {
              review_id : 2,
              rating : 5,
              description : "If you follow my reviews/blog at all, you probably already know that I am already a zero fucks given kind of gal when it comes to, well, bullshit."
          },
          {
              review_id : 3,
              rating : 3,
              description : "I sometimes diverge from my comfort zone (fiction mainly mystery, thriller, classics etc.) to explore other genres. This read was the outcome of such an expedition."
          },
        ]
      },
      {
        id: 2,
        product: "To Kill a Mockingbird",
        author: "Harper Lee",
        rating : 4.27,
        reviews : [
          {
              review_id : 1,
              rating : 4,
              description: "[a] good yardstick by which self-improvement books should be measured."
          },
          {
              review_id : 2,
              rating : 5,
              description : "If you follow my reviews/blog at all, you probably already know that I am already a zero fucks given kind of gal when it comes to, well, bullshit."
          },
          {
              review_id : 3,
              rating : 3,
              description : "I sometimes diverge from my comfort zone (fiction mainly mystery, thriller, classics etc.) to explore other genres. This read was the outcome of such an expedition."
          },
        ]
      },
      {
        id: 3,
        product: "Some We Love, Some We Hate, Some We Eat: Why It's So Hard to Think Straight About Animals",
        author: "Hal Herzog",
        rating : 4.4,
        reviews : [
          {
              review_id : 1,
              rating : 4,
              description: "[a] good yardstick by which self-improvement books should be measured."
          },
          {
              review_id : 2,
              rating : 5,
              description : "If you follow my reviews/blog at all, you probably already know that I am already a zero fucks given kind of gal when it comes to, well, bullshit."
          },
          {
              review_id : 3,
              rating : 3,
              description : "I sometimes diverge from my comfort zone (fiction mainly mystery, thriller, classics etc.) to explore other genres. This read was the outcome of such an expedition."
          },
        ]
      },
      {
        id: 4,
        product: "Eating Animals",
        author: "Jonathan Safran Foer",
        rating : 4,
        reviews : [
          {
              review_id : 1,
              rating : 4,
              description: "[a] good yardstick by which self-improvement books should be measured."
          },
          {
              review_id : 2,
              rating : 5,
              description : "If you follow my reviews/blog at all, you probably already know that I am already a zero fucks given kind of gal when it comes to, well, bullshit."
          },
          {
              review_id : 3,
              rating : 3,
              description : "I sometimes diverge from my comfort zone (fiction mainly mystery, thriller, classics etc.) to explore other genres. This read was the outcome of such an expedition."
          },
        ]
      },
      {
        id: 5,
        product: "Eating Animals",
        author: "Jonathan Safran Foer",
        rating : 4.4,
        reviews : [
          {
              review_id : 1,
              rating : 4,
              description: "[a] good yardstick by which self-improvement books should be measured."
          },
          {
              review_id : 2,
              rating : 5,
              description : "If you follow my reviews/blog at all, you probably already know that I am already a zero fucks given kind of gal when it comes to, well, bullshit."
          },
          {
              review_id : 3,
              rating : 3,
              description : "I sometimes diverge from my comfort zone (fiction mainly mystery, thriller, classics etc.) to explore other genres. This read was the outcome of such an expedition."
          },
        ]
      }
    ]
  console.log(REVIEW_DATA);
  REVIEW_DATA[id].reviews.push(review);
  console.log(REVIEW_DATA[id].reviews)
  return REVIEW_DATA;
}

function deleteReview(review, id) {
  const REVIEW_DATA = [
      {
        id: 1,
        product: "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",
        author: "Mark Manson",
        rating : 4.4,
        reviews : [
          {
              review_id : 1,
              rating : 4,
              description: "[a] good yardstick by which self-improvement books should be measured."
          },
          {
              review_id : 2,
              rating : 5,
              description : "If you follow my reviews/blog at all, you probably already know that I am already a zero fucks given kind of gal when it comes to, well, bullshit."
          },
          {
              review_id : 3,
              rating : 3,
              description : "I sometimes diverge from my comfort zone (fiction mainly mystery, thriller, classics etc.) to explore other genres. This read was the outcome of such an expedition."
          },
        ]
      },
      {
        id: 2,
        product: "To Kill a Mockingbird",
        author: "Harper Lee",
        rating : 4.27,
        reviews : [
          {
              review_id : 1,
              rating : 4,
              description: "[a] good yardstick by which self-improvement books should be measured."
          },
          {
              review_id : 2,
              rating : 5,
              description : "If you follow my reviews/blog at all, you probably already know that I am already a zero fucks given kind of gal when it comes to, well, bullshit."
          },
          {
              review_id : 3,
              rating : 3,
              description : "I sometimes diverge from my comfort zone (fiction mainly mystery, thriller, classics etc.) to explore other genres. This read was the outcome of such an expedition."
          },
        ]
      },
      {
        id: 3,
        product: "Some We Love, Some We Hate, Some We Eat: Why It's So Hard to Think Straight About Animals",
        author: "Hal Herzog",
        rating : 4.4,
        reviews : [
          {
              review_id : 1,
              rating : 4,
              description: "[a] good yardstick by which self-improvement books should be measured."
          },
          {
              review_id : 2,
              rating : 5,
              description : "If you follow my reviews/blog at all, you probably already know that I am already a zero fucks given kind of gal when it comes to, well, bullshit."
          },
          {
              review_id : 3,
              rating : 3,
              description : "I sometimes diverge from my comfort zone (fiction mainly mystery, thriller, classics etc.) to explore other genres. This read was the outcome of such an expedition."
          },
        ]
      },
      {
        id: 4,
        product: "Eating Animals",
        author: "Jonathan Safran Foer",
        rating : 4,
        reviews : [
          {
              review_id : 1,
              rating : 4,
              description: "[a] good yardstick by which self-improvement books should be measured."
          },
          {
              review_id : 2,
              rating : 5,
              description : "If you follow my reviews/blog at all, you probably already know that I am already a zero fucks given kind of gal when it comes to, well, bullshit."
          },
          {
              review_id : 3,
              rating : 3,
              description : "I sometimes diverge from my comfort zone (fiction mainly mystery, thriller, classics etc.) to explore other genres. This read was the outcome of such an expedition."
          },
        ]
      },
      {
        id: 5,
        product: "Eating Animals",
        author: "Jonathan Safran Foer",
        rating : 4.4,
        reviews : [
          {
              review_id : 1,
              rating : 4,
              description: "[a] good yardstick by which self-improvement books should be measured."
          },
          {
              review_id : 2,
              rating : 5,
              description : "If you follow my reviews/blog at all, you probably already know that I am already a zero fucks given kind of gal when it comes to, well, bullshit."
          },
          {
              review_id : 3,
              rating : 3,
              description : "I sometimes diverge from my comfort zone (fiction mainly mystery, thriller, classics etc.) to explore other genres. This read was the outcome of such an expedition."
          },
        ]
      }
    ]
  console.log(REVIEW_DATA);
  REVIEW_DATA[id].reviews.delete(review);
  console.log(REVIEW_DATA[id].reviews)
  return REVIEW_DATA;
}
