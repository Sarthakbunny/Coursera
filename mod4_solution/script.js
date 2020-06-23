(function(){
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
      //console.log(names[i].charAt(0));
      if (names[i].charAt(0) == 'j' || names[i].charAt(0) == 'J') {
        byspeaker.speak(names[i]);
      }
      else {
        hellospeaker.speak(names[i]);
      }
    }
})();