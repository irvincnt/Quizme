export const baseConfig = {
  columns: {
    c1: 'cardC1',
    c2: 'cardC2',
    c3: 'cardC3'
  },
  styles: {
    s1: 'cardS1',
    s2: 'cardS2',
    s3: 'cardS3'
  },
  types: {
    s1: {
      c1: {
        a: 'cardS1C1a'
      },
      c2: {
        a: 'cardS1C2a',
        b: 'cardS1C2b',
        c: 'cardS1C2c'
      },
      c3: {
        a: 'cardS1C3a',
        b: 'cardS1C3b',
        c: 'cardS1C3c'
      }
    },
    s2: {
      c1: {
        a: 'cardS2C1a'
      },
      c2: {
        a: 'cardS2C2a',
        b: 'cardS2C2b',
        c: 'cardS2C2c'
      },
      c3: {
        a: 'cardS2C3a',
        b: 'cardS2C3b',
        c: 'cardS2C3c'
      }
    },
    s3: {
      c1: {
        a: 'cardS3C1a'
      },
      c2: {
        a: 'cardS3C2a',
        b: 'cardS3C2b',
        c: 'cardS3C2c'
      },
      c3: {
        a: 'cardS3C3a',
        b: 'cardS3C3b',
        c: 'cardS3C3c'
      }
    }
  },
  colors: [
    {
      color: 'blue',
      show: ['cardS2', 'cardS3']
    },
    {
      color: 'red',
      show: ['cardS2', 'cardS3']
    },
    {
      color: 'green',
      show: ['cardS2', 'cardS3']
    },
    {
      color: 'purple',
      show: ['cardS2', 'cardS3']
    },
    {
      color: 'dark',
      show: ['cardS3']
    },
    {
      color: 'orange',
      show: ['cardS2']
    },
    {
      color: 'gray',
      show: ['cardS2', 'cardS3']
    }
  ],
  sizes: {
    a: '1x',
    b: '2x',
    c: '3x'
  }
}
