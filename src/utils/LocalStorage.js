export function getUserEntries() {
  return JSON.parse(localStorage.getItem('user_entries')) || [];
}

function storeUserEntries(updatedItems) {
  localStorage.setItem('user_entries', JSON.stringify(updatedItems));
}

export function saveToLocalStorage(enteredItem) {
  const enteredItems = getUserEntries();
  const updatedItems = enteredItems.length === 10 ? enteredItems.slice(0, 9) : enteredItems;
  updatedItems.unshift(enteredItem);
  storeUserEntries(updatedItems);
  return updatedItems;
}
