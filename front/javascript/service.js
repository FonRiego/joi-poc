const apiService = async (method, id) => {
  try {
    const url = `http://localhost:3000/examples/${id}/`
    const response = await fetch(url, {
      method,
      headers: {"Content-Type": "application/json"}
    });
    const data = await response.json();
    return data
  } catch (error) {
    console.log('error')
  }
};

export { apiService };