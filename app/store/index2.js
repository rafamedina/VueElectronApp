import { EventEmitter } from 'events'
import Firebase from 'firebase'

// Initialize Firebase


let db = app.database()
let categoriesRef = db.ref('categories')
let bookmarksRef = db.ref('bookmarks')
let productsRef = db.ref('products')
let store = new EventEmitter()

let categories = {}
let bookmarks = {}
let products = {}

categoriesRef.on('value', (snapshot) => {
  categories = snapshot.val()
  store.emit('data-updated', products)
})

bookmarksRef.on('value', (snapshot) => {
  bookmarks = snapshot.val()
  store.emit('data-updated', categories, bookmarks, products)
})

productsRef.on('value', (snapshot) => {
  products = snapshot.val()
  store.emit('data-updated', categories, bookmarks, products)
})

store.addCategory = (category) => {
  categoriesRef.update(category)
}

store.deleteCategory = (catName) => {
  // first check if an 'Uncategorized' category exists, if not, create it
  if (!('Uncategorized' in categories)) {
    categoriesRef.update({'Uncategorized': 'white'})
  }

  for (var key in bookmarks) {
    if (bookmarks[key].category === catName) {
      bookmarksRef.child(key).update({category: 'Uncategorized'})
    }
  }
  categoriesRef.child(catName).remove()
}

store.addBookmark = (bookmark) => {
  bookmarksRef.push(bookmark)
}

store.deleteBookmark = (bookmarkId) => {
  bookmarksRef.child(bookmarkId).remove()
}

store.addProduct = (product) => {
  return productsRef.push(product)
}

export default store