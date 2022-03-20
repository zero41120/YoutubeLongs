// ==UserScript==
// @name         Youtube Long
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Observe url and redirect from youtube.com/short to youtube.com/watch?v=
// @match        https://www.youtube.com/*
// @icon         data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDk4Ljk0IDEyMi44OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgOTguOTQgMTIyLjg4IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNGNDA0MDc7fQo8L3N0eWxlPjxnPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02My40OSwyLjcxYzExLjU5LTYuMDQsMjUuOTQtMS42NCwzMi4wNCw5LjgzYzYuMSwxMS40NywxLjY1LDI1LjY2LTkuOTQsMzEuN2wtOS41Myw1LjAxIGM4LjIxLDAuMywxNi4wNCw0LjgxLDIwLjE0LDEyLjUyYzYuMSwxMS40NywxLjY2LDI1LjY2LTkuOTQsMzEuN2wtNTAuODIsMjYuN2MtMTEuNTksNi4wNC0yNS45NCwxLjY0LTMyLjA0LTkuODMgYy02LjEtMTEuNDctMS42NS0yNS42Niw5Ljk0LTMxLjdsOS41My01LjAxYy04LjIxLTAuMy0xNi4wNC00LjgxLTIwLjE0LTEyLjUyYy02LjEtMTEuNDctMS42NS0yNS42Niw5Ljk0LTMxLjdMNjMuNDksMi43MSBMNjMuNDksMi43MXogTTM2LjA2LDQyLjUzbDMwLjc2LDE4Ljk5bC0zMC43NiwxOC45VjQyLjUzTDM2LjA2LDQyLjUzeiIvPjwvZz48L3N2Zz4=
// @grant        none
// @updateURL    https://github.com/zero41120/YoutubeLongs/raw/main/youtube_long.user.js
// @downloadURL  https://github.com/zero41120/YoutubeLongs/raw/main/youtube_long.user.js
// ==/UserScript==

const shortsUrl = 'https://www.youtube.com/shorts/';
const longsUrl = 'https://www.youtube.com/watch?v=';

function main() {
    // Redirect
    function onUrlChange(newUrl) {
        if (!newUrl.startsWith(shortsUrl)) return;
        const url = newUrl.replace(shortsUrl, longsUrl);
        location.href = url;
    }

    // Observer
    let lastUrl = location.href;
    onUrlChange(lastUrl);
    const observer = new MutationObserver(() => {
        if (location.href === lastUrl) return;
        lastUrl = location.href;
        onUrlChange(lastUrl);
    })
    observer.observe(document, {subtree: true, childList: true});
}

main();
