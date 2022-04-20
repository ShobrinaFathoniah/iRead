export const getTimeNow = time => {
  if (time >= 0 && time <= 10) {
    return 'Selamat Pagi!';
  } else if (time > 10 && time <= 14) {
    return 'Selamat Siang!';
  } else if (time > 14 && time <= 18) {
    return 'Selamat Sore!';
  } else if (time > 18 && time <= 23) {
    return 'Selamat Malam!';
  } else {
    return 'Selamat Datang!';
  }
};
