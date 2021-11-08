<template>
  <section class="grid-stack">
    <div
      v-for="(postItem, i) in postItems"
      :key="i"
      class="grid-stack-item"
      @mouseover="onMouseOver(i)"
      @mouseleave="onMouseLeave(i)"
      :gs-w="`${postItem.position[0].width}`"
      :gs-h="`${postItem.position[0].height}`"
      :gs-x="`${postItem.position[0].x}`"
      :gs-y="`${postItem.position[0].y}`"
      gs-min-w="3"
      gs-min-h="5"
    >
      <div class="grid-stack-item-content">
        <div class="post__header">
          <form v-if="postItem.isEditing" class="post__form">
            <input
              class="post__input"
              type="text"
              :value="postItem.title"
              @input="$emit('update:postItemTitle', $event.target.value)"
            />
          </form>
          <h1 v-else ref="title">{{ postItem.title }}</h1>
          <div ref="btnGroup" class="post__btnGroup hidden">
            <i
              v-if="postItem.isEditing"
              @click="postItem.isEditing = false"
              class="fas fa-edit"
            ></i>
            <i
              v-else
              @click="postItem.isEditing = true"
              class="far fa-edit"
            ></i>
            <i class="far fa-trash-alt"></i>
          </div>
        </div>
        <hr />
        <div class="content">
          <form v-if="postItem.isEditing" class="post__form">
            <textarea
              class="post__textarea"
              style="height: 100%"
              :value="postItem.contents"
              @input="$emit('update:postItemContents', $event.target.value)"
            ></textarea>
          </form>
          <span v-else class="post__content"> {{ postItem.contents }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
import 'gridstack/dist/h5/gridstack-dd-native';

export default {
  data() {
    return {
      width: 0,
      height: 0,
      grid: undefined,
      count: 0,
    };
  },
  props: {
    postItems: Array,
    loadingStatus: Boolean,
  },
  updated() {
    this.setGrid();
  },
  methods: {
    onMouseOver(i) {
      this.$refs.btnGroup[i].classList.remove('hidden');
    },
    onMouseLeave(i) {
      this.$refs.btnGroup[i].classList.add('hidden');
    },
    setGrid() {
      this.grid = GridStack.init({
        float: true,
        cellHeight: '50px',
        minRow: 13,
        resizable: {
          handles: 'e,se,s,w',
        },
        alwaysShowResizeHandle:
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent,
          ),
      });
    },
  },
};
</script>

<style scoped>
.grid-stack {
  background: #f5f5f6;
}
.post__header h1 {
  font-size: 1.25rem;
  font-weight: 400;
}
.grid-stack-item-content span {
  font-size: 1rem;
  font-weight: 400;
}
.post__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.post__btnGroup {
  display: flex;
}
.post__btnGroup i {
  margin-left: 6px;
}
.post__btnGroup i:hover {
  cursor: pointer;
}

.grid-stack-item-content {
  background: pink;
  border-top-right-radius: 1rem;
  padding: 12px;
  -webkit-box-shadow: 0px 9px 24px 3px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 9px 24px 3px rgba(0, 0, 0, 0.15);
  overflow: auto;
  overflow-wrap: break-word;
}
.grid-stack-item-content:hover {
  cursor: grab;
}
.grid-stack-item-removing {
  opacity: 0.5;
}
.content {
  height: 80%;
}
.post__input {
  font-size: 1.2rem;
  font-weight: 400;
}

.post__textarea:active,
.post__textarea:focus,
.post__input:focus,
.post__input:active {
  outline: none;
  cursor: text;
}

.hidden {
  display: none;
}
.post__form {
  height: 80%;
}
.post__textarea {
  height: 100%;
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Roboto';
  overflow: visible;
  width: 100%;
}
</style>
