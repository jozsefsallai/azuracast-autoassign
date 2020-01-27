const config = require('./config');
const fetch = require('node-fetch');

const BASE_URL = `${config.host}/api`;

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${config.key}`
};

function findPlaylist(song) {
  if (song.playlists.find(playlist => playlist.id === config.playlistId)) {
    return true;
  }

  return false;
}

(async function () {
  try {
    const currentItems = await fetch(`${BASE_URL}/station/${config.stationId}/files`, {
      headers
    }).then(res => res.json());

    const queue = [];

    currentItems.forEach(song => {
      if (!findPlaylist(song)) {
        queue.push(song.path);
      }
    });

    if (queue.length) {
      const body = {
        do: 'playlist',
        playlists: [ config.playlistId ],
        files: queue
      };

      const update = await fetch(`${BASE_URL}/station/${config.stationId}/files/batch`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers
      }).then(res => res.json());

      console.log(`Successfully updated ${update.files_affected} file(s)!`);
    }

    console.log('Done!');
  } catch (err) {
    console.error(err);
  }
})();
