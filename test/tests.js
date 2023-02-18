import { Elements, TeamsKlaxon } from '../dist/index.js';

import expect from 'expect.js';

const klaxon = new TeamsKlaxon('');

describe('TeamsKlaxon tests', function() {
  this.timeout(30000);

  it('Should validate TextBlock elements', async function() {
    klaxon.makeCard([Elements.TextBlock("Hello **world**!\n\nI'm a bot.")]);
    const isValid = klaxon.cardIsValid();
    expect(isValid).to.be(true);
  });

  it('Should validate Factset elements', async function() {
    klaxon.makeCard([
      Elements.TextBlock("Hello **world**!\n\nI'm a bot."),
      Elements.FactSet([
        Elements.Fact('name', 'Botty McBotFace'),
        Elements.Fact('age', '12'),
      ]),
    ]);
    const isValid = klaxon.cardIsValid();
    expect(isValid).to.be(true);
  });

  it('Should validate Image elements', async function() {
    klaxon.makeCard([
      Elements.Image(
        'https://www.reuters.com/graphics/TJX-RESULTS/dwvkdeoempm/chart.png'
      ),
      Elements.Image(
        'https://www.reuters.com/graphics/BRITAIN-ECONOMY/movakleekva/chart_eikon.jpg',
        'https://www.reuters.com/graphics/BRITAIN-ECONOMY/movakleekva/chart_eikon.jpg'
      ),
    ]);
    const isValid = klaxon.cardIsValid();
    expect(isValid).to.be(true);
  });

  it('Should not validate Image with bad URLs', async function() {
    klaxon.makeCard([Elements.Image('aa bb cc')]);
    const isValid = klaxon.cardIsValid();
    expect(isValid).to.be(false);
  });

  it('Should validate ImageSet elements', async function() {
    klaxon.makeCard([
      Elements.ImageSet([
        Elements.Image(
          'https://www.reuters.com/graphics/TJX-RESULTS/dwvkdeoempm/chart.png'
        ),
        Elements.Image(
          'https://www.reuters.com/graphics/BRITAIN-ECONOMY/movakleekva/chart_eikon.jpg',
          'https://www.reuters.com/graphics/BRITAIN-ECONOMY/movakleekva/chart_eikon.jpg'
        ),
      ]),
    ]);
    const isValid = klaxon.cardIsValid();
    expect(isValid).to.be(true);
  });

  it('Should validate Container elements', async function() {
    const backgroundImage = Elements.BackgroundImage(
      'https://www.reuters.com/graphics/BRITAIN-ECONOMY/movakleekva/chart_eikon.jpg'
    );
    klaxon.makeCard([
      Elements.Container(
        [Elements.TextBlock("Hello **world**!\n\nI'm a bot.")],
        { backgroundImage }
      ),
    ]);
    const isValid = klaxon.cardIsValid();
    expect(isValid).to.be(true);
  });
});
