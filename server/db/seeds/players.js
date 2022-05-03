exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('players').del()
  await knex('players').insert([
    {
      id: 1,
      name: 'Cristiano Ronaldo',
      position: 'Attack',
      img: 'Images/Ronaldo.png',
    },
    {
      id: 2,
      name: 'Bukayo Saka',
      position: 'Attack',
      img: 'Images/Saka.png',
    },
    {
      id: 3,
      name: 'Jesus',
      position: 'Attack',
      img: 'Images/Jesus.png',
    },
    {
      id: 4,
      name: 'Mohamed Elneny',
      position: 'Midfield',
      img: 'Images/Mo.png',
    },
    {
      id: 5,
      name: 'Thomas Partey',
      position: 'Midfield',
      img: 'Images/Partey.png',
    },
    {
      id: 6,
      name: 'Martin Odegaard',
      position: 'Midfield',
      img: 'Images/Ode.png',
    },
    {
      id: 7,
      name: 'Gabriel Martinelli',
      position: 'Attack',
      img: 'Images/Martinalli.png',
    },
    {
      id: 8,
      name: 'Kieran Tierney',
      position: 'Defence',
      img: 'Images/Tierney.png',
    },
    {
      id: 9,
      name: 'Gabriel',
      position: 'Defence',
      img: 'Images/Gab.png',
    },
    {
      id: 10,
      name: 'William Saliba',
      position: 'Defence',
      img: 'Images/Saliba.png',
    },
    {
      id: 11,
      name: 'Gianluigi Buffon',
      position: 'Keeper',
      img: 'Images/Buffon.png',
    },
    {
      id: 12,
      name: 'Aaron Ramsdale',
      position: 'Keeper',
      img: 'Images/Ramsdale.png',
    },
    {
      id: 13,
      name: 'David Beckham',
      position: 'Midfield',
      img: 'Images/Becks.png',
    },
    {
      id: 14,
      name: 'Thierry Henry',
      position: 'Attack',
      img: 'Images/Henry.png',
    },
    {
      id: 15,
      name: 'Fernando Torres',
      position: 'Attack',
      img: 'Images/Torres.png',
    },
    {
      id: 16,
      name: 'Takehiro Tomiyasu',
      position: 'Defence',
      img: 'Images/Tom.png',
    },
    {
      id: 17,
      name: 'Patrick Vieira',
      position: 'Midfield',
      img: 'Images/Vieria.png',
    },
    {
      id: 18,
      name: 'Bacary Sagna',
      position: 'Defence',
      img: 'Images/Sagna.png',
    },
  ])
}
