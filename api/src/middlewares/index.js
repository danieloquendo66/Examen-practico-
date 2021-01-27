module.exports = {
  codigo: (chars, lon) => {
    let code = "";
    for (let x = 0; x < lon; x++) {
      rand = Math.floor(Math.random() * chars.length);
      code += chars.substr(rand, 1);
    }
    return code;
  },
};
