const yearBirthday = +prompt('Вітаю! Напишіть, будь ласка, рік Вашого народження:');

if (isNaN(yearBirthday)) {
  alert('От халепа! Рік народження потрібно вводити цифрами. Спробуйте ще раз!')
} else if (!yearBirthday) {
  alert('Шкода, що Ви не захотіли ввести свій рік народження')
}else if (yearBirthday < 1923 || yearBirthday > 2022) {
  alert('Наврядчи це ваш реальний рік народження) Спробуйте ще раз!')
}else {
  const city = prompt('Тепер напишіть, будь ласка, місто в якому ви живете:');
  if (!city) {
    alert('Шкода, що Ви не захотіли ввести місто в якому живете')
  } else {
    const favoriteSport = prompt('І також виберіть із цих трьох видів спорту свій улюблений: шахи, футбол або баскетбол').toLowerCase();
    if (!favoriteSport) {
      alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту')
    } else {
      const age = 2024 - yearBirthday;
      let country;
      switch (city) {
        case 'Київ':
          country = 'столиці України'
          break;
        case 'Вашингтон':
          country = 'столиці Сполучених Штатів Америки'
          break;
        case 'Лондон':
          country = 'столиці Великобританії'
          break;
        default:
          country = city;
          break;
      }
      let sportsman;
      switch (favoriteSport) {
        case 'баскетбол':
          sportsman = 'Круто! Хочеш стати Майклом Джорданом?🏀🏀🏀'
          break;
        case 'футбол':
          sportsman = 'Круто! Хочеш стати Ліонелем Мессі?⚽⚽⚽'
          break;
        case 'шахи':
          sportsman = 'Круто! Хочеш стати Майком Тайсоном?🤣🤣🤣'
          break;
        default:
          sportsman = 'Cхоже спорт це не твоє)😏😏😏';
          break;
      }
      alert(`Тобі ${age} років, ти живеш у ${country}. ${sportsman}`)
    }
  }
}
