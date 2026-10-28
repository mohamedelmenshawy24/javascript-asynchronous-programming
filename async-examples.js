// Example 1 — Asynchronous Execution with setTimeout()

console.log("1. Task started");

setTimeout(() => {
  console.log("2. Announcement received");
}, 1000); // Runs after approximately 1 second

console.log("3. App continues");


// Example 2 — Handling Asynchronous Results with Promises

// console.log("1. Request started");

// const request = fetch(
//   "https://jsonplaceholder.typicode.com/posts/1"
// );

// request.then((response) => {
//   console.log("2. Response received");
// });

// console.log("3. App continues");


// Example 3 — Introducing async and await

// async function loadAnnouncement() {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );

//   console.log("2. Response received");
// }

// loadAnnouncement();

// console.log("1. App continues");


// Example 4 — Parsing and Displaying JSON


// async function displayAnnouncement() {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );

//   const post = await response.json();

//   console.log("Title:", post.title);
//   console.log("Body:", post.body);
// }

// displayAnnouncement();


// Example 5 — Handling HTTP Errors and Network Failures

// async function loadAnnouncementSafely() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1"
//       // Change /posts/1 to /posts/999 to test HTTP 404.
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }

//     const announcement = await response.json();

//     console.log("Title:", announcement.title);
//   } catch (error) {
//     console.error(
//       "Could not load announcement:",
//       error.message
//     );
//   }
// }

// loadAnnouncementSafely();
