import * as dotenv from 'dotenv';

import { Elements, TeamsKlaxon } from '../dist/index.js';

import expect from 'expect.js';

dotenv.config();
const klaxon = new TeamsKlaxon(process.env.TEST_WEBHOOK);

describe('TeamsKlaxon demos', function() {
  if (!process.env.DEMO_TESTS || !process.env.TEST_WEBHOOK) return;

  this.timeout(30000);

  it('Should post a simple message', async function() {
    const content = [Elements.TextBlock("Hello **world**!\n\nI'm a bot.")];
    klaxon.makeCard(content);
    const response = await klaxon.postCard();
    expect(response.status).to.be(200);
  });

  it('Should post a factset', async function() {
    const content = [
      Elements.TextBlock("Hello **world**!\n\nI'm a bot."),
      Elements.FactSet([
        Elements.Fact('name', 'Botty McBotFace'),
        Elements.Fact('age', '12'),
      ]),
    ];
    klaxon.makeCard(content);
    const response = await klaxon.postCard();
    expect(response.status).to.be(200);
  });

  it('Should post an image set', async function() {
    const content = [
      Elements.TextBlock('Pics', {
        size: 'ExtraLarge',
        weight: 'Bolder',
      }),
      Elements.ImageSet([
        Elements.Image(
          'https://www.reuters.com/graphics/TJX-RESULTS/dwvkdeoempm/chart.png'
        ),
        Elements.Image(
          'https://www.reuters.com/graphics/BRITAIN-ECONOMY/movakleekva/chart_eikon.jpg',
          'https://www.reuters.com/graphics/BRITAIN-ECONOMY/movakleekva/chart_eikon.jpg'
        ),
      ]),
    ];
    klaxon.makeCard(content);
    const response = await klaxon.postCard();
    expect(response.status).to.be(200);
  });

  it('Should post a container', async function() {
    const backgroundImage = Elements.BackgroundImage(
      'https://webartdevelopers.com/blog/wp-content/uploads/2018/12/css-lattice-pattern.png'
    );
    const content = [
      Elements.Container(
        [
          Elements.TextBlock('WINNER WINNER', {
            size: 'ExtraLarge',
            color: 'Warning',
          }),
        ],
        { backgroundImage }
      ),
    ];
    klaxon.makeCard(content);
    const response = await klaxon.postCard();
    expect(response.status).to.be(200);
  });
});
