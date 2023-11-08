function request(url, method, data) {
  const options = {method};

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  return fetch(process.env.REACT_APP_BASE_URL + url, options).then(response => {
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }

    return response.json();
  });
}

export const client = {
  get: url => request(url, 'GET'),
};
