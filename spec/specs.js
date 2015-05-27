describe('pigLatin', function() {
  it('for words that start with a vowel, adds -ay to the end of the word', function() {
    expect(pigLatin('ask')).to.equal('askay');
  });

  it('for words that start with a consonant, move all the first consecutive consonants to the end, adds -ay', function() {
    expect(pigLatin('translate')).to.equal('anslatetray');
  });

  it('will translate words in sentences to piglatin', function() {
    expect(pigLatin('today is wednesday')).to.equal('odaytay isay ednesdayway');
  });

});
