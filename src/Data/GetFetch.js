export default async function GetFetch(URL) {
  if (!URL) {
    console.error(`GetFetch can not be called without URL`);
    return;
  }

  let data;
  try {
    const requestResponse = await fetch(URL);
    data = await requestResponse.json();
  } catch (error) {
    data = { error };
    console.error(error);
  }
  return data;
}
