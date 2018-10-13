class Repo {
  constructor () {
    this.people = [
      {
        id: 1,
        name: 'guti',
        phone: '098333666',
        addresses: [
          {
            street: 'Paraguay',
            number: 324
          },
          {
            street: '26 de Marzo',
            number: 113
          }
        ]
      },
      {
        id: 2,
        name: 'andrea',
        phone: '099555333',
        addresses: [
          {
            street: 'Paraguay',
            number: 324
          },
          {
            street: '26 de Marzo',
            number: 113
          }
        ]
      }
    ]
  }

  getPeople () {
    return this.people
  };
}

module.exports = Repo
