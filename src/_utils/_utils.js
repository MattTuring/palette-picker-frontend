export const getRandomColor = () => {
  let number = '#'+Math.floor(Math.random()*16777215).toString(16);
  if (number.length < 7) number = '#ffffff';
  if (number.length > 7) number = '#000000';
  return number;
}
