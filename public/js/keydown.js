var $write = $("#write"),
  $a = $("#a"),
  $b = $("#b"),
  $c = $("#c"),
  $d = $("#d"),
  $e = $("#e"),
  $f = $("#f"),
  $g = $("#g"),
  $h = $("#h"),
  $i = $("#i"),
  $j = $("#j"),
  $k = $("#k"),
  $l = $("#l"),
  $m = $("#m"),
  $n = $("#n"),
  $o = $("#o"),
  $p = $("#p"),
  $q = $("#q"),
  $r = $("#r"),
  $s = $("#s"),
  $t = $("#t"),
  $u = $("#u"),
  $v = $("#v"),
  $w = $("#w"),
  $x = $("#x"),
  $y = $("#y"),
  $z = $("#z"),
  $space = $("#space"),
  $shift = $("#shift"),
  $rshift = $("#rshift"),
  $caps = $("#caps"),
  $write2 = $("#write2"),
  $Backspace = $("#Backspace"),
  shift = false,
  capslock = false;
$(function() {
  $(document).keydown(function(event) {
    character = "";
    //character = event.which;
    if (event.which == 65) {
      character = "a";
      if (shift != capslock) {
        character = "A";
      }
      $a.addClass("press");
    }
    if (event.which == 66) {
      character = "b";
      if (shift != capslock) {
        character = "B";
      }
      $b.addClass("press");
    }
    if (event.which == 67) {
      character = "c";
      if (shift != capslock) {
        character = "C";
      }
      $c.addClass("press");
    }
    if (event.which == 68) {
      character = "d";
      if (shift != capslock) {
        character = "D";
      }
      $d.addClass("press");
    }
    if (event.which == 69) {
      character = "e";
      if (shift != capslock) {
        character = "E";
      }
      $e.addClass("press");
    }
    if (event.which == 70) {
      character = "f";
      if (shift != capslock) {
        character = "F";
      }
      $f.addClass("press");
    }
    if (event.which == 71) {
      character = "g";
      if (shift != capslock) {
        character = "G";
      }
      $g.addClass("press");
    }
    if (event.which == 72) {
      character = "h";
      if (shift != capslock) {
        character = "H";
      }
      $h.addClass("press");
    }
    if (event.which == 73) {
      character = "i";
      if (shift != capslock) {
        character = "I";
      }
      $i.addClass("press");
    }
    if (event.which == 74) {
      character = "j";
      if (shift != capslock) {
        character = "J";
      }
      $j.addClass("press");
    }
    if (event.which == 75) {
      character = "k";
      if (shift != capslock) {
        character = "K";
      }
      $k.addClass("press");
    }
    if (event.which == 76) {
      character = "l";
      if (shift != capslock) {
        character = "L";
      }
      $l.addClass("press");
    }
    if (event.which == 77) {
      character = "m";
      if (shift != capslock) {
        character = "M";
      }
      $m.addClass("press");
    }
    if (event.which == 78) {
      character = "n";
      if (shift != capslock) {
        character = "N";
      }
      $n.addClass("press");
    }
    if (event.which == 79) {
      character = "o";
      if (shift != capslock) {
        character = "O";
      }
      $o.addClass("press");
    }
    if (event.which == 80) {
      character = "p";
      if (shift != capslock) {
        character = "P";
      }
      $p.addClass("press");
    }
    if (event.which == 81) {
      character = "q";
      if (shift != capslock) {
        character = "Q";
      }
      $q.addClass("press");
    }
    if (event.which == 82) {
      character = "r";
      if (shift != capslock) {
        character = "R";
      }
      $r.addClass("press");
    }
    if (event.which == 83) {
      character = "s";
      if (shift != capslock) {
        character = "S";
      }
      $s.addClass("press");
    }
    if (event.which == 84) {
      character = "t";
      if (shift != capslock) {
        character = "T";
      }
      $t.addClass("press");
    }
    if (event.which == 85) {
      character = "u";
      if (shift != capslock) {
        character = "U";
      }
      $u.addClass("press");
    }
    if (event.which == 86) {
      character = "v";
      if (shift != capslock) {
        character = "V";
      }
      $v.addClass("press");
    }
    if (event.which == 87) {
      character = "w";
      if (shift != capslock) {
        character = "W";
      }
      $w.addClass("press");
    }
    if (event.which == 88) {
      character = "x";
      if (shift != capslock) {
        character = "X";
      }
      $x.addClass("press");
    }
    if (event.which == 89) {
      character = "y";
      if (shift != capslock) {
        character = "Y";
      }
      $y.addClass("press");
    }
    if (event.which == 90) {
      character = "z";
      if (shift != capslock) {
        character = "Z";
      }
      $z.addClass("press");
    }
    if (event.which == 32) {
      character = " ";
      $space.addClass("press");
    }
    if (event.which == 188) {
      character = ",";
      if (shift) character = "<";
      $("#lt").addClass("press");
    }
    if (event.which == 190) {
      character = ".";
      if (shift) character = ">";
      $("#gt").addClass("press");
    }

    if (event.which == 192) {
      character = "`";
      if (shift) character = "~";
      $("#dot").addClass("press");
    }
    if (event.which == 49) {
      character = "1";
      if (shift) character = "!";
      $("#first").addClass("press");
    }

    if (event.which == 16) {
      $(".letter").toggleClass("uppercase");
      $(".symbol span").toggle();
      shift = shift === true ? false : true;
      if (shift) {
        $shift.addClass("press");
        $rshift.addClass("press");
      } else {
        $shift.removeClass("press");
        $rshift.removeClass("press");
      }
    }
    if (event.which == 20) {
      $(".letter").toggleClass("uppercase");
      capslock = capslock === true ? false : true;
      if (capslock) {
        $caps.addClass("press");
      } else {
        $caps.removeClass("press");
      }
    }

    if (event.which == 8) {
      var html = $write.html();
      $Backspace.addClass("press");
      $write.html(html.substr(0, html.length - 1));
      return false;
    }

    // Add the character
    $write.html($write.html() + character);
    if (
      $write.val().length > $write2.val().length ||
      $write.val() != $write2.val().slice(0, $write.val().length)
    ) {
      $write.css("color", "red");
    } else {
      $write.css("color", "black");
    }
  });
});
