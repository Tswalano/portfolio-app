const login = async () => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:8001/test")
      .then(res => {
        return res.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};


export default login