//Remove any extra words after dashes from show titles
export const removeExtraWordsFromShowName = (data) => {
  data.forEach((el) => {
    if (el.name.includes('-') && el.name.length > 20) {
      const newWord = el.name.substring(el.name.indexOf('-'), -1);
      el.name = newWord;
    }
  });
};
