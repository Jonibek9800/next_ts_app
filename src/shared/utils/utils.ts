export const getFromStoreg = (itemName: string) => {
  const strItem = localStorage.getItem(itemName) || "";
  if (strItem) {
    return JSON.parse(strItem);
  }
};

export const setFromStorage = (itemName: string, item: any) => {
  localStorage.setItem(itemName, JSON.stringify(item));
};
