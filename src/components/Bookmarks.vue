<template>
  <section class="bookmarks__section">
    <button class="bookmarks__button" @click="$router.push(`/new`)">Создать закладку</button>
    <ul class="bookmarks__list">
      <li class="bookmarks__item" v-for="bookmark in bookmarks" :key="bookmark.id">
        <a class="bookmarks__link" target="_blank" :href="`https://${bookmark.address}`">name: {{ bookmark.name }} url: {{ bookmark.address }}</a>
        <buttons :bookmark="bookmark"></buttons>
      </li>
    </ul>
  </section>
</template>

<script>
import SaveBookmark from './SaveBookmark';
import Buttons from './Buttons';

export default {
  name: 'Bookmarks',
  data() {
    return {
      editedBookmarkId: '',
      bookmarks: this.$store.getters.bookmarks,
    };
  },
  components: {
    SaveBookmark, Buttons,
  },
  methods: {
    deleteBookmark(id) {
      this.$store.dispatch('deleteBookmark', id);
    },
    copyToClipboard(text) {
      navigator.clipboard.writeText(text);
    },
    currentBookmark(id) {
      return this.$store.getters.getBookmark(id);
    },
    editBookmark(id) {
      this.editedBookmarkId = id;
    },
  },
};
</script>

<style lang="scss">
  body {
    background-color: rgb(245, 245, 245)
  }

  .bookmarks {

    &__section {
      width: 70%;
      margin: 0 auto;
      padding: 5%;
      border-radius: 10px;
      background-color: white;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
    &__list {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    &__item {
      position: relative;
    }
    &__link {
      display: block;
      text-decoration: none;
      color: black;
      width: 100%;
      line-height: 36px;
      margin-bottom: 15px;
      padding: 5px;
      background-color: white;
      border-radius: 2px;
      border-width: 0;
      outline: none;
      box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
    }
    &__buttons {
      position: absolute;
      right: 0;
      top: 13%;
      z-index: 1;
      display: flex;
      flex-direction: column;
      background-color: white;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: 0.3s;
      border-radius: 2px;

      &--hide {
        display: none;
        transition: 0.3s;
      }
    }
    &__button {
      cursor: pointer;
      padding: 9px;
      background-color: white;
      border-radius: 2px;
      border-width: 0;
      outline: none;
      text-align: left;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12);
      margin: 10px 0;

      &--menu {
        box-shadow: none;
        margin: 0;
        width: 100%;
      }

    }
    &__edit {
      position: fixed;
      padding: 30px;
      width: 40%;
      border-radius: 10px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      top: 10%;
      background-color: white;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    }
  }
</style>
