const dataArray = [
  {
    title: 'what is react',
    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum incidunt vitae suscipit a! Aperiam inventore laborum quae veritatis obcaecati earum assumenda esse hic, quo delectus maiores fugit repellat ea odit.'
  },
  {
    title: 'how to learn react',
    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum incidunt vitae suscipit a! Aperiam inventore laborum quae veritatis obcaecati earum assumenda esse hic, quo delectus maiores fugit repellat ea odit.'
  },
  {
    title: 'why is react cool',
    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum incidunt vitae suscipit a! Aperiam inventore laborum quae veritatis obcaecati earum assumenda esse hic, quo delectus maiores fugit repellat ea odit.'
  },
];

const makeHtml = data => {
  return `<details>
  <summary>${data.title}</summary>
  <p>${data.detail}</p>
  </details>
  `
}


const containerEl = document.getElementById('faq-containers')
containerEl.innerHTML = dataArray.map(dataItem => makeHtml(dataItem)).join('')