import * as dotenv from 'dotenv';

import TeamsKlaxon, { Elements } from '../dist/index.js';

dotenv.config()

const klaxon = new TeamsKlaxon(process.env.WEBHOOK);

describe('test TeamsKlaxon', function() {
  this.timeout(30000);

  it('Should post a simple message', async function() {
    const content = [
      Elements.TextBlock('Hello **world**!\n\nI\'m a bot.')
    ];
    klaxon.setContent(content);
    await klaxon.post();
  });

  it('Should post a factset', async function() {
    const content = [
      Elements.TextBlock('Hello **world**!\n\nI\'m a bot.'),
      Elements.FactSet([
        Elements.Fact('name', 'Botty McBotFace'),
        Elements.Fact('age', '12'),
      ]),
    ];
    klaxon.setContent(content);
    await klaxon.post();
  });

  it('Should post an image set', async function() {
    const content = [
      Elements.TextBlock('Pics', {
        size: 'ExtraLarge',
        weight: 'Bolder',
      }),
      Elements.ImageSet([
        Elements.Image('https://www.reuters.com/graphics/TJX-RESULTS/dwvkdeoempm/chart.png'),
        Elements.Image(
          'https://www.reuters.com/graphics/BRITAIN-ECONOMY/movakleekva/chart_eikon.jpg',
          'https://www.reuters.com/graphics/BRITAIN-ECONOMY/movakleekva/chart_eikon.jpg'
        ),
      ]),
    ];
    klaxon.setContent(content);
    console.log(klaxon.content);
    await klaxon.post();
  });
});
