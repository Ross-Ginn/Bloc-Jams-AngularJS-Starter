(function() {
     function CollectionCtrl() {
       this.album = Fixtures.getCollection(12);
     }

     angular
         .module('blocJams')
         .controller('CollectionCtrl', CollectionCtrl);
 })();
