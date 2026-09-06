
// 1. Create a Promise that returns the string "Hello Async" after 2 seconds.
const exercise1 = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello Async"), 2000);
  });
};

exercise1().then((msg) => console.log("Ex 1:", msg));


// 2. Write a function that returns a Promise resolving with the number 10 after 1 second.
const exercise2 = (): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 1000);
  });
};

exercise2().then((n) => console.log("Ex 2:", n));


// 3. Write a function that rejects a Promise with the error "Something went wrong" after 1 second.
const exercise3 = (): Promise<never> => {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Something went wrong")), 1000);
  });
};

exercise3().catch((err: Error) => console.log("Ex 3:", err.message));


// 4. Use .then() and .catch() to handle a Promise that returns a random number.
const exercise4 = (): Promise<number> => {
  return new Promise((resolve, reject) => {
    const n = Math.random();
    // Reject if number is less than 0.5 to demo .catch()
    if (n < 0.5) reject(new Error(`Too small: ${n.toFixed(3)}`));
    else resolve(n);
  });
};

exercise4()
  .then((n) => console.log("Ex 4 resolved:", n.toFixed(3)))
  .catch((err: Error) => console.log("Ex 4 rejected:", err.message));


// 5. Create a function simulateTask(time) that returns a Promise resolving with "Task done" after time ms.
const simulateTask = (time: number): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task done"), time);
  });
};

simulateTask(500).then((msg) => console.log("Ex 5:", msg));


// 6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.
const exercise6 = (): void => {
  Promise.all([simulateTask(300), simulateTask(600), simulateTask(200)]).then(
    (results) => console.log("Ex 6 (Promise.all):", results)
  );
};

exercise6();


// 7. Use Promise.race() to return whichever Promise resolves first.
const exercise7 = (): void => {
  const p1 = simulateTask(800);
  const p2 = simulateTask(300); // fastest
  const p3 = simulateTask(600);

  Promise.race([p1, p2, p3]).then((winner) =>
    console.log("Ex 7 (Promise.race) winner:", winner)
  );
};

exercise7();


// 8. Create a Promise chain: square the number 2, then double it, then add 5.
// 2 -> squared -> 4 -> doubled -> 8 -> +5 -> 13
const exercise8 = (): void => {
  Promise.resolve(2)
    .then((n) => n * n)   // square -> 4
    .then((n) => n * 2)   // double -> 8
    .then((n) => n + 5)   // add 5  -> 13
    .then((result) => console.log("Ex 8 (chain):", result));
};

exercise8();


// 9. Write a Promise that reads an array after 1 second and filters even numbers.
const exercise9 = (): void => {
  const getArray = (): Promise<number[]> =>
    new Promise((resolve) =>
      setTimeout(() => resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 1000)
    );

  getArray()
    .then((arr) => arr.filter((n) => n % 2 === 0))
    .then((evens) => console.log("Ex 9 (even numbers):", evens));
};

exercise9();


// 10. Use .finally() to log "Done" when a Promise finishes (success or failure).
const exercise10 = (): void => {
  const mayFail = (shouldFail: boolean): Promise<string> =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) reject(new Error("Failed!"));
        else resolve("Success!");
      }, 500);
    });

  // Success path
  mayFail(false)
    .then((msg) => console.log("Ex 10a:", msg))
    .catch((err: Error) => console.log("Ex 10a error:", err.message))
    .finally(() => console.log("Ex 10a: Done"));

  // Failure path
  mayFail(true)
    .then((msg) => console.log("Ex 10b:", msg))
    .catch((err: Error) => console.log("Ex 10b error:", err.message))
    .finally(() => console.log("Ex 10b: Done"));
};

exercise10();

// B. ASYNC / AWAIT

// 11. Convert Exercise 1 into async/await.
const exercise11 = async (): Promise<void> => {
  const msg = await new Promise<string>((resolve) =>
    setTimeout(() => resolve("Hello Async"), 2000)
  );
  console.log("Ex 11:", msg);
};

exercise11();


// 12. Write an async function that calls simulateTask(2000) and logs the result.
const exercise12 = async (): Promise<void> => {
  const result = await simulateTask(2000);
  console.log("Ex 12:", result);
};

exercise12();


// 13. Handle errors using try/catch with async/await.
const exercise13 = async (): Promise<void> => {
  const failingTask = (): Promise<never> =>
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Async error caught!")), 500)
    );

  try {
    await failingTask();
  } catch (err) {
    console.log("Ex 13 (try/catch):", (err as Error).message);
  }
};

exercise13();


// 14. Write an async function that takes a number, waits 1 second, and returns number x 3.
const exercise14 = async (n: number): Promise<number> => {
  await new Promise<void>((resolve) => setTimeout(resolve, 1000));
  return n * 3;
};

exercise14(7).then((result) => console.log("Ex 14:", result)); // 21


// 15. Call multiple async functions sequentially using await.
const exercise15 = async (): Promise<void> => {
  const step = (label: string, ms: number): Promise<string> =>
    new Promise((resolve) => setTimeout(() => resolve(label), ms));

  const a = await step("Step A", 300);
  console.log("Ex 15:", a);
  const b = await step("Step B", 200);
  console.log("Ex 15:", b);
  const c = await step("Step C", 100);
  console.log("Ex 15:", c);
};

exercise15();


// 16. Call multiple async functions in parallel using Promise.all().
const exercise16 = async (): Promise<void> => {
  const [r1, r2, r3] = await Promise.all([
    simulateTask(200),
    simulateTask(400),
    simulateTask(100),
  ]);
  console.log("Ex 16 (parallel):", r1, r2, r3);
};

exercise16();


// 17. Use for await...of to iterate over an array of Promises.
const exercise17 = async (): Promise<void> => {
  const promises: Promise<string>[] = [
    simulateTask(100),
    simulateTask(200),
    simulateTask(300),
  ];

  let index = 1;
  for await (const result of promises) {
    console.log(`Ex 17 - Promise ${index++}:`, result);
  }
};

exercise17();


// 18. Write an async function fetchUser(id) that simulates an API call (resolves a user object after 1 second).
interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUser = async (id: number): Promise<User> => {
  await new Promise<void>((resolve) => setTimeout(resolve, 1000));
  return { id, name: `User ${id}`, email: `user${id}@example.com` };
};

fetchUser(42).then((user) => console.log("Ex 18:", user));


// 19. Create an async function fetchUsers(ids) that calls fetchUser for each ID.
const fetchUsers = async (ids: number[]): Promise<User[]> => {
  return Promise.all(ids.map((id) => fetchUser(id)));
};

fetchUsers([1, 2, 3]).then((users) => console.log("Ex 19:", users));


// 20. Add a timeout: if the API call takes more than 2 seconds, throw an error.
const withTimeout = <T>(promise: Promise<T>, ms: number): Promise<T> => {
  const timeout = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error(`Timeout after ${ms}ms`)), ms)
  );
  return Promise.race([promise, timeout]);
};

const exercise20 = async (): Promise<void> => {
  try {
    // Simulates a slow API call (3s) -- should timeout at 2s
    const slowCall = new Promise<string>((resolve) =>
      setTimeout(() => resolve("Slow response"), 3000)
    );
    const result = await withTimeout(slowCall, 2000);
    console.log("Ex 20:", result);
  } catch (err) {
    console.log("Ex 20 (timeout):", (err as Error).message);
  }
};

exercise20();

// C. FETCH API & SIMULATED I/O

// 21. Use fetch to get data from a public API.
const exercise21 = async (): Promise<void> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log("Ex 21 (fetch):", data);
};

exercise21();


// 22. Call the API multiple times and log the results.
const exercise22 = async (): Promise<void> => {
  const ids = [1, 2, 3];
  const results = await Promise.all(
    ids.map((id) =>
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((r) =>
        r.json()
      )
    )
  );
  results.forEach((todo, i) => console.log(`Ex 22 - Todo ${i + 1}:`, todo));
};

exercise22();


// 23. Write an async function that fetches a list of todos and filters out incomplete ones.
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const exercise23 = async (): Promise<void> => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=20"
  );
  const todos: Todo[] = await response.json();
  const completed = todos.filter((t) => t.completed);
  console.log(
    `Ex 23: ${completed.length} completed out of ${todos.length} todos`
  );
};

exercise23();


// 24. Write an async function postData() that sends a POST request to a test API.
const postData = async (): Promise<void> => {
  const payload = {
    title: "New Todo",
    body: "Buy groceries",
    userId: 1,
  };

  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  console.log("Ex 24 (POST):", data);
};

postData();


// 25. Create a function downloadFile that simulates downloading a file in 3 seconds and logs when done.
const downloadFile = (filename: string): Promise<void> => {
  return new Promise((resolve) => {
    console.log(`Ex 25: Downloading "${filename}"...`);
    setTimeout(() => {
      console.log(`Ex 25: "${filename}" downloaded!`);
      resolve();
    }, 3000);
  });
};

downloadFile("report.pdf");


// 26. Use async/await with setTimeout to simulate a 5-second wait.
const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

const exercise26 = async (): Promise<void> => {
  console.log("Ex 26: Starting 5-second wait...");
  await sleep(5000);
  console.log("Ex 26: 5 seconds have passed!");
};

exercise26();


// 27. Write a function fetchWithRetry(url, retries) that retries up to retries times if the call fails.
const fetchWithRetry = async (
  url: string,
  retries: number
): Promise<unknown> => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      console.log(`Ex 27: Succeeded on attempt ${attempt}`);
      return data;
    } catch (err) {
      console.log(
        `Ex 27: Attempt ${attempt} failed -- ${(err as Error).message}`
      );
      if (attempt === retries) throw new Error("All retries exhausted");
    }
  }
};

// Valid URL (should succeed on first try)
fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3)
  .then((data) => console.log("Ex 27 result:", data))
  .catch((err: Error) => console.log("Ex 27 final error:", err.message));


// 28. Write an async function batchProcess() that processes 5 async tasks at once (use Promise.all).
const batchProcess = async (): Promise<void> => {
  const tasks = Array.from({ length: 5 }, (_, i) =>
    simulateTask(Math.random() * 1000).then(
      (result) => `Task ${i + 1}: ${result}`
    )
  );

  const results = await Promise.all(tasks);
  console.log("Ex 28 (batchProcess):", results);
};

batchProcess();


// 29. Write an async function queueProcess() that processes tasks sequentially in a queue.
const queueProcess = async (): Promise<void> => {
  const taskQueue = [
    () => simulateTask(300).then((r) => `Queue-1: ${r}`),
    () => simulateTask(200).then((r) => `Queue-2: ${r}`),
    () => simulateTask(400).then((r) => `Queue-3: ${r}`),
    () => simulateTask(100).then((r) => `Queue-4: ${r}`),
  ];

  const results: string[] = [];
  for (const task of taskQueue) {
    const result = await task(); // sequential: one at a time
    results.push(result);
    console.log("Ex 29 (queue):", result);
  }
  console.log("Ex 29 all done:", results);
};

queueProcess();


// 30. Use async/await + Promise.allSettled() to handle multiple API calls and display success/failure.
const exercise30 = async (): Promise<void> => {
  const urls = [
    "https://jsonplaceholder.typicode.com/todos/1", // valid
    "https://jsonplaceholder.typicode.com/todos/2", // valid
    "https://this-url-does-not-exist.invalid/data", // will fail
  ];

  const results = await Promise.allSettled(
    urls.map((url) => fetch(url).then((r) => r.json()))
  );

  results.forEach((result, i) => {
    if (result.status === "fulfilled") {
      console.log(`Ex 30 - Call ${i + 1} SUCCESS:`, result.value);
    } else {
      console.log(
        `Ex 30 - Call ${i + 1} FAILED:`,
        (result.reason as Error)?.message ?? "Unknown error"
      );
    }
  });
};

exercise30();
