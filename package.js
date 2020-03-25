Package.describe({
  name: 'exoway:accounts-steam',
  version: '1.3.0',
  summary: 'Steam OpenID integration for Meteor Accounts',
  git: 'https://github.com/scholtzm/meteor-accounts-steam',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth', ['client', 'server']);
  api.use('exoway:steam@1.3.0', ['client', 'server']);

  api.addFiles('steam_common.js', ['client', 'server']);
  api.addFiles('steam_server.js', 'server');
  api.addFiles('steam_client.js', 'client');
});
