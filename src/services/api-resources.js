const domain = process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api' : '';
const headers = new Headers({
  'Content-Type': 'application/json'
});

export async function get(url) {
  try {
    const response = await fetch(domain + url, {
      method: 'GET',
      headers: headers
    });
    return await response.json();
  } catch(e) {
    throw new Error(e);
  }
}

export async function post(url, request) {
  try {
    const response = await fetch(domain + url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(request)
    });
    return await response.json();
  } catch(e) {
    throw new Error(e);
  }
}