// BFS - Searches tree horizontally
// DFS - Searches tree vertically

// BFS - Uses Queue
var BFS = function (root) {
  if (root === null) return 0;
  if (!root.left && !root.right) return 1;
  let count = 1;
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let size = queue.length;
    while (size-- > 0) {
      let node = queue.shift();
      if (!node.left && !node.right) return count;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    count++;
  }
};

var minDepth = function (root) {
  if (root === null) return 0;
  if (!root.left && !root.right) return 1;
  let count = 1;
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let size = queue.length;
    while (size-- > 0) {
      let node = queue.shift();
      if (!node.left && !node.right) return count;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    count++;
  }
};

//// DFS InOrder - PRIMARY - Traverses tree in ordered manner (1, 3, 5, 9 ...). Uses recursion
function DFS() {
  let visited = [];
  let current = this.root;
  function traversal(node) {
    if (!node) return;
    // 1. Check entire left side
    if (node.left) traversal(node.left);
    // 2. Visit Node (order is signifigant)
    visited.push(node);
    // 3. Check entire right side
    if (node.right) traversal(node.right);
  }
  traversal(current);
  return visited;
}
//// DFS PreOrder - Used for cloning a tree
//// DFS PostOrder - Used to delete a tree
