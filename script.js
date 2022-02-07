if (document.querySelector(".area")) {
  const area = document.querySelectorAll(".area");
  const item = document.querySelectorAll(".item");
  const area_list = [""];
  let current_elem = null;
  const dragstart = (e) => {
    current_elem = e.target;
    setTimeout(() => e.target.classList.add("hide"), 0);
  };

  const dragend = (e) => {
    e.target.classList.remove("hide");
  };

  const dragover = (e) => {
    e.preventDefault();
  };

  const dragenter = (e) => {
    e.target.classList.add("hovered");
  };

  const dragleave = (e) => {
    e.target.classList.remove("hovered");
  };

  const drop = (e) => {
    e.target.classList.remove("hovered");
    // e.target.append(current_elem);
    console.log(e.target.classList);
    let box_class = e.target.classList;
    if (box_class.contains("area")) {
      e.target.append(current_elem);
    } else {
      current_elem = null;
    }
  };

  item.forEach((element) => {
    element.addEventListener("dragend", dragend);
    element.addEventListener("dragstart", dragstart);
  });

  area.forEach((a, i) => {
    a.addEventListener("dragover", dragover);
    a.addEventListener("dragenter", dragenter);
    a.addEventListener("dragleave", dragleave);
    a.addEventListener("drop", drop);
    a.addEventListener("drop", () => {
      if (current_elem != null) {
        const tag = current_elem.querySelector(".tag");
        if (i === 0) {
          tag.innerHTML = "Idea";
          tag.style.backgroundColor = "#b48ead";
        }
        if (i === 1) {
          tag.innerHTML = "Task";
          tag.style.backgroundColor = "#5e81ac";
        }
        if (i === 2) {
          tag.innerHTML = "Bug";
          tag.style.backgroundColor = "#BF616A";
        }
        if (i === 3) {
          tag.innerHTML = "Dev";
          tag.style.backgroundColor = "#EBCB8B";
        }
        if (i === 4) {
          tag.innerHTML = "Done";
          tag.style.backgroundColor = "#A3BE8C";
        }
      }
    });
  });
}
