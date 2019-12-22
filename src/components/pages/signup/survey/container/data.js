const data = [
  {
    id: 1,
    type: 'select',
    question: 'Atualmente você está trabalhano em um salão ou aplicativo?',
    value: [
      {
        text: 'Sem experiência',
        value: 'no-exp'
      },
      {
        text: '1 ano',
        value: '1',
        select: true
      },
      {
        text: '2 anos',
        value: '2'
      },
      {
        text: '3 anos',
        value: '3'
      },
      {
        text: '4 anos',
        value: '4'
      },
      {
        text: '5 anos ou mais',
        value: '5'
      }
    ]
  },
  {
    id: 2,
    type: 'check',
    question: 'Atualmente você está trabalhano em um salão ou aplicativo?',
    value: false
  },
  {
    id: 3,
    type: 'text',
    question: 'O que você utiliza para esterilizar os seus equipamentos?',
    value: ''
  },
  {
    id: 4,
    type: 'check',
    question: 'Já possui experiência no atendimento a domicílio?',
    value: false
  },
  {
    id: 5,
    type: 'list',
    question: 'Quanto tempo de experiência você tem?',
    value: [
      {
        text: 'Sem experiência',
        value: 'no-exp'
      },
      {
        text: '1 ano',
        value: '1'
      },
      {
        text: '2 anos',
        value: '2'
      },
      {
        text: '3 anos',
        value: '3'
      },
      {
        text: '4 anos',
        value: '4'
      },
      {
        text: '5 anos ou mais',
        value: '5'
      }
    ]
  }
];

export default data;
