alert("Is this working?");
  var reader = new FileReader("TestMP3.mp3");

  reader.onload = function(e) {
    var dv = new jDataView(this.result);

    // "TAG" starts at byte -128 from EOF.
    // See http://en.wikipedia.org/wiki/ID3
    if (dv.getString(3, dv.byteLength - 128) == 'TAG') {
      var title = dv.getString(30, dv.tell());
      var artist = dv.getString(30, dv.tell());
      var album = dv.getString(30, dv.tell());
      var year = dv.getString(4, dv.tell());
      alert("ID3 found");
    } else {
      alert("Error - no ID3 found");
    }
  };
alert(title);
