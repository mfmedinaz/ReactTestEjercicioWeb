import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../like";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(
      <Like/>,
      container
    );
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing Like component", () => {

  it("Por defecto likes 0", () => {
    const likes = container.querySelector("p");
    expect(likes.textContent).toBe("Likes: 0");
  });

  
  it("Likes incrementan en uno con el botón Like", () => {
    const likes = container.querySelector("p");
    const likeButton = container.querySelector("button[id='increment']");
    act(() => {
      likeButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(likes.textContent).toBe("Likes: 1");
  });

  it("Likes decrementan en uno con el botón Dislike", () => {
    const likes = container.querySelector("p");
    const dislikeButton = container.querySelector("button[id='decrement']");

    act(() => {
      dislikeButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(likes.textContent).toBe("Likes: -1");
  });
});