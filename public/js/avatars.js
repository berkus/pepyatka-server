// Currently only Gravatar avatars are supported
// This code could be extended to support any kind of local or remote avatars.
// Since we don't know other people's emails it only works to show our own avatar. Hm?
Handlebars.registerHelper('avatar-url', function(emailhash, options) {
  return options.fn("http://www.gravatar.com/avatar/" + emailhash + "?s=48&d=wavatar");
});
