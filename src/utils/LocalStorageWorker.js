export function getUserEntries() {
  return JSON.parse(localStorage.getItem('user_entries')) || [];
}

export function saveToLocalStorage (enteredItem) {
  let enteredItems = getUserEntries();
  let updatedItems = enteredItems.length === 10 ? enteredItems.slice(0, 9) : enteredItems;
  updatedItems.unshift(enteredItem);
  storeUserEntries(updatedItems);
  return updatedItems;
}

function storeUserEntries(updatedItems) {
  localStorage.setItem('user_entries',JSON.stringify(updatedItems));
}