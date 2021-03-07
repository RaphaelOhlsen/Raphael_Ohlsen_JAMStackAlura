export function lowerCase(ev) {
  const { value } = ev.target;
  // eslint-disable-next-line no-param-reassign
  ev.target.value = value.toLowerCase();
}
