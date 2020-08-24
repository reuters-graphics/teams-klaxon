require('dotenv').config();
const TeamsKlaxon = require('../dist');

const klaxon = new TeamsKlaxon(process.env.WEBHOOK);

describe('test TeamsKlaxon', function() {
  this.timeout(30000);

  it('Should post a simple message', async function() {
    await klaxon.log({
      text: '⚙️ Testing text',
    });
  });

  it('Should post a message with facts', async function() {
    await klaxon.log({
      title: '⚙️ Testing facts',
      facts: {
        Name: 'Jon McClure',
        Age: '35',
      },
    });
  });

  it('Should post a message with images', async function() {
    await klaxon.log({
      title: '⚙️ Testing images',
      images: [
        'https://scitechdaily.com/images/Great-White-Shark-Smile-1536x1152.jpg',
        'https://cdn.britannica.com/79/65379-050-5CF52BAC/Shortfin-mako-shark-seas.jpg',
      ],
    });
  });

  it('Should post a message with a stack trace', async function() {
    await klaxon.log({
      title: '⚙️ Testing stack trace',
      stackTrace: {
        code: 'console.log(\'hello world!\')',
      },
    });
  });

  it('Should post a message with link buttons', async function() {
    await klaxon.log({
      title: '⚙️ Testing link buttons',
      linkButtons: [{
        name: 'Google',
        link: 'https://www.google.com',
      }, {
        name: 'Twitter',
        link: 'https://www.twitter.com',
      }],
    });
  });

  it('Should post a message with color', async function() {
    await klaxon.log({
      title: '⚙️ Testing color',
      color: 'FF0000',
    });
  });

  it('Should post a message with multiple options', async function() {
    await klaxon.log({
      title: '⚙️ Testing multiple options',
      color: 'FF0000',
      facts: {
        Name: 'Jon McClure',
        Age: '35',
      },
      images: [
        'https://scitechdaily.com/images/Great-White-Shark-Smile-1536x1152.jpg',
        'https://cdn.britannica.com/79/65379-050-5CF52BAC/Shortfin-mako-shark-seas.jpg',
      ],
      stackTrace: {
        code: 'console.log(\'hello world!\')',
      },
      linkButtons: [{
        name: 'Google',
        link: 'https://www.google.com',
      }, {
        name: 'Twitter',
        link: 'https://www.twitter.com',
      }],
    });
  });
});
