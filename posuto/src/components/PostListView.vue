<template>
  <section class="grid-stack">
    <div
      v-for="(list, i) in lists"
      :key="i"
      class="grid-stack-item"
      @mouseover="onMouseOver(i)"
      @mouseleave="onMouseLeave(i)"
    >
      <div class="grid-stack-item-content">
        <div class="post__header">
          <h1>{{ list.title }}</h1>
          <div ref="btnGroup" class="post__btnGroup hidden" :data-id="i">
            <i class="far fa-edit"></i>
            <i class="far fa-trash-alt"></i>
          </div>
        </div>
        <hr />
        <span>{{ list.content }}</span>
      </div>
    </div>

    <button @click="addNewWidget">asdfadsasdfasdfasdfasdfasdfasdfasdf</button>
  </section>
</template>

<script>
import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
import resize from 'vue-resize-directive';
import 'gridstack/dist/h5/gridstack-dd-native';

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
      grid: undefined,
      count: 0,
    };
  },
  mounted() {
    this.grid = GridStack.init({
      float: true,
      cellHeight: '50px',
      minRow: 13,
      resizable: {
        handles: 'e,se,s,sw,w',
      },
      alwaysShowResizeHandle:
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        ),
    });
    this.grid.on('dragstop', (event, element) => {
      const node = element.gridstackNode;
      // `this` will only access your Vue instance if you used an arrow function, otherwise `this` binds to window scope. see https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/
      this.info = `you just dragged node #${node.id} to ${node.x},${node.y} – good job!`;
    });
  },
  components: {
    // Draggable,
  },
  directives: {
    resize,
  },
  methods: {
    onMouseOver(i) {
      this.$refs.btnGroup[i].classList.remove('hidden');
    },
    onMouseLeave(i) {
      this.$refs.btnGroup[i].classList.add('hidden');
    },
    addNewWidget() {
      const node = {
        x: Math.round(12 * Math.random()),
        y: Math.round(5 * Math.random()),
        w: Math.round(1 + 3 * Math.random()),
        h: Math.round(1 + 3 * Math.random()),
      };
      node.id = node.content = String(this.count++);
      this.grid.addWidget(node);
    },
  },
};
</script>

<style>
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
  /* -webkit-user-drag: none; */
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
.grid-stack {
  background: #f5f5f6;
}

.grid-stack-item-content {
  background: pink;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.4);
  overflow: auto;
  overflow-wrap: break-word;
}
.grid-stack-item-removing {
  opacity: 0.5;
}
</style>
