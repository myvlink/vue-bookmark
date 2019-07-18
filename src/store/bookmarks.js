export default {
  state: {
    bookmarks: JSON.parse(localStorage.getItem('bookmarks') || '[]'),
    id: '',
  },
  mutations: {
    createBookmark(state, payload) {
      state.bookmarks.unshift(payload);
      localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
    },
    editBookmark(state, payload) {
      const bookmark = state.bookmarks.find(a => a.id === payload.id);
      bookmark.name = payload.name;
      bookmark.address = payload.address;
      localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
    },
    deleteBookmark(state, id) {
      state.bookmarks.forEach((element, index) => {
        if (element.id === id) {
          state.bookmarks.splice(index, 1);
        }
      });
      localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
    },
  },
  actions: {
    createBookmark({ commit }, payload) {
      commit('createBookmark', payload);
    },
    editBookmark({ commit }, payload) {
      commit('editBookmark', payload);
    },
    deleteBookmark({ commit }, payload) {
      commit('deleteBookmark', payload);
    },
  },
  getters: {
    bookmarks(state) {
      return state.bookmarks;
    },
    getBookmark(state) {
      return bookmarkId => state.bookmarks.find(bookmark => bookmark.id === bookmarkId);
    },
  },
};
