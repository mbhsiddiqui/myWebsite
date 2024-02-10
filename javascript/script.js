let first = true; // so we know whether to replace or add
window.addEventListener("hashchange", () => {
  if (first) {
    history.pushState(null, null, location.href.replace("#", ""));
    first = false;
  } else if (location.hash.slice(1) === "section") {
    history.pushState(null, null, location.href + "/section");
  } else {
    const all = location.href.split("/");
    all.pop();
    history.pushState(null, null, all.join("/"));
  }
});
