

class Node {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null

    }
}

class Tree {
    constructor(root){
        this.root = root
    }
    find(value){
        let node = this.root
        let ans = []
        function inorderTraversal(node){
            if(node == null ){
                return; 
            } else {
               // Base case
            if (node.data == value)
                ans = node
        
            // Recur on the left subtree
            inorderTraversal(node.left);
        
        
            // Recur on the right subtree
            inorderTraversal(node.right);
             
            }
                
            }
        inorderTraversal(node)
        return ans
    }
    
}

// Recursive function to construct BST
function sortedArrayToBSTRecur(arr, start, end) {
    if (start > end) return null;

    // Find the middle element
    let mid = start + Math.floor((end - start) / 2);

    // Create root node
    let root = new Node(arr[mid]);

    // Create left subtree
    root.left = sortedArrayToBSTRecur(arr, start, mid - 1);

    // Create right subtree
    root.right = sortedArrayToBSTRecur(arr, mid + 1, end);

    return root;
}

function sortedArrayToBST(arr) {
    return sortedArrayToBSTRecur(arr, 0, arr.length - 1);
}


const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
//[1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]
unique = ([...new Set(arr)])
let checkedArray = unique.sort((a,b) => a-b)
const root = sortedArrayToBST(checkedArray);
const tree = new Tree(root)


const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
  
  prettyPrint(root)
  console.log(tree.find(7))