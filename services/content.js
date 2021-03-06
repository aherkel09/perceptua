app.factory('content', ['$rootScope', '$q', function($rootScope, $q) {
  return {

    // convert slug to title
    makeString: function(string) {
      return string.replace(/-/g, ' ');
    },

    // query firestore collection for requested content
    getContent: function(form, filter, orderBy) {
      return $q((resolve, reject) => {
        var docs = firebase.firestore().collection('content').where('form', '==', form);

        if (filter) {
          docs = docs.where(filter.field, '==', filter.value);
        }
        if (orderBy) {
          docs = docs.orderBy(orderBy.field, orderBy.order);
        }

        // construct object from firestore data
        docs.get().then((docs) => {
          var content = [];
          var media = ['all'];
          docs.forEach((doc) => {
            var data = doc.data();
            content.push(data);
            if (!media.includes(data.medium)) {
              media.push(data.medium);
            }
          });

          var randomIndex = Math.floor(Math.random() * content.length);

          resolve({
            content: content,
            media: media,
            random: content[randomIndex],
          });
        });
      });
    },
  };
}]);
