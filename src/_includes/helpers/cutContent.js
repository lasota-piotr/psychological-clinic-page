module.exports = function cutContent(content) {
  
  
  return cutUnfinishedSentence(content.slice(0, 480));
}

function cutUnfinishedSentence(text) {
  function cutTextFromLastDot(text) {
    const indexOfLastDot = text.lastIndexOf('.');
    return text.slice(0, indexOfLastDot + 1);
  }

  function cutAbbreviationOnEnd(text) {
    const abberviations = ['m.in.', 'np.'];
    for (let i = 0; i < abberviations.length; i++) {
      if (text.endsWith(abberviations[i])) {
        return text.slice(0, text.lastIndexOf(abberviations[i]));
      }
    }
  }

  const textWithDotAtEnd = cutTextFromLastDot(text);
  const textWithCuttedOberviation = cutAbbreviationOnEnd(textWithDotAtEnd);
  if (textWithCuttedOberviation) {
    return cutUnfinishedSentence(textWithCuttedOberviation); // recursion
  } else {
    // At the end of text we have finished sentence
    return textWithDotAtEnd;
  }
}