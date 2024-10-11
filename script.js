console.log("lets write Java scripttttt");

async function main(){
   // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQCSL0W4UbKWIwIdfI09WOIRS_wQ_-k0ICUvWZIjjVOmnScxTu5_Ha813Ct2IDKkJXTQop_gt_Z-o5P024iEb2rvRweFBae3V7xDyIH58KS73msX9OhHFpN2SXmHkiug3En7uVz0p62hLgQu4XB2AtxGNGz1dreH9QMzv3_9rLfQUfPxUAPENT-i_JlGop4Uwb3G7QbHTkqmamTCnLUbnIquz7sjbymmHjSedIffBlmMPVzwHuaAuz2RDLVUmAs8sxDiP3ir6F7V0utlKeVXkMNFIKb_7Ii9';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);
}
main()
