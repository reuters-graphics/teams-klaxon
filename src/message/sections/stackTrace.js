export default (stackTrace) => {
  return {
    activityImage: 'http://icons.iconarchive.com/icons/thehoth/seo/256/seo-web-code-icon.png',
    activityTitle: stackTrace.title || 'Stack trace',
    activityText: `\`${stackTrace.code}\``,
  };
};
