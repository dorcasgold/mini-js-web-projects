const testimonials = [
  {
    author: {
      name: 'leroy brooks',
      image: 'author-01.jpg'
    },
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos voluptatum harum debitis, libero ad laudantium eum odit, ipsum deleniti odio praesentium? Dolore incidunt, accusamus dicta temporibus ex inventore delectus.',
    date: '18 Feb'
  },
  {
    author: {
      name: 'leo smart',
      image: 'author-02.jpg'
    },
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos voluptatum harum debitis, libero ad laudantium eum odit, ipsum deleniti odio praesentium? Dolore incidunt, accusamus dicta temporibus ex inventore delectus.',
    date: '15 jan'
  },
  {
    author: {
      name: 'amy jane',
      image: 'author-03.jpg'
    },
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos voluptatum harum debitis, libero ad laudantium eum odit, ipsum deleniti odio praesentium? Dolore incidunt, accusamus dicta temporibus ex inventore delectus.',
    date: '11 Feb'
  },
  {
    author: {
      name: 'amy doe',
      image: 'author-04.jpg'
    },
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos voluptatum harum debitis, libero ad laudantium eum odit, ipsum deleniti odio praesentium? Dolore incidunt, accusamus dicta temporibus ex inventore delectus.',
    date: '20 Feb'
  },
];

const containerEl = document.getElementById('testimonials-container')

const makeTestimonialCard = testimonial => {
  return `
    <div class="testimonial-card">
    <img src="${testimonial.author.image}">
    <h2>${testimonial.author.name}</h2>
    <p>${testimonial.text}</p>
    <date>Written on ${testimonial.date}</date>
    </div>
  `
}

let currentTestimonial = 0;

const nextTestimonial = () => {
  if (currentTestimonial < testimonials.length - 1) {
    currentTestimonial += 1;
    updatePage()
  }
}

const prevTestimonial = () => {
  if (currentTestimonial > 0) {
    currentTestimonial -= 1;
    updatePage()
  }
}

const updatePage = () => {
  let markup = makeTestimonialCard(testimonials[currentTestimonial]);

  if (testimonials.length > 1) {
    markup += `
    <nav>
      <button onclick="prevTestimonial()">Previous</button>
      <button onclick="nextTestimonial()">Next</button>
    </nav>
    `
  }
  containerEl.innerHTML = markup
}

updatePage()