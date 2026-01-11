

let recentSearches = [
  { id: 1, text: 'ánh mắt kẻ si tình' },
  { id: 2, text: 'gái xinh' },
  { id: 3, text: 'nà ní' },
];

const youMayLike = [
  {
    id: 1,
    type: 'dot',
    text: 'ánh mắt kẻ si tình',
  },
  {
    id: 2,
    type: 'arrow',
    text: 'titanic behind the scenes',
  },
  {
    id: 3,
    type: 'trend',
    text: 'Anh Vẽ Cầu Vòng Thì Lại Thiếu Nắng Trend',
  },
  {
    id: 4,
    type: 'trend',
    text: 'OMG',
  },
];

export const searchApi = {
  getRecentSearches() {
    return new Promise(resolve => {
      setTimeout(() => resolve([...recentSearches]), 300);
    });
  },

  deleteRecentSearch(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      recentSearches = recentSearches.filter(i => i.id !== id);
      resolve({ success: true });
    }, 300);
  });
},

  getYouMayLike() {
    return new Promise(resolve => {
      setTimeout(() => resolve([...youMayLike]), 300);
    });
  },
};