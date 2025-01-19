

let fetchData = new Promise((resolve, reject) => {
    let dataFetched = true;
  
    if (dataFetched) {
      resolve("Data fetched successfully!");
    } else {
      reject("Data fetching failed.");
    }
  });
  
  fetchData
    .then((message) => console.log(message)) // Success handler
    .catch((message) => console.log(message)); // Failure handler
  