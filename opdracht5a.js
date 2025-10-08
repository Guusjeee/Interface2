function rekenUit(getal1, getal2, callback) {
  const som = getal1 + getal2;
  callback(som);
}

rekenUit(4, 3, function(resultaat) {
  console.log(resultaat * 2);
});
