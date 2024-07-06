class Grocery {
    name: string;
    quantity: number;
    category: string;

    constructor(name: string, quantity: number, category: string) {
        this.name = name;
        this.quantity = quantity;
        this.category = category;
    }
}

const groceries: Grocery[] = [
    new Grocery('Milk', 13, 'Dairy'),
    new Grocery('Bread', 61, 'Bakery'),
    new Grocery('Eggs', 1, 'Dairy'),
    new Grocery('Apples', 15, 'Fruit'),
    new Grocery('Chicken', 21, 'Meat')
];

function generateGroceryHTML(groceries: Grocery[]): string {
    let html = '<h1>Grocery List</h1>';
    html += '<ul>';
    groceries.forEach(grocery => {
        html += `<li>${grocery.name} - ${grocery.quantity} (${grocery.category})</li>`;
    });
    html += '</ul>';
    return html;
}

// Log the generated HTML to the console for debugging
const groceriesHTML = generateGroceryHTML(groceries);
console.log(groceriesHTML);

// Export the necessary components for use in other files
export { groceries, generateGroceryHTML };
