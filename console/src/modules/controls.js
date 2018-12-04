export default {
  init(onDpadDown, onDpadUp) {
    [
      { selector: ".dpad-up", value: "UP" },
      { selector: ".dpad-down", value: "DOWN" },
      { selector: ".dpad-left", value: "LEFT" },
      { selector: ".dpad-right", value: "RIGHT" }
    ].forEach(({ selector, value }) => {
      const downEvent = e => {
        dpadDown(value);
        e.preventDefault();
        return false;
      };

      const upEvent = e => {
        dpadUp(value);
        e.preventDefault();
        return false;
      }

      document.querySelector(selector).addEventListener("touchstart", downEvent);
      document.querySelector(selector).addEventListener("mousedown", downEvent);

      document.querySelector(selector).addEventListener("touchend", upEvent);
      document.querySelector(selector).addEventListener("mouseup", upEvent);
    });
  }
}
