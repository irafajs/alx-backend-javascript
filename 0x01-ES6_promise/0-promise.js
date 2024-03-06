export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    const data = { message: 'API response data' };
    resolve(data);
  });
}
