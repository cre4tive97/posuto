<template>
  <section class="grid-stack">
    <div
      v-for="(list, i) in lists"
      :key="i"
      class="grid-stack-item"
      @mouseover="onMouseOver(i)"
      @mouseleave="onMouseLeave(i)"
      :gs-w="`${list.width}`"
      :gs-h="`${list.height}`"
      gs-min-w="3"
      gs-min-h="5"
    >
      <div class="grid-stack-item-content">
        <div class="post__header">
          <h1>{{ list.title }}</h1>
          <div ref="btnGroup" class="post__btnGroup hidden">
            <i class="far fa-edit"></i>
            <i class="far fa-trash-alt"></i>
          </div>
        </div>
        <hr />
        <span>{{ list.content }}</span>
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
      lists: [
        { title: 'a', content: 'adsfadf', width: 4, height: 6 },
        {
          title: 'b',
          content:
            'adsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadfadsfadf',
          width: 4,
          height: 6,
        },
        { title: 'c', content: 'adsfadf', width: 4, height: 6 },
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
        w: 4,
        h: 6,
      };
      this.grid.addWidget(node);
    },
  },
};
</script>

<style>
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
  border-top-right-radius: 1rem;
  padding: 12px;
  -webkit-box-shadow: 0px 9px 24px 3px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 9px 24px 3px rgba(0, 0, 0, 0.15);
  overflow: auto;
  overflow-wrap: break-word;
}
.grid-stack-item-removing {
  opacity: 0.5;
}
</style>
