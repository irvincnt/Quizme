export const baseConfig = {
  colors: [
    {
      color: 'blue',
      show: ['cardS2', 'cardS3']
    },
    {
      color: 'red',
      show: ['cardS1', 'cardS2', 'cardS3']
    },
    {
      color: 'green',
      show: ['cardS1', 'cardS2', 'cardS3']
    },
    {
      color: 'purple',
      show: ['cardS3']
    },
    {
      color: 'dark',
      show: ['cardS1', 'cardS3']
    },
    {
      color: 'orange',
      show: ['cardS1', 'cardS2']
    },
    {
      color: 'gray',
      show: ['cardS1', 'cardS2', 'cardS3']
    }
  ],
  sizes: {
    a: '1x',
    b: '2x',
    c: '3x'
  },
  configInitial: {
    cardC1: {
      cardS1: 'cardS1C1a',
      cardS2: 'cardS2C1a',
      cardS3: 'cardS3C1a'
    },
    cardC2: {
      cardS1: 'cardS1C2c',
      cardS2: 'cardS2C2c',
      cardS3: 'cardS3C2c'
    },
    cardC3: {
      cardS1: 'cardS1C3b',
      cardS2: 'cardS2C3b',
      cardS3: 'cardS3C3b'
    }

  }
}

export const sectionsType = [
  { value: 'software', label: 'Software', key: 'section' },
  { value: 'programation', label: 'Programación', key: 'section' },
  { value: 'english', label: 'Inglés', key: 'section' },
  { value: 'biblie', label: 'Biblia', key: 'section' }
]
