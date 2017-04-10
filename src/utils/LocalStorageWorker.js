export function getUserEntries() {
  return JSON.parse(localStorage.getItem('user_entries')) || [];
}

export function saveToLocalStorage (inputString) {
  let enteredItems = getUserEntries();
  let updatedItems = enteredItems;
  if (enteredItems.length === 10) {
    updatedItems = enteredItems.slice(0, 9);
  }
  updatedItems.unshift(inputString);
  storeUserEntries(updatedItems);
  return updatedItems;
}

function storeUserEntries(updatedItems) {
  localStorage.setItem('user_entries',JSON.stringify(updatedItems));
}