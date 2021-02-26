export interface Point {
  x: number;
  y: number;
}

export interface DhillFormula {
  P: Point;
  a: number;
  b: number;
  c: number;
  K: Point;
  K_Rc: Point;
  rl: number;
  L: Point;
  L_Rc: Point;
  r2l: number;
  U: Point;
  U_Rc: Point;
  r2: number;
}

export class DhillProfileInput {
  s: number = 2.25;
  alpha: number = 5;
  h: number = 43.16;
  n: number = 78.47;
  l1: number = 7.92;
  l2: number = 7;
  beta_p: number = 36;
  beta: number = 34;
  beta_l: number = 31.2;
  r2: number = 88.5;
}

const half_pi: number = Math.PI * .5;

export function getDhillFormula(profile: DhillProfileInput): DhillFormula {
  const {alpha, beta, beta_l, beta_p, h, l1, l2, n, r2, s} = profile;
  const _alpha: number = Math.PI * (alpha / 180);
  const _beta_p: number = Math.PI * (beta_p / 180);
  const _beta: number = Math.PI * (beta / 180);
  const _beta_l: number = Math.PI * (beta_l / 180);

  const rl: number = l1 / (_beta_p - _beta);
  const r2l: number = l2 / (_beta_p - _beta);

  const K: Point = {x: n, y: s - h};
  const K_Rc: Point = {
    x: K.x + rl * Math.cos(half_pi - _beta),
    y: K.y + rl * Math.sin(half_pi - _beta),
  };

  const P: Point = {
    x: K_Rc.x + (K.x - K_Rc.x) * Math.cos(_beta - _beta_p) - (K.y - K_Rc.y) * Math.sin(_beta - _beta_p),
    y: K_Rc.y + (K.x - K_Rc.x) * Math.sin(_beta - _beta_p) + (K.y - K_Rc.y) * Math.cos(_beta - _beta_p),
  };

  const L_Rc: Point = {
    x: K.x + r2l * Math.cos(half_pi - _beta),
    y: K.y + r2l * Math.sin(half_pi - _beta),
  };
  const L: Point = {
    x: L_Rc.x + (K.x - L_Rc.x) * Math.cos(_beta - _beta_l) - (K.y - L_Rc.y) * Math.sin(_beta - _beta_l),
    y: L_Rc.y + (K.x - L_Rc.x) * Math.sin(_beta - _beta_l) + (K.y - L_Rc.y) * Math.cos(_beta - _beta_l),
  };
  const U_Rc: Point = {
    x: L.x + r2 * Math.cos(half_pi - _beta_l),
    y: L.y + r2 * Math.sin(half_pi - _beta_l),
  };
  const U: Point = {
    x: U_Rc.x + (L.x - U_Rc.x) * Math.cos(_beta_l) - (L.y - U_Rc.y) * Math.sin(_beta_l),
    y: U_Rc.y + (L.x - U_Rc.x) * Math.sin(_beta_l) + (L.y - U_Rc.y) * Math.cos(_beta_l),
  };

  const a1: number = P.x * P.x * 3;
  const b1: number = P.x * 2;
  const c1: number = Math.tan(-_beta_p) - Math.tan(-_alpha);
  const a2: number = P.x * P.x * P.x;
  const b2: number = P.x * P.x;
  const c2: number = P.y - Math.tan(-_alpha) * P.x;
  const W: number = a1 * b2 - b1 * a2;
  const Wx: number = c1 * b2 - b1 * c2;
  const Wy: number = a1 * c2 - c1 * a2;
  const a: number = Wx / W;
  const b: number = Wy / W;
  const c: number = Math.tan(-_alpha);

  return {P, a, b, c, K, K_Rc, rl, L, L_Rc, r2l, U, U_Rc, r2};
}
