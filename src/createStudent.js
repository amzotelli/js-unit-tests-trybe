const createStudent = (nome) => {
  const name = {
    name: nome,
    feedback: () => 'Eita pessoa boa!',
  };
  return name;
};

module.exports = createStudent;
