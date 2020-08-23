export default (facts) => ({
  facts: Object.keys(facts).map((name) => ({
    name,
    value: facts[name],
  })),
});
