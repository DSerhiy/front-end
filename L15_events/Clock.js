const Clock = (function () {

  function renderClock(elemId) {
    const element = document.querySelector(elemId);
    element.innerText = _getTime();
    setInterval(function () {
      element.innerText = _getTime();
    }, 1000);
  };

  function _getTime() {
    const date = new Date();
    let hrs = `${date.getHours()}`;
    let mins = `${date.getMinutes()}`;
    let secs = `${date.getSeconds()}`;

    hrs = _unifFormat(hrs);
    mins = _unifFormat(mins);
    secs = _unifFormat(secs);

    return `${hrs}:${mins}:${secs}`;
  };

  function _unifFormat(value) {
    return value.length === 1 ? '0' + value : value;
  }
  
  return {
    init: renderClock 
  }

})();