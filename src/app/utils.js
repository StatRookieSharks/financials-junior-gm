export const getPlayerProps = () => [
  'fOne',
  'fTwo',
  'fThree',
  'dOne',
  'dTwo',
  'gOne',
  'benchOne',
  'benchTwo',
  'benchThree',
];

export const getMoneySpent = (student) => {
  if (!student) {
    return 0;
  }

  return getPlayerProps().reduce((total, p) => {
    const player = student[p];
    if (player) {
      total += player.playerCost;
    }
    return total;
  }, 0);
};

export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getDollarString = (num) => {
  if (!num) {
    return '$0';
  }
  if (num % 1 === 0) {
    return `$${num}`;
  }
  return `$${num.toFixed(2)}`;
};

export const getMoneyLevels = (level) => {
  switch (level) {
    case 1:
      return {
        0: {
          short: '$2',
          long: 'two dollar',
          num: 2,
        },
        1: {
          short: '$1',
          long: 'one dollar',
          num: 1,
        },
        2: {
          short: '50\u00a2',
          long: 'fifty cent',
          num: 0.5,
        },
      };
    case 2:
      return {
        0: {
          short: '$2',
          long: 'two dollar',
          num: 2,
        },
        1: {
          short: '$1',
          long: 'one dollar',
          num: 1,
        },
        2: {
          short: '50\u00a2',
          long: 'fifty cent',
          num: 0.5,
        },
      };
    case 3:
      return {
        0: {
          short: '$2',
          long: 'two dollar',
          num: 2,
        },
        1: {
          short: '$1',
          long: 'one dollar',
          num: 1,
        },
        2: {
          short: '50\u00a2',
          long: 'fifty cent',
          num: 0.5,
        },
      };
  }
};