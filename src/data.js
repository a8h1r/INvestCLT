export const TOPICS = [
  { id: 'budgeting', title: 'Budgeting' },
  { id: 'saving', title: 'Saving' },
  { id: 'investing', title: 'Investing Basics' }
];

export const CURRICULUM = {
  budgeting: {
    title: 'Budgeting',
    subtopics: [
      {
        id: 'budgeting-basics',
        title: 'Budgeting Basics',
        lessons: [
          {
            id: 'what-is-a-budget',
            title: 'What is a budget?',
            content: `A budget is simply a plan for your money. It's like a roadmap that tells your dollars where they should go instead of wondering where they went! 

By tracking what you earn (income) and what you spend (expenses), a budget helps you make sure you always have enough money for the things you need, and even the things you want. Without a budget, it's very easy to accidentally spend all your money on snacks and video games, leaving nothing left over for a bigger goal like a new bike or a phone.`,
            interactive: 'calculator' // 'calculator' triggers the interactive element
          },
          {
            id: 'needs-vs-wants',
            title: 'Needs vs. wants',
            content: `Needs are things you must have to survive, like food, shelter, and basic clothing. Wants are things you'd like to have but can live without, like the latest sneakers, candy, or video games. 

When you build a budget, you always pay for your needs first. If you have money left over, you can use it for your wants or save it for later.`,
            interactive: null
          },
          {
            id: 'first-budget',
            title: 'Building your first budget',
            content: `To build your first budget, grab a piece of paper or open a note on your phone. Write down all the money you expect to get this month (allowance, gifts, chores). 

Next, write down what you want to save, and what you plan to spend money on. Try to make sure your total spending and saving matches your total income exactly!`,
            interactive: null
          }
        ]
      }
    ]
  },
  saving: {
    title: 'Saving',
    subtopics: [
      {
        id: 'saving-basics',
        title: 'Saving Basics',
        lessons: [
          {
            id: 'why-save',
            title: 'Why do we save?',
            content: `Saving means keeping some of your money instead of spending it right away. We save for three main reasons: for emergencies (like if your bike breaks), for big purchases (like a new gaming console), and for the future.

When you save money in a bank account, it actually earns a little bit of extra money over time called "interest". This means your money works for you!`,
            interactive: null
          },
          {
            id: 'savings-goals',
            title: 'Setting goals',
            content: `Setting a savings goal helps you stay motivated. If you know exactly what you are saving for, it's easier to say no to small impulses like buying candy every day.`,
            interactive: null
          }
        ]
      }
    ]
  },
  investing: {
    title: 'Investing Basics',
    subtopics: [
      {
        id: 'investing-101',
        title: 'Investing 101',
        lessons: [
          {
            id: 'what-is-investing',
            title: 'What is investing?',
            content: `Investing is when you buy something, hoping it will grow in value or pay you money in the future. For example, buying a piece (a share) of a company you believe in!

Unlike saving, investing has risks. Your money can go up and down. But over a long time, investing usually helps your money grow much faster than keeping it in a piggy bank.`,
            interactive: null
          }
        ]
      }
    ]
  }
};

export const EXERCISES = {
  budgeting: [
    {
      id: 'budgeting-basics-quiz',
      title: 'Budgeting Basics',
      questionCount: 5,
      isAvailable: true,
      questions: [
        {
          id: 'q1',
          question: 'What is the best definition of a budget?',
          options: [
            'A list of things you want to buy',
            'A plan for how you will spend and save your money',
            'A bank account that earns interest',
            'Money you get from doing chores'
          ],
          correctIndex: 1,
          explanation: 'A budget is a plan that helps you track your income and expenses so you know exactly where your money is going.'
        },
        {
          id: 'q2',
          question: 'Which of the following is a "Need"?',
          options: [
            'A new video game',
            'Candy from the store',
            'Groceries for the week',
            'Movie tickets'
          ],
          correctIndex: 2,
          explanation: 'Groceries (food) are a need because you must eat to survive. The others are wants.'
        },
        {
          id: 'q3',
          question: 'What should you do first when you get your allowance?',
          options: [
            'Spend it all right away',
            'Put some into savings',
            'Buy a gift for a friend',
            'Hide it under your bed'
          ],
          correctIndex: 1,
          explanation: 'It is a great habit to "pay yourself first" by putting some money into savings before you spend any of it.'
        },
        {
          id: 'q4',
          question: 'Why is tracking your expenses important?',
          options: [
            'So you can see if you are spending money on things you do not need',
            'So the bank knows what you are doing',
            'Because it makes you earn more money',
            'It is not important'
          ],
          correctIndex: 0,
          explanation: 'Tracking expenses helps you find "money leaks" where you might be spending carelessly on wants.'
        },
        {
          id: 'q5',
          question: 'If your expenses are greater than your income, what happens?',
          options: [
            'You save a lot of money',
            'You will run out of money and might go into debt',
            'Your income automatically goes up',
            'Nothing happens'
          ],
          correctIndex: 1,
          explanation: 'If you spend more than you earn, you will eventually run out of money and might have to borrow from someone else.'
        }
      ]
    },
    {
      id: 'needs-vs-wants-quiz',
      title: 'Identifying Needs & Wants',
      questionCount: 5,
      isAvailable: false,
      questions: []
    }
  ],
  saving: [
    {
      id: 'saving-goals-quiz',
      title: 'Setting Goals',
      questionCount: 5,
      isAvailable: false,
      questions: []
    }
  ],
  investing: [
    {
      id: 'investing-basics-quiz',
      title: 'Investing Basics',
      questionCount: 5,
      isAvailable: false,
      questions: []
    }
  ]
};
