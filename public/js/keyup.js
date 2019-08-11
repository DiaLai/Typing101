$(function() {
  $(document).keyup(function(event) {
    if (event.which == 65) {
      $a.removeClass("press");
    }
    if (event.which == 66) {
      $b.removeClass("press");
    }
    if (event.which == 67) {
      $c.removeClass("press");
    }
    if (event.which == 68) {
      $d.removeClass("press");
    }
    if (event.which == 69) {
      $e.removeClass("press");
    }
    if (event.which == 70) {
      $f.removeClass("press");
    }
    if (event.which == 71) {
      $g.removeClass("press");
    }
    if (event.which == 72) {
      $h.removeClass("press");
    }
    if (event.which == 73) {
      $i.removeClass("press");
    }
    if (event.which == 74) {
      $j.removeClass("press");
    }
    if (event.which == 75) {
      $k.removeClass("press");
    }
    if (event.which == 76) {
      $l.removeClass("press");
    }
    if (event.which == 77) {
      $m.removeClass("press");
    }
    if (event.which == 78) {
      $n.removeClass("press");
    }
    if (event.which == 79) {
      $o.removeClass("press");
    }
    if (event.which == 80) {
      $p.removeClass("press");
    }
    if (event.which == 81) {
      $q.removeClass("press");
    }
    if (event.which == 82) {
      $r.removeClass("press");
    }
    if (event.which == 83) {
      $s.removeClass("press");
    }
    if (event.which == 84) {
      $t.removeClass("press");
    }
    if (event.which == 85) {
      $u.removeClass("press");
    }
    if (event.which == 86) {
      $v.removeClass("press");
    }
    if (event.which == 87) {
      $w.removeClass("press");
    }
    if (event.which == 88) {
      $x.removeClass("press");
    }
    if (event.which == 89) {
      $y.removeClass("press");
    }
    if (event.which == 90) {
      $z.removeClass("press");
    }
    if (event.which == 32) {
      $space.removeClass("press");
    }
    if (event.which == 16) {
      $shift.removeClass("press");
      $rshift.removeClass("press");
      shift = false;
    }
    if (shift === true) {
      $(".symbol span").toggle();
    }

    if (capslock !== shift) $(".letter").toggleClass("uppercase");
  });
});
