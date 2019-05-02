import * as d3 from "d3";

export const makeData = (value,segma) => {
  const rnd = d3.randomNormal(value, segma);

  let data = d3
    .range(600)
    .map(i => {
      return { date: new Date(new Date().getTime() - 30000 * i), value: rnd() };
    })
    .reverse();
  return data;
};
