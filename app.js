var url =
  'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=rravi';

fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data));
