<h1 align="middle"> Data Structures - Doubly Linked List </h1>

## Instructions
You have to implement your own **Doubly Linked List**, you have to define every method listed bellow.

## Methods
```js
class DoublyLinkedList<T> {
  // Adds a new element in the list
  append(element: T): void

  // Removes an element from the given position and returns it
  removeAt(position: number): T

  // Remove the given elements from the list
  delete(element: T): void

  // Remove the first element from the list
  deleteHead(): void

  // Remove the last element from the list
  deleteTail(): void
  
  // Adds a new elements at the given position
  insert(position: number, element: T): void

  // Returns the list size
  size(): number

  // Returns true if the list is empty, otherwise return false
  isEmpty(): boolean
}
```
