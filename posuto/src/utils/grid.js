import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
import 'gridstack/dist/h5/gridstack-dd-native';

export function setGrid(grid) {
  grid = GridStack.init({
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
  grid.on('change', (event, items) => {
    let currentPositionValue = [];
    items.forEach(item => {
      console.log(item.el.getAttribute('gs-x'));
    });
  });
}
