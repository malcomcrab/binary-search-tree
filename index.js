

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
    insert(root, newValue){

        if (root === null)
            return new Node(newValue);
        
        if (root.data === newValue)
            return root

            if(root.data > newValue)
                root.left = this.insert(root.left, newValue)
            else if(root.data < newValue)
                root.right = this.insert(root.right, newValue)
            
            return root;
      
    }
    getSuccessor(curr) {
        curr = curr.right;
        while (curr !== null && curr.left !== null) {
            curr = curr.left;
        }
        return curr;
    }
    delete(root, value){

        if (root === null){
            return root
        }

        if (root.data > value){
            root.left = this.delete(root.left, value)
        } else if (root.data < value) {
            root.right = this.delete(root.right, value)
        } else {
        
        if(root.left === null)
        return root.right
        
        if(root.right === null)
            return root.left

        let successor = this.getSuccessor(root);
        root.data = successor.value;
        root.right = this.delete(root.right, successor.value)
        }
        return root
    }
    levelOrder(callBack){
        if(this.root === null)
            return;
        if(typeof callBack === 'undefined'){
            throw Error('No Callback Function Included')
            
        }

        let queueArray = []
        queueArray.push(this.root)

        while(queueArray.length > 0){
           let currentNode = queueArray.pop()
            callBack(currentNode)
            if(currentNode.left != null)
                queueArray.push(currentNode.left)
            if(currentNode.right != null)
                queueArray.push(currentNode.right)
        }
        return root
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
  
const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
//[1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]
unique = ([...new Set(arr)])
let checkedArray = unique.sort((a,b) => a-b)
const root = sortedArrayToBST(checkedArray);
const tree = new Tree(root)

function consoleIt(item){
    console.log(item)
}
  prettyPrint(root)
  console.log(tree.find(7))
  tree.insert(root,6)
  prettyPrint(root)
  prettyPrint(root)
  tree.levelOrder(consoleIt)
  tree.levelOrder()