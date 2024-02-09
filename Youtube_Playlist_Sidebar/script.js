function formatViewCount(views) {
  if (views >= 1000000000) {
    return (views / 1000000000).toFixed(0) + "B";
  } else if (views >= 1000000) {
    return (views / 1000000).toFixed(0) + "M";
  } else if (views >= 1000) {
    return (views / 1000).toFixed(0) + "K";
  } else {
    return views.toString();
  }
}
function card(n, url, title_name, duration, views, time) {
  let v = formatViewCount(views);
  let d = document.createElement("div");
  d.setAttribute("class", "card");
  document.querySelector(".container").appendChild(d);
  d.innerHTML = `
        <div class="num">${n}</div>
        <div class="main">
            <div class="thumbnail">
                <span class="dura"> ${duration} </span>
            </div>
            <div class="content">
                <h3>${title_name}</h3>
                <span class="other">CodeWithHarry • ${v} views • ${time} ago</span>
            </div>
        </div>
        <div class="menu">
            <div class="menu_button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(241, 241, 241)" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg>
            </div>
        </div>
    `;
  d.querySelector(".thumbnail").setAttribute(
    "style",
    `background-image: url(${url});`
  );
}
card(
  1,
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8ohrGxDt9HIbP7yXPhwiGwqmhEQ",
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "31:20",
  1000000,
  "4 months"
);
card(
  2,
  "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCA3_MiIeOkWOlW_VvWSqOu4QXog",
  "Your First HTML Website | Sigma Web Development Course - Tutorial #2",
  "28:31",
  520000,
  "4 months"
);
card(
  3,
  "https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU6JoPQWKp2DXPxO769WDRQkV_fQ",
  "Basic Structure of an HTML Website | Sigma Web Development Course - Tutorial #3",
  "11:12",
  326000,
  "4 months"
);
card(
  4,
  "https://i.ytimg.com/vi/nXba2-mgn1k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRMTjSa3HIEUveiXdFI6rIQTwXAg",
  "Heading, Paragraphs and Links | Sigma Web Development Course - Tutorial #4",
  "19:34",
  282000,
  "4 months"
);
card(
  5,
  "https://i.ytimg.com/vi/nXba2-mgn1k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRMTjSa3HIEUveiXdFI6rIQTwXAg",
  "Image, Lists, and Tables in HTML | Sigma Web Development Course - Tutorial #5",
  "18:20",
  279000,
  "4 months"
);
card(
  6,
  "https://i.ytimg.com/vi/CyRlWlaJnTY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1R2PKIPQMWoH2j-NKBuRSlJjFRw",
  "SEO and Core Web Vitals in HTML | Sigma Web Development Course - Tutorial #6",
  "13:16",
  227000,
  "4 months"
);
card(
  7,
  "https://i.ytimg.com/vi/CyRlWlaJnTY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1R2PKIPQMWoH2j-NKBuRSlJjFRw",
  "Forms and input tags in HTML | Sigma Web Development Course - Tutorial #7",
  "14:53",
  202000,
  "4 months"
);
card(
  8,
  "https://i.ytimg.com/vi/vnnlUCLfn6I/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAr_7u9ACwRBOlbnINHe0aTfz4DmQ",
  "Forms and input tags in HTML | Sigma Web Development Course - Tutorial #7",
  "10:52",
  155000,
  "4 months"
);
card(
  9,
  "https://i.ytimg.com/vi/vlAWzsGd-Yk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBC4YQSJe62tofXVUFOoUYijQrnzg",
  "Id & Classes in HTML | Sigma Web Development Course - Tutorial #9",
  "10:57",
  132000,
  "4 months"
);
card(
  10,
  "https://i.ytimg.com/vi/XZwBNDGuWGU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEqgKgE-ofyJeBglcCw3fv2ao3KQ",
  "Video, Audio & Media in HTML | Sigma Web Development Course - Tutorial #10",
  "14:48",
  170000,
  "4 months"
);
card(
  11,
  "https://i.ytimg.com/vi/fhoDRB53DwY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBE6fuyUkeWIXPP2oM2xpHdE_4Ikw",
  "Semantic Tags  in HTML | Sigma Web Development Course - Tutorial #11",
  "10:42",
  129000,
  "4 months"
);
card(
  12,
  "https://i.ytimg.com/vi/5xFRg_TzlAg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBGDmB9mi8T3AVo24CUKbPv9AZ0Iw",
  "Exercise 1 - Pure HTML Media Player | Sigma Web Development Course - Tutorial #12",
  "3:41",
  119000,
  "4 months"
);
card(
  13,
  "https://i.ytimg.com/vi/cvsbHZcDx8w/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLqcSxHNa2_8-EImf5A6ISFe9pzQ",
  "Entities, Code tag and more on HTML | Sigma Web Development Course - Tutorial #13",
  "9:21",
  114000,
  "4 months"
);
card(
  14,
  "https://i.ytimg.com/vi/1dkfuga2_Ps/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqhyoOGyiWm3fYzQarDGJ1kz3TwA",
  "Introduction to CSS | Sigma Web Development Course - Tutorial #14",
  "9:14",
  121000,
  "4 months"
);
card(
  15,
  "https://i.ytimg.com/vi/-XwZpYIyCEA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBElhGwF-moLPa6j4jCyh-UYJvn_A",
  "Inline, Internal & External CSS | Sigma Web Development Course - Tutorial #15",
  "11:04",
  98000,
  "3 months"
);
