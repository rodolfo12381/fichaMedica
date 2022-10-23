export const api = "http://localhost:8080";

export const requestConfig = (method, data, token = null) => {

  let config;
  var credentials = btoa("fichamedicadigital:fichamedicadigital123");
  
   if (method === "DELETE" || data === null) {
    config = {
      method: method,
      headers: {},
    };
  } else {
    config = {
      method: method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization" : `Basic ${credentials}`,
        "grant_type" : "password"
      },
    };
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};