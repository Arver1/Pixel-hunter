export const LEFT_ARROW_KEYCODE = 37;
export const RIGHT_ARROW_KEYCODE = 39;

export const getElementFromTemplate = (template) => {
  const container = document.createElement('template');
  container.innerHTML = template;
  return container;
};
