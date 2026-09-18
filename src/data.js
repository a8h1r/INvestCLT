// ─── AGE GROUPS (5 DISTINCT TIERS) ───────────────────────────────────────────
export const AGE_GROUPS = [
  { id: 'k2',     label: '🟡 Level 1: Early Elem',    grades: 'Grades K–2',  description: 'Coins, piggy banks & learning to guard your money (No Investing)' },
  { id: 'elem35', label: '🟢 Level 2: Upper Elem',    grades: 'Grades 3–5',  description: 'Allowance, needs vs wants & savings goals (No Investing)' },
  { id: 'middle', label: '🔵 Level 3: Middle School', grades: 'Grades 6–8',  description: 'Budgeting, defense strategies & stock market intro (Gamified Investing)' },
  { id: 'high',   label: '🟣 Level 4: High School',   grades: 'Grades 9–12', description: 'Credit, student loans, income & wealth building (Gamified Investing)' },
  { id: 'adult',  label: '🔴 Level 5: Adult',         grades: 'Ages 18+',    description: '401(k), IRAs, mortgages & tax-efficient wealth strategy (Utility Investing)' },
];

// ─── TOPICS BY AGE GROUP ──────────────────────────────────────────────────────
export const TOPICS_BY_GROUP = {
  k2: [
    { id: 'k2-preseason', title: '🏀 Preseason: What is Money?' },
    { id: 'k2-q1',        title: '1st Quarter: Needs vs. Wants' },
    { id: 'k2-q2',        title: '2nd Quarter: Guard Your Money' },
    { id: 'k2-q3',        title: '3rd Quarter: Smart Choices' },
    { id: 'k2-q4',        title: '4th Quarter: Set a Goal!' },
  ],
  elem35: [
    { id: 'e35-preseason', title: '🏀 Preseason: The Money Game' },
    { id: 'e35-q1',        title: '1st Quarter: Earning & Allowance' },
    { id: 'e35-q2',        title: '2nd Quarter: Savings Defense' },
    { id: 'e35-q3',        title: '3rd Quarter: Spend vs. Save' },
    { id: 'e35-q4',        title: '4th Quarter: Big Goal, Big Win' },
  ],
  middle: [
    { id: 'mid-preseason', title: '🏀 Preseason: Your Brand & Your Why' },
    { id: 'mid-q1',        title: '1st Quarter: Budget Like a Starter' },
    { id: 'mid-q2',        title: '2nd Quarter: Defense Wins Championships' },
    { id: 'mid-q3',        title: '3rd Quarter: Assets on the Offense' },
    { id: 'mid-q4',        title: '4th Quarter: Credit Intro & Borrowing' },
  ],
  high: [
    { id: 'hi-preseason', title: '🏀 Preseason: Discipline & the Why' },
    { id: 'hi-q1',        title: '1st Quarter: Every Possession Counts' },
    { id: 'hi-q2',        title: '2nd Quarter: Offense vs. Defense' },
    { id: 'hi-q3',        title: '3rd Quarter: From Deficit to Assets' },
    { id: 'hi-q4',        title: '4th Quarter: The Last Shot — Credit & Loans' },
  ],
  adult: [
    { id: 'ad-foundations', title: 'Financial Foundations' },
    { id: 'ad-defense',     title: 'Financial Defense: Protect What You Have' },
    { id: 'ad-assets',      title: 'Asset Building: Offense Wins Wealth' },
    { id: 'ad-debt',        title: 'Debt Management & Credit Mastery' },
    { id: 'ad-retirement',  title: 'Retirement & Tax-Efficient Investing' },
  ],
};

// Legacy export so old components don't break
export const TOPICS = TOPICS_BY_GROUP.high;

// ─── CURRICULUM ───────────────────────────────────────────────────────────────
export const CURRICULUM = {

  // ── LEVEL 1 (K-2) ────────────────────────────────────────────────────────────
  'k2-preseason': {
    title: 'Preseason: What is Money?',
    subtopics: [{
      id: 'k2-pre-sub', title: 'Getting Ready to Play',
      lessons: [
        { id: 'k2-what-is-money', title: 'What is money?', content: `Money is what we use to get the things we need and want. Coins and dollar bills are types of money. Before money was invented, people traded things — like giving a chicken for a bag of apples!\n\nJust like a basketball player needs to understand the rules of the game before playing, you need to understand money before using it wisely.` },
        { id: 'k2-coins', title: 'Coins & what they are worth', content: `A penny = 1 cent. A nickel = 5 cents. A dime = 10 cents. A quarter = 25 cents. Even though a dime is smaller than a nickel, it is worth MORE — just like a small point guard can be worth more than a big player who doesn't try hard!` },
      ]
    }]
  },
  'k2-q1': {
    title: '1st Quarter: Needs vs. Wants',
    subtopics: [{
      id: 'k2-q1-sub', title: 'Taking the Right Shots',
      lessons: [
        { id: 'k2-needs', title: 'What are needs?', content: `Needs are things you MUST have to live — like food, clothes, and a place to sleep. A basketball team NEEDS a ball to play. Without it, the game can't happen.\n\nSome examples of needs: Breakfast before school, shoes that fit your feet, a warm coat in winter.` },
        { id: 'k2-wants', title: 'What are wants?', content: `Wants are things that would be nice to have, but you can live without them. Like wanting the newest toy, candy, or a special pair of sneakers.\n\nA basketball player might WANT the most expensive shoes, but they can still play great in regular ones. Good players focus on practice, not stuff.` },
      ]
    }]
  },
  'k2-q2': {
    title: '2nd Quarter: Guard Your Money',
    subtopics: [{
      id: 'k2-q2-sub', title: 'Playing Defense',
      lessons: [
        { id: 'k2-save', title: 'Why do we save money?', content: `In basketball, a great defense stops the other team from scoring. Saving money is your financial defense — it stops your money from disappearing!\n\nWhen you save some of your money instead of spending it all, you are "guarding the ball." Your piggy bank or a savings jar is your defense.` },
        { id: 'k2-piggybank', title: 'How a piggy bank works', content: `Every time you get money — from a birthday gift, doing chores, or finding a coin — put some of it in your piggy bank. Even just one quarter a day adds up to almost $90 in a year!\n\nThe rule is simple: Save FIRST, spend LATER.` },
      ]
    }]
  },
  'k2-q3': {
    title: '3rd Quarter: Smart Choices',
    subtopics: [{
      id: 'k2-q3-sub', title: 'Pass or Shoot?',
      lessons: [
        { id: 'k2-choices', title: 'Making smart money choices', content: `Every time you have money, you have a choice: spend it now, or save it for something bigger later. A smart basketball player doesn't always take the first shot — they wait for the best shot.\n\nBefore you spend money, ask yourself: "Is this a need or a want? Is there something bigger I am saving for?"` },
      ]
    }]
  },
  'k2-q4': {
    title: '4th Quarter: Set a Goal!',
    subtopics: [{
      id: 'k2-q4-sub', title: 'Winning the Game',
      lessons: [
        { id: 'k2-goals', title: 'What is a savings goal?', content: `A goal is something you are working toward. In basketball, the goal is to win the game. In money, your goal might be to save enough to buy a toy, a book, or a bike.\n\nWhen you have a goal, it is easier to say NO to spending money on things you don't really need. Your goal keeps you focused — just like a player keeps their eyes on the basket!` },
      ]
    }]
  },

  // ── LEVEL 2 (3-5) ────────────────────────────────────────────────────────────
  'e35-preseason': {
    title: 'Preseason: The Money Game',
    subtopics: [{
      id: 'e35-pre-sub', title: 'Understanding the Playbook',
      lessons: [
        { id: 'e35-money-mindset', title: 'Your money mindset', content: `The best athletes don't just show up and play — they study the game, practice, and build habits. Managing money works the same way. The habits you build RIGHT NOW, even with a small allowance, will shape how you handle money when you are an adult.\n\nThis course is your financial playbook. Let's learn it together.` },
        { id: 'e35-income', title: 'Where does money come from?', content: `Income is money you earn. For you, that might be from an allowance, doing chores, pet-sitting, or a small job. Adults earn income from their jobs or businesses.\n\nThe key rule: you can only spend what you earn. Spending more than you earn means going into debt — and debt is a hole that is very hard to climb out of.` },
      ]
    }]
  },
  'e35-q1': {
    title: '1st Quarter: Earning & Allowance',
    subtopics: [{
      id: 'e35-q1-sub', title: 'The Starter Mentality Begins Here',
      lessons: [
        { id: 'e35-allowance', title: 'Making the most of your allowance', content: `An allowance is a set amount of money you receive regularly. It is practice for the real world — a smaller version of a paycheck.\n\nHere's a simple system called the 50/30/20 rule (kid version):\n- Save 50% in your savings jar\n- Spend 30% on things you want\n- Give 20% away (to a cause you care about, or a family need)\n\nThis keeps your money organized so you always know where it is going.` },
        { id: 'e35-chores', title: 'Earning extra by doing more', content: `Great players don't just do the minimum. They put in extra practice. You can do the same — ask if there are extra chores or tasks you can do to earn more money.\n\nThis teaches you that income is earned through effort, not just handed to you. The more value you create, the more you earn.` },
      ]
    }]
  },
  'e35-q2': {
    title: '2nd Quarter: Savings Defense',
    subtopics: [{
      id: 'e35-q2-sub', title: 'Defense Wins Championships',
      lessons: [
        { id: 'e35-why-save', title: 'Why saving is your best defense', content: `Defense wins championships. In money, saving money is your defense. It protects you when something unexpected happens — like needing to replace a lost library book or a broken item.\n\nIf you spend every dollar the moment you get it, one bad day can wipe you out completely. But if you have savings, you're protected.` },
        { id: 'e35-compound', title: 'How savings grows over time', content: `Here's something amazing: when you put money in a savings account at a bank, the bank pays YOU a little extra money called interest. And then next time, they pay you interest on your original money PLUS the interest.\n\nThis is called compound interest, and it means your savings slowly grows by itself, without you doing anything extra!` },
      ]
    }]
  },
  'e35-q3': {
    title: '3rd Quarter: Spend vs. Save',
    subtopics: [{
      id: 'e35-q3-sub', title: 'Finding the Right Balance',
      lessons: [
        { id: 'e35-tradeoffs', title: 'Every dollar is a choice', content: `Every time you decide to spend a dollar, you are choosing NOT to save it. This is called a trade-off. If you spend $5 on candy this week, that's $5 less toward the $30 game you want.\n\nIt doesn't mean you can never have candy. It just means you have to be intentional — and know what you're trading away.` },
        { id: 'e35-delayed', title: 'The power of waiting', content: `Studies show that people who can wait for something they want tend to be more successful in life. This is called delayed gratification.\n\nChallenge: Pick one thing you want to buy. Instead of buying it today, wait two weeks. If you still want it after two weeks, you can buy it. You might find you didn't actually want it that badly — and you saved money!` },
      ]
    }]
  },
  'e35-q4': {
    title: '4th Quarter: Big Goal, Big Win',
    subtopics: [{
      id: 'e35-q4-sub', title: 'Crossing the Finish Line',
      lessons: [
        { id: 'e35-goals', title: 'Setting a SMART savings goal', content: `A SMART goal is Specific, Measurable, Achievable, Relevant, and Time-based. Instead of saying "I want to save money," say "I want to save $40 for new headphones in 8 weeks."\n\nNow you have a clear target. You know you need to save $5 per week. That is a plan — and plans are what turn dreams into results.` },
        { id: 'e35-tracking', title: 'Tracking your progress', content: `Keep a simple chart or list where you record your savings every week. Watching the number grow is incredibly motivating — like watching your team's score go up in the 4th quarter.\n\nEach time you add to your savings, you're one step closer to the buzzer-beater moment when you hit your goal!` },
      ]
    }]
  },

  // ── LEVEL 3 (MIDDLE SCHOOL) ───────────────────────────────────────────────────
  'mid-preseason': {
    title: 'Preseason: Your Brand & Your Why',
    subtopics: [{
      id: 'mid-pre-sub', title: 'Building the Foundation',
      lessons: [
        { id: 'mid-brand', title: 'You are your own brand', content: `In the book "The Financial Playbook," your boss describes an important concept: you are your own brand. LeBron James is more than a basketball player — he is a brand, an empire. You are building yours right now, even if you don't realize it.\n\nEvery choice you make — how you manage money, your work ethic, your reputation — becomes part of your brand. People with strong financial brands build wealth. People with weak ones stay broke regardless of how much they earn.` },
        { id: 'mid-why', title: 'Find your "Why"', content: `Before you can build financial discipline, you need a reason. WHY do you want to be good with money? Is it to help your family? To buy something important? To never stress about bills?\n\nThe author grew up in "the Bottoms" — a neighborhood where money was tight and options felt limited. His "why" was to change that story for himself and his family. What is your why? Write it down. It will carry you through the hard moments.` },
        { id: 'mid-starter', title: 'Starter vs. Bench Mentality', content: `The book introduces a key idea: the Starter Mentality vs. the Bench Mentality.\n\n**Bench Mentality:** "I'll do the minimum. I'll wait for things to come to me. I'll spend money as soon as I get it."\n\n**Starter Mentality:** "I'll put in extra work. I'll study the game. I'll delay gratification and invest in my future."\n\nYou get to choose which player you want to be. Starters are made in the off-season — and your financial habits right now are your off-season.` },
      ]
    }]
  },
  'mid-q1': {
    title: '1st Quarter: Budget Like a Starter',
    subtopics: [{
      id: 'mid-q1-sub', title: 'Every Possession Counts',
      lessons: [
        { id: 'mid-budget-basics', title: 'What is a budget?', content: `A budget is your financial game plan. Just like a coach draws up plays before the game, a budget tells your money where to go before the month begins.\n\nWithout a budget, you're playing without a plan — and teams without plans lose.`, interactive: 'calculator' },
        { id: 'mid-income-expense', title: 'Income vs. expenses', content: `Income = money coming IN. Expenses = money going OUT. If your income is greater than your expenses, you have a surplus — that is your profit margin. If your expenses are greater than income, you have a deficit — you are going into debt.\n\nThe goal: always keep income higher than expenses, and use the surplus to build your future.` },
        { id: 'mid-50-30-20', title: 'The 50/30/20 Budget Rule', content: `A simple, powerful budgeting system:\n\n- **50%** → Needs (food, school supplies, transport)\n- **30%** → Wants (entertainment, eating out, clothes)\n- **20%** → Savings & investing (your future)\n\nThis rule works whether you earn $20 from chores or $200,000 from a salary. The percentages are the key — not the amount.` },
      ]
    }]
  },
  'mid-q2': {
    title: '2nd Quarter: Defense Wins Championships',
    subtopics: [{
      id: 'mid-q2-sub', title: 'Protecting Your Financial Future',
      lessons: [
        { id: 'mid-emergency', title: 'The emergency fund: your financial defense', content: `In basketball, defense stops the other team from winning. In finance, your emergency fund does the same — it stops unexpected events from destroying your financial progress.\n\nThe rule: save 3–6 months of your living expenses in an account you only touch for real emergencies. A car breakdown is an emergency. A sale on sneakers is not.` },
        { id: 'mid-saving-accounts', title: 'Where to keep your savings', content: `Not all savings are equal. Keeping cash under your mattress earns 0% and can be stolen or burned. A savings account at a bank earns interest (your money makes money).\n\nHigh-yield savings accounts (often found at online banks) earn even MORE interest — sometimes 15–20x more than a regular bank account.` },
        { id: 'mid-compound', title: 'Compound interest: the 8th wonder of the world', content: `Albert Einstein reportedly called compound interest "the eighth wonder of the world." If you invest $1,000 at 7% per year:\n\n- Year 1: $1,070\n- Year 10: $1,967\n- Year 30: $7,612\n- Year 40: $14,974\n\nYou never added another dollar. Time did all the work. This is why starting young is the single biggest financial advantage you will ever have.` },
      ]
    }]
  },
  'mid-q3': {
    title: '3rd Quarter: Assets on the Offense',
    subtopics: [{
      id: 'mid-q3-sub', title: 'Building Wealth Through Investing',
      lessons: [
        { id: 'mid-what-invest', title: 'What is investing?', content: `Defense (saving) protects you. Offense (investing) builds your wealth. Investing means putting your money into something that you expect to grow in value over time.\n\nWhen you buy a share of a company, you become a part-owner of that business. If the company grows and makes more money, your share grows in value too.` },
        { id: 'mid-stocks-etfs', title: 'Stocks, ETFs, and Index Funds', content: `**Stocks:** Owning a small piece of one specific company (e.g., Apple, Nike).\n**ETFs:** A basket of many stocks bundled together. Buying one ETF gives you a tiny piece of dozens of companies at once.\n**Index Funds:** Track a whole market index (like the S&P 500 — America's 500 biggest companies). Historically returns about 10% per year on average.\n\nFor beginners: Index Funds are the safest and most consistent choice. Boring wins.` },
        { id: 'mid-risk', title: 'Risk vs. reward', content: `Higher potential return always comes with higher risk. A single stock can double — or go to zero. An index fund rarely goes to zero because it's spread across hundreds of companies.\n\nThink of risk like basketball shots: a half-court shot is exciting but low-probability. A layup is less exciting but much more reliable. Build your wealth on layups.` },
      ]
    }]
  },
  'mid-q4': {
    title: '4th Quarter: Credit Intro & Borrowing',
    subtopics: [{
      id: 'mid-q4-sub', title: 'Understanding the Game of Credit',
      lessons: [
        { id: 'mid-what-credit', title: 'What is credit?', content: `Credit is borrowed money. When you use a credit card or take a loan, you are using money that isn't yours yet — and promising to pay it back, usually with extra (called interest).\n\nCredit is a powerful tool if you control it. It is a disaster if it controls you.` },
        { id: 'mid-credit-score', title: 'What is a credit score?', content: `Your credit score (300–850) is a grade for how well you manage borrowed money. A high score (720+) means you're trusted — you get better interest rates on loans, lower insurance, and sometimes even better job opportunities.\n\nThe five factors:\n- **Payment history** (35%) — Do you pay on time?\n- **Amounts owed** (30%) — How much of your available credit do you use?\n- **Length of history** (15%) — How long have you had credit?\n- **New credit** (10%) — Have you applied for a lot lately?\n- **Credit mix** (10%) — Do you have different types?` },
      ]
    }]
  },

  // ── LEVEL 4 (HIGH SCHOOL) ─────────────────────────────────────────────────────
  'hi-preseason': {
    title: 'Preseason: Discipline & the Why',
    subtopics: [{
      id: 'hi-pre-sub', title: 'The Mental Game of Money',
      lessons: [
        { id: 'hi-discipline', title: 'Discipline is the real currency', content: `The book opens with a foundational truth: talent without discipline is wasted potential. You might have financial advantages — a job, a family with money, scholarships — but without discipline, it will all pass through your hands.\n\nDiscipline in money means: paying yourself first before spending, following your budget even when it's inconvenient, and making decisions based on your future self, not your present desires.` },
        { id: 'hi-bench-vs-starter', title: 'Are you a Starter or a Benchwarmer?', content: `The author describes two types of people with money:\n\n**The Benchwarmer:** Lives paycheck to paycheck. Spends 100% of income the day it arrives. No savings. No plan. Reacts to financial emergencies instead of preventing them.\n\n**The Starter:** Lives below their means intentionally. Builds an emergency fund. Invests consistently. Plays offense AND defense.\n\nHigh school is the moment you decide which player you will be for the rest of your life.` },
        { id: 'hi-goal-setting', title: 'Setting financial goals with a timeline', content: `Your goals need deadlines. "I want to save money" is a wish. "I want to save $2,000 for a used car by June of my senior year" is a goal.\n\nBreak it down: $2,000 ÷ 18 months = ~$111 per month. Now you know exactly what you need to earn and save each month to hit that target. Make the math work for you.` },
      ]
    }]
  },
  'hi-q1': {
    title: '1st Quarter: Every Possession Counts',
    subtopics: [{
      id: 'hi-q1-sub', title: 'Income, Paychecks & Habits',
      lessons: [
        { id: 'hi-first-job', title: 'Your first paycheck & W-4', content: `Getting your first paycheck is exciting — until you see how much was taken out. That money goes to federal taxes, state taxes, and Social Security.\n\nWhen you start a job you fill out a W-4 form. This tells your employer how much tax to withhold. If you are a student working part-time, you may be eligible for an exemption — ask your HR department.` },
        { id: 'hi-lifestyle', title: 'Lifestyle inflation: the silent wealth killer', content: `Here is a trap that destroys most people: every time their income goes up, their spending goes up by the same amount — sometimes more. This is called lifestyle inflation.\n\nYou get a raise → you get a nicer apartment → you get a car payment → you get designer clothes. You earn more but feel just as broke. The book calls this the Bench Mentality — scaling your spending to match your income instead of letting the gap grow.\n\n**Starter Rule:** When income goes up, keep expenses flat. Let the gap grow. That gap becomes wealth.` },
        { id: 'hi-pay-yourself', title: 'Pay yourself first', content: `The #1 budgeting principle: before you pay any bill, any expense, anything — transfer a set amount to your savings or investment account.\n\nAutomate it. Set it up so the money moves automatically the day your paycheck hits. You cannot spend what you never see. This is the foundation of every wealthy person's financial system.` },
      ]
    }]
  },
  'hi-q2': {
    title: '2nd Quarter: Offense vs. Defense',
    subtopics: [{
      id: 'hi-q2-sub', title: 'Saving & Spending in Balance',
      lessons: [
        { id: 'hi-emergency', title: 'The emergency fund: non-negotiable defense', content: `An emergency fund is 3–6 months of living expenses saved in a liquid (easy to access), low-risk account. This is your defense. Without it, any unexpected event — medical bills, car repair, job loss — sends you into debt.\n\nMost Americans cannot cover a $1,000 emergency without borrowing money. Your emergency fund is what separates you from that statistic.` },
        { id: 'hi-debt-trap', title: 'How debt traps work', content: `A credit card with a $5,000 balance at 24% APR, where you pay only the minimum ($100/month), takes over 8 YEARS to pay off — and you will have paid nearly $4,000 in interest alone.\n\nDebt is designed to keep you paying. The bank makes money every month you carry a balance. The book describes high-interest debt as "playing defense for the bank, not yourself." Stop playing for the other team.` },
        { id: 'hi-good-debt', title: 'Not all debt is equal', content: `"Good debt" builds value over time: a mortgage on a home, a student loan for a career-boosting degree, or a business loan.\n\n"Bad debt" destroys wealth: high-interest credit card debt, payday loans, financing depreciating assets (like a luxury car you can't afford).\n\nThe test: Will this debt help me earn MORE money than it costs me in interest? If yes, it might be worth it. If not, avoid it.` },
      ]
    }]
  },
  'hi-q3': {
    title: '3rd Quarter: From Deficit to Assets',
    subtopics: [{
      id: 'hi-q3-sub', title: 'Investing & Building Real Wealth',
      lessons: [
        { id: 'hi-assets', title: 'Assets vs. liabilities', content: `**Assets** put money IN your pocket: investments, rental property, a business, savings accounts.\n**Liabilities** take money OUT of your pocket: car loans, credit card debt, mortgage (debated).\n\nWealthy people spend their lives accumulating assets and minimizing liabilities. Most people do the opposite — they buy liabilities (new cars, expensive clothes) and call them assets.` },
        { id: 'hi-roth-ira', title: 'Start a Roth IRA right now', content: `A Roth IRA is the single most powerful financial tool available to young people. You invest after-tax money today, and it grows completely TAX FREE. When you retire, you pay ZERO taxes on withdrawals.\n\nIf you invest $200/month starting at age 17 with a 7% average return:\n- At age 65: over $900,000 — almost entirely tax-free.\n\nYou can contribute up to $7,000/year (2024 limit). The catch: you need earned income (a job) to contribute.` },
        { id: 'hi-index-funds', title: 'Why index funds beat stock picking', content: `Over 90% of professional fund managers fail to beat the market index over a 15-year period. If the experts can't beat it consistently, individual investors almost certainly can't either.\n\nBuy a simple S&P 500 index fund (like VOO or SPY), contribute regularly, and leave it alone. This strategy, called "passive investing," has made more ordinary people wealthy than any other method.` },
      ]
    }]
  },
  'hi-q4': {
    title: '4th Quarter: The Last Shot — Credit & Loans',
    subtopics: [{
      id: 'hi-q4-sub', title: 'The Credit & Student Loan Game',
      lessons: [
        { id: 'hi-credit-score', title: 'Your credit score is your financial reputation', content: `Your credit score follows you everywhere. A 760+ score gets you the best mortgage rates, the best car loan rates, and even helps you rent apartments. A 580 score can cost you thousands more per year in interest, or even disqualify you from renting.\n\nBuilding credit young: Get a secured credit card or become an authorized user on a parent's account. Use it for small purchases. Pay the FULL balance every single month.` },
        { id: 'hi-utilization', title: 'Credit utilization: the hidden key', content: `Credit utilization is how much of your available credit you are using. If you have a $1,000 credit limit and spend $900, your utilization is 90% — which DESTROYS your credit score.\n\nThe rule: keep utilization BELOW 30% at all times. Ideally below 10% for a top-tier score. This is the #2 factor in your score (30% of the total).` },
        { id: 'hi-student-loans', title: 'Student loans: the last shot decision', content: `The book describes student loans as "the last shot" — a high-stakes decision with no time for errors. Before taking ANY student loan, ask:\n\n1. What will my starting salary be in this field?\n2. What is the total loan amount?\n3. What will monthly payments be after graduation?\n\nThe rule of thumb: total student loan debt should be no more than your expected first-year salary. A $50,000 salary means max $50,000 in loans.\n\nFederal loans (Subsidized, Unsubsidized) are always better than private loans. Never borrow more than you need.` },
      ]
    }]
  },

  // ── LEVEL 5 (ADULT) ───────────────────────────────────────────────────────────
  'ad-foundations': {
    title: 'Financial Foundations',
    subtopics: [{
      id: 'ad-found-sub', title: 'Building the Base',
      lessons: [
        { id: 'ad-net-worth', title: 'Calculating your net worth', content: `Net worth = Total Assets − Total Liabilities. This is your financial scoreboard. Track it quarterly. Wealthy people obsessively know their net worth. Most people have no idea.\n\nGoal: Make your net worth positive and grow it every year. Even if it's negative today (due to student loans), focus on the trend — not the number.` },
        { id: 'ad-cashflow', title: 'Cash flow management', content: `Cash flow is the movement of money in and out of your life. Positive cash flow (earning more than spending) is the foundation of all wealth.\n\nCreate a detailed monthly budget: track every dollar with an app or spreadsheet. Find and eliminate money leaks — subscriptions you forgot about, dining out habits, impulse purchases. Small leaks sink big ships.` },
      ]
    }]
  },
  'ad-defense': {
    title: 'Financial Defense: Protect What You Have',
    subtopics: [{
      id: 'ad-def-sub', title: 'Insurance, Emergency Funds & Risk',
      lessons: [
        { id: 'ad-emergency', title: 'Emergency fund for adults: 6 months minimum', content: `As an adult with real responsibilities — rent, car, family — your emergency fund needs to be larger. 6 months of ALL expenses is the floor. If you are self-employed or have irregular income, target 12 months.\n\nKeep it in a High-Yield Savings Account (HYSA) that earns 4–5% APY. Ally, Marcus, or SoFi are common choices. Your emergency fund should be earning interest while it protects you.` },
        { id: 'ad-insurance', title: 'Insurance: defense you pay for', content: `Insurance is the ultimate financial defense. It protects your assets from catastrophic events.\n\nEssential coverages: Health, Auto, Renter's/Homeowner's, Life (if you have dependents), Disability (covers your income if you can't work — often overlooked and critically important).\n\nDO NOT skip disability insurance if you have a family depending on your income. Your ability to earn is your most valuable asset.` },
      ]
    }]
  },
  'ad-assets': {
    title: 'Asset Building: Offense Wins Wealth',
    subtopics: [{
      id: 'ad-assets-sub', title: 'Growing Long-Term Wealth',
      lessons: [
        { id: 'ad-401k', title: '401(k) & employer matching', content: `A 401(k) lets you invest pre-tax money for retirement — reducing your taxable income today. If your employer offers a match, contribute AT LEAST enough to get the full match. It is a 50–100% instant return.\n\n2024 contribution limit: $23,000. If you are 50+: $30,500 (catch-up contributions).` },
        { id: 'ad-roth', title: 'Roth IRA: tax-free wealth', content: `For most adults in lower-to-mid tax brackets, a Roth IRA is the better long-term choice over a Traditional IRA. You pay taxes NOW (at your current, lower rate) and never pay taxes on growth again.\n\n2024 limit: $7,000 ($8,000 if 50+). Income limits apply — consult a financial advisor if you earn over $146,000 (single) or $230,000 (married).` },
        { id: 'ad-real-estate', title: 'Real estate as an asset class', content: `Real estate can build wealth through appreciation (home value increasing over time) and rental income. However, it is NOT passive — being a landlord is a second job.\n\nThe BRRRR strategy (Buy, Rehab, Rent, Refinance, Repeat) is a common wealth-building path for those willing to put in the work. Start by understanding your local market before jumping in.` },
      ]
    }]
  },
  'ad-debt': {
    title: 'Debt Management & Credit Mastery',
    subtopics: [{
      id: 'ad-debt-sub', title: 'Eliminating Debt Strategically',
      lessons: [
        { id: 'ad-avalanche', title: 'The Debt Avalanche method', content: `List all your debts by interest rate, highest to lowest. Pay minimums on everything, then throw every extra dollar at the highest-interest debt first.\n\nThis is mathematically optimal — it minimizes the total interest you pay over time. It is the fastest path to debt-free if you have the discipline to stick to it.` },
        { id: 'ad-snowball', title: 'The Debt Snowball method', content: `List debts by balance, smallest to largest. Pay off the smallest one first, then roll that payment to the next.\n\nPsychologically powerful — early wins keep you motivated. Not optimal mathematically, but if you need momentum to stay on track, this method works better for some people than the avalanche.` },
        { id: 'ad-credit-master', title: 'Credit score optimization', content: `To maximize your score:\n1. Never miss a payment (set up autopay for minimums)\n2. Keep utilization under 10%\n3. Don't close old accounts (length of history matters)\n4. Only apply for new credit when necessary\n5. Have a mix of credit types (card + installment loan)\n\nA 760+ score qualifies you for the best rates on mortgages, car loans, and credit cards — saving you potentially hundreds of thousands of dollars over a lifetime.` },
      ]
    }]
  },
  'ad-retirement': {
    title: 'Retirement & Tax-Efficient Investing',
    subtopics: [{
      id: 'ad-ret-sub', title: 'Planning Your Financial Finish Line',
      lessons: [
        { id: 'ad-retirement-number', title: 'What is your retirement number?', content: `The 4% Rule: In retirement, you can safely withdraw 4% of your portfolio each year without running out of money over 30+ years.\n\nTo find your retirement number: Annual Expenses × 25 = what you need saved.\n\nExample: You spend $60,000/year → $60,000 × 25 = $1,500,000 is your target.` },
        { id: 'ad-tax-strategy', title: 'Tax-efficient investing strategies', content: `Tax drag silently erodes investment returns. Strategies to minimize it:\n\n- **Tax-loss harvesting:** Sell losing investments to offset capital gains taxes.\n- **Asset location:** Keep high-growth assets in Roth accounts (tax-free growth), bonds in Traditional accounts (deferred taxes).\n- **Long-term vs. short-term gains:** Holding investments 1+ year cuts your capital gains tax rate significantly.\n\nWork with a fiduciary financial advisor to optimize — they are legally required to act in your interest (unlike commission-based "advisors").` },
      ]
    }]
  },
};

// ─── EXERCISES / QUIZZES ──────────────────────────────────────────────────────
export const EXERCISES = {
  // Level 1 (K-2)
  'k2-preseason': [{ id: 'k2-money-quiz', title: 'What is Money? Quiz', questionCount: 4, isAvailable: true, questions: [
    { id: 'q1', question: 'Where does money come from?', options: ['It grows on trees', 'You earn it by working and creating value', 'You get it from the bank for free', 'It falls from the sky'], correctIndex: 1, explanation: 'Money is a reward for doing work or creating value for others.' },
    { id: 'q2', question: 'What is the most important thing to do when you get money?', options: ['Buy toys immediately', 'Save a piece of it for your future', 'Hide it in your room', 'Give it all away'], correctIndex: 1, explanation: 'The first rule of money is to "pay yourself first" by saving a portion of everything you earn.' },
    { id: 'q3', question: 'What does it mean to have a "goal"?', options: ['A dream you never work toward', 'A target you plan and save for over time', 'Something you buy today', 'A game you play'], correctIndex: 1, explanation: 'A goal gives your money a purpose. If you want a big item, you set a goal and save until you reach it.' },
    { id: 'q4', question: 'Why is it important to learn about money while you are young?', options: ['So you can show off', 'Good money habits build wealth over a lifetime', 'Because adults say so', 'You do not need to learn about money'], correctIndex: 1, explanation: 'The habits you build now will help you make smart financial choices for the rest of your life.' },
  ]}],
  'k2-q1': [{ id: 'k2-needs-quiz', title: 'Needs vs. Wants Quiz', questionCount: 4, isAvailable: true, questions: [
    { id: 'q1', question: 'What is a financial "Need"?', options: ['Something you really want to play with', 'Something required for your health and safety (like food or shelter)', 'A new video game', 'Expensive sneakers'], correctIndex: 1, explanation: 'Needs are essentials. You must take care of needs before spending on anything else.' },
    { id: 'q2', question: 'What is a "Want"?', options: ['Groceries', 'Medicine', 'Something nice to have, but not essential', 'A safe place to live'], correctIndex: 2, explanation: 'Wants are fun to have, but they are optional. You buy them with leftover money after needs are met.' },
    { id: 'q3', question: 'You have enough money for lunch (a need) or a new toy (a want). What do you buy?', options: ['The toy', 'Lunch', 'Borrow money for both', 'Neither'], correctIndex: 1, explanation: 'Needs always come first. A financially disciplined person secures their needs before their wants.' },
    { id: 'q4', question: 'Is it bad to buy "Wants"?', options: ['Yes, always', 'No, as long as you pay for needs and savings first', 'You should only buy wants', 'Wants are illegal'], correctIndex: 1, explanation: 'Wants are great! You just have to budget for them after taking care of your savings and your needs.' },
  ]}],
  'k2-q2': [{ id: 'k2-save-quiz', title: 'Saving Money Quiz', questionCount: 3, isAvailable: true, questions: [
    { id: 'q1', question: 'What is delayed gratification?', options: ['Waiting to buy something so you can save for something better', 'Buying things as fast as possible', 'Never spending money', 'Being late to school'], correctIndex: 0, explanation: 'Delayed gratification is the superpower of waiting. It is choosing a bigger reward tomorrow instead of a small reward today.' },
    { id: 'q2', question: 'Where is the safest place to grow your money over time?', options: ['Under your mattress', 'In a bank account where it earns interest', 'In your pocket', 'Buried outside'], correctIndex: 1, explanation: 'Banks pay you a small amount of money (interest) just for keeping your money with them!' },
    { id: 'q3', question: 'Why do we build an emergency fund?', options: ['To buy toys', 'To protect us when unexpected bad things happen', 'To give to friends', 'Because it looks cool'], correctIndex: 1, explanation: 'Emergencies happen to everyone. Savings act like a shield to protect you when things go wrong.' },
  ]}],
  'k2-q3': [], 'k2-q4': [],

  // Level 2 (3-5)
  'e35-preseason': [{ id: 'e35-mindset-quiz', title: 'Money Mindset Quiz', questionCount: 4, isAvailable: true, questions: [
    { id: 'q1', question: 'What is income?', options: ['Money you spend', 'Money you earn', 'Money you borrow', 'Money you lose'], correctIndex: 1, explanation: 'Income is money you earn from work, chores, allowance, or a job.' },
    { id: 'q2', question: 'What happens if you spend MORE than you earn?', options: ['You save more', 'You go into debt', 'You get richer', 'Nothing happens'], correctIndex: 1, explanation: 'Spending more than you earn creates debt — money you owe to others.' },
    { id: 'q3', question: 'The Starter Mentality means:', options: ['Doing the minimum', 'Waiting for things to come to you', 'Working hard and planning ahead', 'Spending money freely'], correctIndex: 2, explanation: 'Starters put in extra work, plan, and delay spending so they can build a bigger future.' },
    { id: 'q4', question: 'Why is it important to build money habits NOW?', options: ['It is not important', 'Because habits built young stay with you for life', 'Only adults need money habits', 'So you can impress friends'], correctIndex: 1, explanation: 'The habits you build now — even with small amounts — will shape how you handle money as an adult.' },
  ]}],
  'e35-q1': [{ id: 'e35-allowance-quiz', title: 'Allowance & Earning Quiz', questionCount: 4, isAvailable: true, questions: [
    { id: 'q1', question: 'Using the 50/30/20 rule, if you earn $10, how much should you save?', options: ['$3', '$5', '$2', '$10'], correctIndex: 1, explanation: '50% of $10 = $5 goes to savings first.' },
    { id: 'q2', question: 'What does "earning income" mean?', options: ['Spending money', 'Receiving money in exchange for work or service', 'Borrowing money from a friend', 'Finding money on the ground'], correctIndex: 1, explanation: 'You earn income by providing value — doing chores, a job, or a service for others.' },
    { id: 'q3', question: 'If you want to earn MORE allowance, what is the best approach?', options: ['Ask louder', 'Do extra chores or tasks to show extra value', 'Do nothing and wait', 'Spend less'], correctIndex: 1, explanation: 'Doing extra work shows you create more value — and value is rewarded with more income.' },
    { id: 'q4', question: 'What is an "allowance"?', options: ['Money you borrow from a bank', 'A set amount of money received regularly for practicing money skills', 'Money you find', 'A one-time gift'], correctIndex: 1, explanation: 'An allowance is practice for the real world — a small version of a paycheck you can learn from.' },
  ]}],
  'e35-q2': [], 'e35-q3': [], 'e35-q4': [],

  // Level 3 (Middle)
  'mid-preseason': [{ id: 'mid-mindset-quiz', title: 'Starter Mentality Quiz', questionCount: 5, isAvailable: true, questions: [
    { id: 'q1', question: 'According to the Financial Playbook, what is a "Starter Mentality"?', options: ['Spending money as soon as you get it', 'Working hard, planning ahead, and investing in your future', 'Only doing what is required', 'Relying on others for money'], correctIndex: 1, explanation: 'The Starter Mentality is about discipline, preparation, and making intentional financial decisions.' },
    { id: 'q2', question: 'What does "you are your own brand" mean in a financial context?', options: ['You should advertise yourself', 'Your habits, reputation, and choices define your financial future', 'You need to start a business', 'You should wear name-brand clothes'], correctIndex: 1, explanation: 'Like LeBron James, your "brand" is built by your work ethic, discipline, and financial choices.' },
    { id: 'q3', question: 'What is "delayed gratification"?', options: ['Paying bills late', 'Waiting for a reward rather than taking a smaller one now', 'Spending money slowly', 'Getting paid on a delay'], correctIndex: 1, explanation: 'Delayed gratification means resisting an immediate reward in favor of a larger future one.' },
    { id: 'q4', question: 'Finding your financial "Why" is important because:', options: ['It impresses others', 'It motivates you to stay disciplined when it gets hard', 'The book says so', 'Everyone has to have one'], correctIndex: 1, explanation: 'Your "Why" is your motivation engine. When money decisions get hard, your Why keeps you on track.' },
    { id: 'q5', question: 'A Bench Mentality player does which of the following?', options: ['Saves 20% of income automatically', 'Invests consistently every month', 'Spends income as fast as it arrives with no plan', 'Builds an emergency fund first'], correctIndex: 2, explanation: 'The Bench Mentality is reactive — spending without a plan and waiting for things to improve on their own.' },
  ]}],
  'mid-q1': [{ id: 'mid-budget-quiz', title: 'Budget Like a Starter Quiz', questionCount: 5, isAvailable: true, questions: [
    { id: 'q1', question: 'Using the 50/30/20 rule with a $200 monthly income, how much goes to savings?', options: ['$50', '$60', '$40', '$100'], correctIndex: 2, explanation: '20% of $200 = $40 goes to savings and investing.' },
    { id: 'q2', question: 'What is a "budget deficit"?', options: ['Having more income than expenses', 'Spending more than you earn', 'A type of bank account', 'A government policy'], correctIndex: 1, explanation: 'A deficit means expenses exceed income — you are spending more than you make, which creates debt.' },
    { id: 'q3', question: 'What should you do FIRST when you receive income?', options: ['Pay for wants', 'Save/invest a set amount before spending anything else', 'Pay the biggest bill', 'Treat yourself'], correctIndex: 1, explanation: '"Pay yourself first" means savings/investing comes before any spending.' },
    { id: 'q4', question: 'A budget is best described as:', options: ['A restriction on fun', 'A plan that tells your money where to go', 'A bank account type', 'A list of expenses only'], correctIndex: 1, explanation: 'A budget is a proactive plan — not a restriction — that gives every dollar a purpose.' },
    { id: 'q5', question: 'If your monthly income is $150 and your expenses are $180, what is true?', options: ['You have a surplus of $30', 'You have a deficit of $30', 'You are breaking even', 'You should spend more'], correctIndex: 1, explanation: '$150 income - $180 expenses = -$30 deficit. You are spending $30 more than you earn.' },
  ]}],
  'mid-q2': [], 'mid-q3': [], 'mid-q4': [],

  // Level 4 (High School)
  'hi-preseason': [{ id: 'hi-mindset-quiz', title: 'Discipline & Goal Setting Quiz', questionCount: 5, isAvailable: true, questions: [
    { id: 'q1', question: 'What is "lifestyle inflation"?', options: ['When prices in stores go up', 'When your spending increases every time your income increases', 'A type of investment strategy', 'When your lifestyle improves through hard work'], correctIndex: 1, explanation: 'Lifestyle inflation is the trap of matching your spending to your income, leaving no room for wealth building.' },
    { id: 'q2', question: 'A SMART financial goal is:', options: ['A goal about buying smart technology', 'Specific, Measurable, Achievable, Relevant, and Time-based', 'A goal that is easy to reach', 'Any financial goal you write down'], correctIndex: 1, explanation: 'SMART goals have all five elements, turning vague wishes into actionable plans.' },
    { id: 'q3', question: 'The Starter financial rule when your income increases is to:', options: ['Increase your lifestyle to match', 'Keep expenses flat and grow the gap between income and spending', 'Take a vacation first', 'Buy a new car'], correctIndex: 1, explanation: 'Starters let the gap between income and expenses grow — that gap becomes wealth.' },
    { id: 'q4', question: 'If you want to save $1,800 in 12 months, how much must you save per month?', options: ['$100', '$150', '$180', '$200'], correctIndex: 1, explanation: '$1,800 ÷ 12 months = $150 per month.' },
    { id: 'q5', question: 'What is the core of financial discipline?', options: ['Earning a high income', 'Making decisions based on your future self, not your present desires', 'Never spending money on fun', 'Only investing in stocks'], correctIndex: 1, explanation: 'Discipline is choosing your future self over your present impulses — the foundation of all financial success.' },
  ]}],
  'hi-q1': [], 'hi-q2': [],
  'hi-q3': [{ id: 'hi-invest-quiz', title: 'Investing & Assets Quiz', questionCount: 5, isAvailable: true, questions: [
    { id: 'q1', question: 'What is the key difference between an asset and a liability?', options: ['Assets are physical, liabilities are digital', 'Assets put money in your pocket; liabilities take money out', 'Assets are for businesses only', 'Liabilities are always bad'], correctIndex: 1, explanation: 'Assets generate income or grow in value. Liabilities cost you money over time.' },
    { id: 'q2', question: 'A Roth IRA is powerful for young people because:', options: ['You can withdraw money anytime with no penalty', 'After-tax contributions grow completely tax-free and are never taxed again', 'The government matches your contributions', 'It has no contribution limits'], correctIndex: 1, explanation: 'With a Roth IRA, you pay taxes now (at your low rate) and NEVER pay taxes on growth again.' },
    { id: 'q3', question: 'Why do most financial experts recommend index funds over picking individual stocks?', options: ['Index funds are more exciting', 'Over 90% of professional managers fail to beat the index long-term', 'Individual stocks are illegal for young people', 'Index funds always go up'], correctIndex: 1, explanation: 'If professional experts with full-time research teams can not consistently beat the index, individuals almost certainly cannot either.' },
    { id: 'q4', question: 'If you invest $200/month starting at 17 at 7% annual return, approximately how much will you have at 65?', options: ['$96,000', '$250,000', '$500,000', 'Over $900,000'], correctIndex: 3, explanation: 'Compound interest over nearly 50 years is transformative. Time is your most powerful financial weapon.' },
    { id: 'q5', question: 'Which of these is considered "bad debt"?', options: ['A mortgage on a rental property', 'A student loan for a high-demand career', 'Credit card balance at 24% APR for dining out', 'A business loan to expand income'], correctIndex: 2, explanation: 'High-interest credit card debt for consumption (not investment) is bad debt — it builds nothing and costs a fortune.' },
  ]}],
  'hi-q4': [{ id: 'hi-credit-quiz', title: 'Credit & Student Loans Quiz', questionCount: 5, isAvailable: true, questions: [
    { id: 'q1', question: 'What is credit utilization?', options: ['How often you use your credit card', 'What percentage of your available credit you are currently using', 'Your total debt amount', 'The interest rate on your card'], correctIndex: 1, explanation: 'Utilization = balance ÷ credit limit. Keep it under 30% (ideally under 10%) for the best score impact.' },
    { id: 'q2', question: 'The #1 factor in your credit score is:', options: ['How many credit cards you have', 'Payment history — do you pay on time?', 'How old your accounts are', 'Your income level'], correctIndex: 1, explanation: 'Payment history is 35% of your score. One missed payment can drop your score significantly.' },
    { id: 'q3', question: 'The general rule for student loan debt is:', options: ['Never borrow for education', 'Total debt should not exceed your expected first-year salary', 'Borrow as much as you need with no limit', 'Private loans are always better than federal loans'], correctIndex: 1, explanation: 'If you expect to earn $45,000 starting salary, borrowing more than $45,000 puts you in a difficult repayment position.' },
    { id: 'q4', question: 'Federal student loans are preferred over private loans because:', options: ['They have lower interest rates automatically', 'They offer income-driven repayment, deferment, and forgiveness options that private loans do not', 'Private loans are illegal for students', 'Federal loans have no interest'], correctIndex: 1, explanation: 'Federal loans come with protections and flexibility that private loans simply do not offer.' },
    { id: 'q5', question: 'To build credit as a high school student, the best approach is:', options: ['Take out a large personal loan', 'Open a secured credit card and pay the full balance every month', 'Apply for as many cards as possible', 'Avoid credit entirely until age 25'], correctIndex: 1, explanation: 'A secured card with full monthly payments builds a positive history with zero interest paid.' },
  ]}],

  // Level 5 (Adult)
  'ad-foundations': [{ id: 'ad-found-quiz', title: 'Financial Foundations Quiz', questionCount: 4, isAvailable: true, questions: [
    { id: 'q1', question: 'How do you calculate net worth?', options: ['Total income minus expenses', 'Total assets minus total liabilities', 'Savings account balance only', 'Annual salary'], correctIndex: 1, explanation: 'Net Worth = Total Assets − Total Liabilities. This is your true financial scoreboard.' },
    { id: 'q2', question: 'Positive cash flow means:', options: ['You have a positive attitude about money', 'You are earning more than you are spending', 'Your credit score is above 700', 'You have no debt'], correctIndex: 1, explanation: 'Positive cash flow (income > expenses) is the foundation of all wealth building.' },
    { id: 'q3', question: 'What is a "money leak"?', options: ['A broken ATM', 'Small recurring expenses you barely notice that drain your budget', 'A bad investment', 'Bank fees'], correctIndex: 1, explanation: 'Money leaks are forgotten subscriptions, daily small purchases, and habits that silently drain your finances.' },
    { id: 'q4', question: 'How often should you review your net worth?', options: ['Never — it is depressing', 'Once a decade', 'Quarterly (every 3 months)', 'Only when you have a problem'], correctIndex: 2, explanation: 'Tracking net worth quarterly keeps you aware of your financial trajectory and motivates continued progress.' },
  ]}],
  'ad-defense': [], 'ad-assets': [], 'ad-debt': [], 'ad-retirement': [],
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
