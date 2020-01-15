module.exports = Object.freeze({
  INDEX_DOMAIN : 'https://drive.ranaji.me/',
  TOKEN: '972978971:AAEHpGh8WDF99KXJYuzFByLmWznRi6DGjB4',
  ARIA_SECRET: 'AbhishekRana',
  ARIA_DOWNLOAD_LOCATION: '/home/user/path/to/download/dir (no trailing "/")',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: [], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  GDRIVE_PARENT_DIR_ID: '1HmiTVlh5544GGV4J3_vnfC2qdWmWQTse',
  SUDO_USERS: [770735142,577575097,641285079,899307621,418529346,723238596,173823365,459178434,636865630,509309099,920262337,173749550],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-1001399998865],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 5000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: []
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
    COMMANDS_USE_BOT_NAME: {
      ENABLED: true,  // If true, all commands except '/list' has to have the bot username after the command
      NAME: "@mehgdrive_bot"
    },
    IS_TEAM_DRIVE: true
  });
