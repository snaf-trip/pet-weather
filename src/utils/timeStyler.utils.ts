export const timeStyler = () => {
  let date = new Date();
  let time = date.getHours();

  if (time >= 6 && time <= 11) {
    return { backgroundColor: '#ff9415' }
  } else if (time > 11 && time < 19) {
    return { backgroundColor: '#158fff' }
  } else if (time >= 19 && time < 22) {
    return { backgroundColor: '#a80a2d' }
  } else {
    return { backgroundColor: '#09090e' }
  }
}
