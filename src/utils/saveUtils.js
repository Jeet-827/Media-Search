export const getSavedItems = () => {
  return JSON.parse(localStorage.getItem("saved")) || []
}

export const saveItem = (item) => {
  const saved = getSavedItems()
  const exists = saved.find(i => i.id === item.id && i.type === item.type)

  if (!exists) {
    localStorage.setItem("saved", JSON.stringify([...saved, item]))
  }
}

export const removeItem = (id) => {
  const saved = getSavedItems().filter(item => item.id !== id)
  localStorage.setItem("saved", JSON.stringify(saved))
}
