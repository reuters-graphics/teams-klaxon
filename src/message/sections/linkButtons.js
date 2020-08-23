export default (linkButtons) => linkButtons.map(linkButton => ({
  '@type': 'OpenUri',
  name: linkButton.name,
  targets: [
    {
      os: 'default',
      uri: linkButton.link,
    },
  ],
}));
