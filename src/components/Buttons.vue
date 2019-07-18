<template>
  <div>
    <div
      class="bookmarks__buttons"
      :class="{'bookmarks__buttons--hide': !isShow}"
    >
      <button
        class="bookmarks__button bookmarks__button--menu"
        @click="editBookmark(bookmark.id)"
      >Редактировать закладку</button>
      <button
        class="bookmarks__button bookmarks__button--menu"
        @click="deleteBookmark(bookmark.id)"
      >Удалить закладку</button>
      <button
        class="bookmarks__button bookmarks__button--menu"
        @click="copyToClipboard(bookmark.address)"
      >Скопировать URL</button>
    </div>
    <button
      class="buttons-show"
      @click="isShow = !isShow"
    >Меню</button>
    <save-bookmark
      @bookmarkEdited=" isEdit = false"
      v-if="isEdit"
      class="bookmarks__edit"
      :isEditBookmark="true"
      :bookmark="currentBookmark(bookmark.id)"
    />
  </div>
</template>

<script>
import SaveBookmark from './SaveBookmark';

export default {
  name: 'Buttons',
  props: ['bookmark'],
  components: {
    SaveBookmark,
  },
  data() {
    return {
      isShow: false,
      isEdit: false,
    };
  },
  methods: {
    deleteBookmark(id) {
      this.$store.dispatch('deleteBookmark', id);
      this.isShow = false;
    },
    copyToClipboard(text) {
      navigator.clipboard.writeText(text);
      this.isShow = false;
    },
    currentBookmark(id) {
      return this.$store.getters.getBookmark(id);
    },
    editBookmark(id) {
      this.isEdit = true;
      this.isShow = false;
      this.editedBookmarkId = id;
    },
  },
};
</script>

<style>
.buttons-show {
  position: absolute;
  right: 0;
  top: 13px;
  border: none;
  background: none;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12)
}
</style>
