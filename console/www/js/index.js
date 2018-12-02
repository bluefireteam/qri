document.addEventListener("deviceready", () => {
  receivedEvent("deviceready")
})

receivedEvent = id => {
  if (id === "deviceready") {
    window.Console.start()
  }
}
