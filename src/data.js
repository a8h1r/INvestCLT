// ─── AGE GROUPS ───────────────────────────────────────────────────────────────
export const AGE_GROUPS = [
  { id: 'middle', label: '🟢 Middle School', grades: 'Grades 6–8', description: 'Financial foundations' },
  { id: 'high',   label: '🔵 High School',   grades: 'Grades 9–12', description: 'Credit, investing & strategy' },
  { id: 'adult',  label: '🔴 Adult',          grades: 'Ages 18+',   description: 'Wealth building & retirement' },
];

// ─── TOPICS BY AGE GROUP ──────────────────────────────────────────────────────
export const TOPICS_BY_GROUP = {
  middle: [
    { id: 'budgeting',  title: 'Budgeting' },
    { id: 'saving',     title: 'Saving' },
    { id: 'investing',  title: 'Investing Basics' },
  ],
  high: [
    { id: 'budgeting',  title: 'Budgeting & Cash Flow' },
    { id: 'credit',     title: 'Credit & Banking' },
    { id: 'investing',  title: 'Stock Market Investing' },
  ],
  adult: [
    { id: 'budgeting',  title: 'Advanced Budgeting' },
    { id: 'credit',     title: 'Credit, Debt & Mortgages' },
    { id: 'investing',  title: 'Wealth Building & Retirement' },
  ],
};

// Legacy export so old components don't break
export const TOPICS = TOPICS_BY_GROUP.middle;

// ─── CURRICULUM ───────────────────────────────────────────────────────────────
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
            interactive: 'calculator'
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
  credit: {
    title: 'Credit & Banking',
    subtopics: [
      {
        id: 'credit-basics',
        title: 'Credit Basics',
        lessons: [
          {
            id: 'what-is-credit',
            title: 'What is credit?',
            content: `Credit is borrowed money that you promise to pay back — usually with interest. Your credit score (300–850) is a number that tells lenders how trustworthy you are with debt. A higher score means better loan rates, lower insurance premiums, and even better job prospects.

The five factors that determine your score: payment history (35%), amounts owed (30%), length of credit history (15%), new credit (10%), and credit mix (10%).`,
            interactive: null
          },
          {
            id: 'credit-cards',
            title: 'Credit cards & debt traps',
            content: `Credit cards are powerful tools — or dangerous traps, depending on how you use them. Paying your full balance every month means you pay zero interest. Carrying a balance can spiral quickly at 20–30% APR.

The golden rule: never charge more than you can pay off at the end of the month.`,
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
          },
          {
            id: 'stocks-vs-etfs',
            title: 'Stocks vs. ETFs vs. Index Funds',
            content: `A stock is a single company share. An ETF (Exchange Traded Fund) bundles dozens or hundreds of stocks into one easy purchase. An index fund tracks a market index like the S&P 500 — the 500 largest US companies.

Most financial experts recommend index funds for beginners because they automatically diversify your risk across hundreds of companies at very low cost.`,
            interactive: null
          },
          {
            id: 'compound-interest',
            title: 'The magic of compound interest',
            content: `Compound interest is earning interest on your interest. If you invest $1,000 at 7% annually, after year 1 you have $1,070. In year 2, you earn 7% on $1,070 — not just the original $1,000. Over 30 years, that $1,000 grows to over $7,600 without adding another dollar.

Time is the most powerful ingredient in compound growth. Starting at 18 vs. 28 can mean hundreds of thousands of dollars difference by retirement.`,
            interactive: null
          }
        ]
      },
      {
        id: 'retirement',
        title: 'Retirement Accounts',
        lessons: [
          {
            id: 'roth-ira',
            title: 'Roth IRA & 401(k)',
            content: `A Roth IRA lets you invest after-tax money that grows completely tax-free. Withdraw it in retirement — zero taxes owed. The 2024 contribution limit is $7,000/year.

A 401(k) is offered through employers. Many employers match contributions (free money!). Always contribute enough to get the full match — it's an instant 50–100% return on your investment.`,
            interactive: null
          }
        ]
      }
    ]
  }
};

// ─── EXERCISES / QUIZZES ──────────────────────────────────────────────────────
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
          options: ['A new video game', 'Candy from the store', 'Groceries for the week', 'Movie tickets'],
          correctIndex: 2,
          explanation: 'Groceries (food) are a need because you must eat to survive. The others are wants.'
        },
        {
          id: 'q3',
          question: 'What should you do first when you get your allowance?',
          options: ['Spend it all right away', 'Put some into savings', 'Buy a gift for a friend', 'Hide it under your bed'],
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
  credit: [
    {
      id: 'credit-basics-quiz',
      title: 'Credit Score Basics',
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

// ─── MOCK STOCKS ──────────────────────────────────────────────────────────────
export const MOCK_STOCKS = [
  { ticker: 'AAPL', name: 'Apple Inc.',             price: 189.30, change: +1.24, changePct: +0.66, sector: 'Technology' },
  { ticker: 'TSLA', name: 'Tesla Inc.',              price: 245.80, change: -3.15, changePct: -1.27, sector: 'Automotive' },
  { ticker: 'MSFT', name: 'Microsoft Corp.',         price: 415.50, change: +2.80, changePct: +0.68, sector: 'Technology' },
  { ticker: 'AMZN', name: 'Amazon.com Inc.',         price: 186.20, change: +0.95, changePct: +0.51, sector: 'E-Commerce' },
  { ticker: 'NVDA', name: 'NVIDIA Corp.',            price: 875.40, change: +12.60, changePct: +1.46, sector: 'Semiconductors' },
  { ticker: 'DIS',  name: 'The Walt Disney Co.',     price: 92.70,  change: -0.45, changePct: -0.48, sector: 'Entertainment' },
  { ticker: 'NKE',  name: 'Nike Inc.',               price: 84.10,  change: +0.30, changePct: +0.36, sector: 'Consumer Goods' },
  { ticker: 'SPY',  name: 'S&P 500 ETF (SPY)',       price: 524.80, change: +3.10, changePct: +0.59, sector: 'Index Fund' },
  { ticker: 'QQQ',  name: 'Nasdaq-100 ETF (QQQ)',    price: 449.60, change: +4.20, changePct: +0.94, sector: 'Index Fund' },
  { ticker: 'BAC',  name: 'Bank of America Corp.',   price: 38.50,  change: -0.20, changePct: -0.52, sector: 'Finance' },
];

// ─── SCHOOL LEADERBOARD ───────────────────────────────────────────────────────
export const SCHOOL_LEADERBOARD = [
  { rank: 1,  school: 'Myers Park High School',        avgReturn: +18.4, students: 47, city: 'Charlotte' },
  { rank: 2,  school: 'West Charlotte High School',    avgReturn: +15.9, students: 38, city: 'Charlotte' },
  { rank: 3,  school: 'Harding University High',       avgReturn: +14.2, students: 52, city: 'Charlotte' },
  { rank: 4,  school: 'Providence High School',        avgReturn: +11.7, students: 29, city: 'Charlotte' },
  { rank: 5,  school: 'Ardrey Kell High School',       avgReturn: +9.3,  students: 63, city: 'Charlotte' },
  { rank: 6,  school: 'South Mecklenburg High',        avgReturn: +7.8,  students: 41, city: 'Charlotte' },
  { rank: 7,  school: 'North Mecklenburg High',        avgReturn: +5.1,  students: 34, city: 'Charlotte' },
  { rank: 8,  school: 'East Mecklenburg High',         avgReturn: +2.4,  students: 28, city: 'Charlotte' },
];

// Current logged-in student mock data
export const CURRENT_STUDENT = {
  name: 'Alex',
  school: 'West Charlotte High School',
  schoolRank: 2,
  classRank: 4,
  classTotal: 38,
  portfolioReturn: +16.7,
  portfolioValue: 11670,
  cashBalance: 3280,
};
