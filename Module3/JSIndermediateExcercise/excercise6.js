

try {
    let result = 10 / 0; 
    console.log(result);
  } catch (error) {
    console.error("An error occurred: " + error.message);
  } finally {
    console.log("This will run no matter what.");
  }
  