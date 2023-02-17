
var $frame = $("#cyclepages");
var $wrap = $frame.parent();

// Call Sly on frame
$frame.sly({
  horizontal: 1,
  itemNav: "basic",
  smart: 1,
  activateOn: "click",
  mouseDragging: 1,
  touchDragging: 1,
  releaseSwing: 1,
  startAt: 0,
  scrollBar: $wrap.find(".scrollbar"),
  scrollBy: 1,
  pagesBar: 0,
  activatePageOn: "click",
  speed: 300,
  elasticBounds: 1,
  dragHandle: 1,
  dynamicHandle: 1,
  clickBar: 1,

  // Cycling
  cycleBy: "pages",
  cycleInterval: 1000,
  pauseOnHover: 1,
  startPaused: 1,

  // Buttons
  prevPage: $wrap.find(".prevPage"),
  nextPage: $wrap.find(".nextPage")
});

//-================= 2nd scroll bar =====================//

var $frame = $("#cyclepages2");
var $wrap = $frame.parent();

// Call Sly on frame
$frame.sly({
  horizontal: 1,
  itemNav: "basic",
  smart: 1,
  activateOn: "click",
  mouseDragging: 1,
  touchDragging: 1,
  releaseSwing: 1,
  startAt: 0,
  scrollBar: $wrap.find(".scrollbar2"),
  scrollBy: 1,
  pagesBar: 0,
  activatePageOn: "click",
  speed: 300,
  elasticBounds: 1,
  dragHandle: 1,
  dynamicHandle: 1,
  clickBar: 1,

  // Cycling
  cycleBy: "pages2",
  cycleInterval: 1000,
  pauseOnHover: 1,
  startPaused: 1,

  // Buttons
  prevPage: $wrap.find(".prevPage2"),
  nextPage: $wrap.find(".nextPage2")
});

