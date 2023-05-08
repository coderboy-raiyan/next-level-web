type square = {
  height?: number;
  width?: number;
  primaryDiagonal?: number;
  secondaryDiagonal?: number;
};

type area = {
  [key in keyof square]: square[key];
};

const area1: area = {
  primaryDiagonal: 34,
};
