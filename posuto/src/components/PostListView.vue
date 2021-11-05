<template>
  <Draggable>
    <transition-group class="post__ul">
      <div
        v-for="(list, i) in lists"
        :key="i"
        v-resize:debounce="onResize"
        class="post__item"
        @mouseover="onMouseOver"
      >
        <div class="post__header">
          <h1>{{ list.title }}</h1>
          <div v-if="hoverState" class="post__btnGroup">
            <i class="far fa-edit"></i>
            <i class="far fa-trash-alt"></i>
          </div>
        </div>
        <hr />
        {{ list.content }}
      </div>
    </transition-group>
  </Draggable>
</template>

<script>
import Draggable from 'vuedraggable';
import resize from 'vue-resize-directive';
export default {
  data() {
    return {
      lists: [
        { title: 'a', content: 'adsfadf' },
        {
          title: 'b',
          content:
            'adsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadf',
        },
        { title: 'c', content: 'adsfadf' },
      ],
      width: 0,
      height: 0,
      hoverState: false,
    };
  },
  components: {
    Draggable,
  },
  directives: {
    resize,
  },
  methods: {
    onResize(e) {
      console.log(e.style.width);
      console.log(e.style.height);
    },
    onMouseOver() {
      this.hoverState = true;
    },
    onMouseLeave() {
      this.hoverState = false;
    },
  },
};
</script>

<style>
.post__ul {
  display: flex;
  flex-wrap: wrap;
}

.post__item {
  padding: 5px;
  width: 300px;
  height: 300px;
  min-width: 200px;
  min-height: 100px;
  background-color: pink;
  margin: 8px;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.4);
  overflow: auto;
  overflow-wrap: break-word;
  resize: both;
}
.post__item h1 {
  font-size: 1.25rem;
  font-weight: 400;
}
.post__item p {
  font-size: 1rem;
  font-weight: 400;
}
.post__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.post__btnGroup i {
  margin-left: 6px;
}
.post__btnGroup i:hover {
  cursor: pointer;
}
</style>
