export default function handleResponseFromAPI() {
  return Promise.resolve({
    status: 200,
    body: 'success',
  })
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => {
      console.error('Got a response from the API');
      return new Error();
    });
}
