var tree = {
    value: "-",
    left: {
        value: '+',
        left: {
            value: 'a',
        },
        right: {
            value: '*',
            left: {
                value: 'b',
            },
            right: {
                value: 'c',
            }
        }
    },
    right: {
        value: '/',
        left: {
            value: 'd',
        },
        right: {
            value: 'e',
        }
    }
}

function preOrder(tree) {
    if (!tree) {
        return;
    }
    console.log(tree.value);
    if (tree.left) {
        preOrder(tree.left);
    }
    if (tree.right) {
        preOrder(tree.right);
    }
}
preOrder(tree);