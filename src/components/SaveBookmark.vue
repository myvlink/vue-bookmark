<template>
  <div>
    <form class="bookmark__form" @submit.prevent="saveBookmark">
      <input class="bookmark__input" type="text" id="name" v-model="name" required>
      <label class="bookmark__label" for="name">Введите название закладки</label>
      <input class="bookmark__input" type="text" id="address" v-model="address" required>
      <label class="bookmark__label" for="address">Введите адрес закладки</label>
      <div>
        <button class="bookmark__button" type="submit">Сохранить</button>
        <button class="bookmark__button" @click="cancelEditBookmark">Не сохранять</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SaveBookmark',
  props: ['isEditBookmark', 'bookmark'],
  data() {
    return {
      name: '',
      address: '',
      id: Math.random().toString(36).substr(2, 9),
    };
  },
  created() {
    if (this.bookmark) {
      this.name = this.bookmark.name;
      this.address = this.bookmark.address;
      this.id = this.bookmark.id;
    }
  },
  methods: {
    saveBookmark() {
      const bookmark = {
        name: this.name,
        address: this.address,
        id: this.id,
      };
      if (this.isEditBookmark) {
        this.$store.dispatch('editBookmark', bookmark);
        this.$emit('bookmarkEdited');
        return;
      }
      this.$store.dispatch('createBookmark', bookmark);
      this.$router.push('/');
    },
    cancelEditBookmark() {
      this.$router.push('/');
      if (this.isEditBookmark) {
        this.$emit('bookmarkEdited');
      }
    },
  },
};
</script>

<style lang="scss">
.bookmark {
  &__form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 300px;
  }

  &__input {
    margin-bottom: 10px;
  }

  &__label {
    margin-bottom: 10px;
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
  }
}
</style>
