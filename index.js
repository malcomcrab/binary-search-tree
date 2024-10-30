
// Class to build each node, left and right to be filled with next node.
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
            //Returns if node is a leaf
            if(node == null){
                return; 
            } else {
               
            //if correct node found, node is added to answer array
            if (node.data == value)
                ans = node
        
            /* If current node does not contain value the 
            traversal function is run on the left subtree*/
            inorderTraversal(node.left);
        
        
            /* also if th current node does not contain value the 
            traversal function is run on the left subtree*/
            inorderTraversal(node.right);
             
            }
                
            }
        //Initial taversal fuction call    
        inorderTraversal(node)
        return ans
    }
    insert(root, newValue){
        // If root is empty(a leaf), a new node is added with the value
        if (root === null)
            return new Node(newValue);
        // If root value is a duplicate, function is returned
        if (root.data === newValue)
            return root

            /*if the new value is greater than the root the insert function
            is called on the left*/
            if(root.data > newValue)
                root.left = this.insert(root.left, newValue)
            /* if the value is greater than the root value, insert function 
            is called on the right */
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
    inOrder(){
        let node = this.root   // Base case
        if (node == null)
            return;

        function inorderTraversal(node){
            if (node == null)
                
                return;
            
                
            /* If current node does not contain value the 
            traversal function is run on the left subtree*/
            inorderTraversal(node.left);

            
            // Visit the current node
            console.log(node);
            /* also if th current node does not contain value the 
            traversal function is run on the left subtree*/
            inorderTraversal(node.right);
             
            }
                
            inorderTraversal(node)  

    }
            preOrder(){
            let node = this.root   // Base case
            if (node == null)
                return;
    
            function inorderTraversal(node){
                if (node == null)
                    
                    return;
                
                  // Visit the current node
                console.log(node);  
                /* If current node does not contain value the 
                traversal function is run on the left subtree*/
                inorderTraversal(node.left);
    
                
                
                /* also if th current node does not contain value the 
                traversal function is run on the left subtree*/
                inorderTraversal(node.right);
                 
                }
                    
                inorderTraversal(node)  
    
    }
    postOrder(){
        let node = this.root   // Base case
        if (node == null)
            return;

        function inorderTraversal(node){
            if (node == null)
                
                return;
            
          
            /* If current node does not contain value the 
            traversal function is run on the left subtree*/
            inorderTraversal(node.left);

            
            
            /* also if th current node does not contain value the 
            traversal function is run on the left subtree*/
            inorderTraversal(node.right);
             
            // Visit the current node
            console.log(node);  
            }
                
            inorderTraversal(node)  

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
  
const arr = [4,2,1,5,3];
//[1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]
unique = ([...new Set(arr)])
let checkedArray = unique.sort((a,b) => a-b)
const root = sortedArrayToBST(checkedArray);
const tree = new Tree(root)

function consoleIt(item){
    console.log(item)
}

  
  console.log(tree.find(7))
  prettyPrint(root)
  //tree.inOrder()
  //tree.preOrder()
  tree.postOrder()
  //prettyPrint(root)
  //tree.levelOrder(consoleIt)
  //tree.levelOrder()