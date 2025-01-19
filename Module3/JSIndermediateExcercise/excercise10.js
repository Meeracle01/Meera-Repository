
async function fetchData() {
    let dataFetched = true;
  
    if (dataFetched) {
      return "Data fetched successfully!";
    } else {
      throw new Error("Data fetching failed.");
    }
  }
  
  async function getData() {
    try {
      let message = await fetchData();
      console.log(message);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  getData();
  