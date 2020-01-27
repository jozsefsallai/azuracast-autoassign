# AzuraCast autoassign

Node.js script to automatically assign files without an assigned playlist to a pre-defined playlist.

## Dependencies

If you want to use this script, you need to install Node.js on your machine.

## Installation

```sh
git clone git@github.com:jozsefsallai/azuracast-autoassign.git
cd azuracast-autoassign
npm install
```

## Configuration

```sh
cp config.example.json config.json
vi example.json
```

You need to provide an AzuraCast API key, the domain of your AzuraCast web frontend, the station you want to run the script for, and the playlist to assign to orphaned media files.

## Running

```sh
node run.js
```

## Production

In production, it is recommended that you add this script as a crontab entry that runs on a tidy schedule (I personally run it every 30 minutes).

## License

MIT.
