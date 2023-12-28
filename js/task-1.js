const categories = document.querySelector('#categories')

console.log(`Number of categories: ${categories.children.length}`)

const listItems = Array.from(categories.children)
let categoriesCount = 0
listItems.forEach((child) => {
    if (child.classList.contains('item')) {
        const title = child.querySelector('h2')
        console.log(`Category: ${title.textContent}`)
        const list = child.querySelector('ul')
        console.log(`Elements: ${list.children.length}`)
        categoriesCount++
    }
})
