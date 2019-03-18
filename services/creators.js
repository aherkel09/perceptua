app.factory('creators', [function() {
  var all = firebase.firestore().collection('creators').get().then(function(docs) {
    var creators = {};
    docs.forEach(function(doc) {
      creators[doc.id] = doc.data();
    });
    return creators;
  });
  
  console.log(all);
  return all;
}]);
