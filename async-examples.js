// Example 1 — Asynchronous Execution with setTimeout

console.log("1. Request started");

setTimeout(() => {
  console.log("2. Announcement received");
}, 1000); // Run after approximately 1 second

console.log("3. App continues");

// Expected output:
// 1. Request started
// 3. App continues
// 2. Announcement received

// Example 2 — Synchronous Execution with alert()

// console.log("1. Request started");
// alert("2. Announcement received");
// console.log("3. App continues");

// The alert pauses execution until dismissed.


// Example 3 — Fetch with a Promise and .then()

// console.log("1. Request started");
//
// const request = fetch(
//   "https://jsonplaceholder.typicode.com/posts/1"
// );
//
// request.then((response) => {
//   console.log("2. Response received");
// });
//
// console.log("3. App continues");

// Expected order:
// 1. Request started
// 3. App continues
// 2. Response received
//
// Note: fetch() can fulfill even when the HTTP status is 404.


// Example 4 — Handling a Network Failure

// console.log("1. Request started");
//
// const request = fetch(
//   "https://invalid-domain-example-12345.com"
// );
//
// request
//   .then((response) => {
//     console.log("2. Response received");
//   })
//   .catch((error) => {
//     console.error("Request failed:", error.message);
//   });
//
// console.log("3. App continues");
//
// Expected order:
// 1. Request started
// 3. App continues
// Request failed: ... (message varies)

// Example 5 — Understanding a Pending Promise

// console.log("1. Request started");
//
// const request = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Announcement received");
//   }, 5000);
// });
//
// console.log("2. Promise state: pending");
//
// request.then((message) => {
//   console.log("3.", message);
// });
//
// console.log("4. App continues");
//
// Expected order:
// 1. Request started
// 2. Promise state: pending
// 4. App continues
// (After approximately 5 seconds)
// 3. Announcement received
//
// Pending: The Promise has not settled yet.
// Fulfilled: resolve() has completed the Promise successfully.
// The state message above is a label, not an actual state inspection.

// Slide 6 — Introducing async and await

// async function loadAnnouncement() {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );
//
//   console.log("Response received");
// }
//
// loadAnnouncement();
// console.log("App continues");
//
// await pauses this async function, not the whole application.

// Slide 7 — Parsing and Displaying JSON

// async function loadAnnouncement() {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );
//
//   const post = await response.json();
//
//   console.log("Title:", post.title);
//   console.log("Body:", post.body);
// }
//
// loadAnnouncement();
//
// response.json() parses the response body into a JavaScript value.

// Slide 8 — Handling HTTP and Network Errors

// async function loadAnnouncement() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1"
//       // Change to /posts/999 to test an HTTP 404.
//     );
//
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//
//     const announcement = await response.json();
//
//     console.log("Title:", announcement.title);
//   } catch (error) {
//     console.error(
//       "Could not load announcement:",
//       error.message
//     );
//   }
// }
//
// loadAnnouncement();
//
// response.ok checks whether the HTTP status is successful.
// try...catch handles thrown errors and rejected Promises.
