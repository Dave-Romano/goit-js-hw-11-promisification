// MY CODE
const delay = (ms) => {
    const promise = new Promise((resolve) => {
      resolve(ms);
    }, ms);
    return promise;
  };
  
  const logger = (time) => console.log(`Resolved after ${time}ms`);
  
  // FUNCTION FOR CHECK
  console.log("TASK-01");
  delay(2000).then(logger); // Resolved after 2000ms
  delay(1000).then(logger); // Resolved after 1000ms
  delay(1500).then(logger); // Resolved after 1500ms