const mutation = {
  insertIdol: (id, nameKana, nameKanji, url, isAdult) => {
    return `
      mutation CreateAIdol {
        createIdol(
            data: {
                id: "${id}"
                nameKana: "${nameKana}"
                nameKanji: "${nameKanji}"
                url: "${url}"
                isAdult: ${isAdult}
            }) {
                id
                nameKana
                nameKanji
                url
                isAdult
            }
        }`;
  }
};

const query = {
  getIdol: () => {
    return `
    query FindAllIdols {
        allIdols {
          data {
            _id
            id
            nameKana
            nameKanji
            url
            isAdult
          }
        }
      }`;
  }
};

export { mutation, query };
