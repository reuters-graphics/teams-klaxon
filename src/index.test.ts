import { describe, it, expect } from 'vitest';
import { Elements, TeamsKlaxon } from './index.js';

const klaxon = new TeamsKlaxon('');

describe('TeamsKlaxon tests', () => {
  it('Should validate TextBlock elements', () => {
    klaxon.makeCard([Elements.TextBlock("Hello **world**!\n\nI'm a bot.")]);
    const isValid = klaxon.cardIsValid();
    expect(isValid).toBe(true);
  });

  it('Should validate Factset elements', () => {
    klaxon.makeCard([
      Elements.TextBlock("Hello **world**!\n\nI'm a bot."),
      Elements.FactSet([
        Elements.Fact('name', 'Botty McBotFace'),
        Elements.Fact('age', '12'),
      ]),
    ]);
    const isValid = klaxon.cardIsValid();
    expect(isValid).toBe(true);
  });

  it('Should validate Image elements', () => {
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
    expect(isValid).toBe(true);
  });

  it('Should not validate Image with bad URLs', () => {
    klaxon.makeCard([Elements.Image('aa bb cc')]);
    const isValid = klaxon.cardIsValid();
    expect(isValid).toBe(false);
  });

  it('Should validate ImageSet elements', () => {
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
    expect(isValid).toBe(true);
  });

  it('Should validate Container elements', () => {
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
    expect(isValid).toBe(true);
  });

  it('Should validate ColumnSet elements', () => {
    const columns = Elements.ColumnSet([
      Elements.Column(
        [
          Elements.Image(
            'https://www.reuters.com/graphics/BRITAIN-ECONOMY/movakleekva/chart_eikon.jpg'
          ),
        ],
        { width: '60px' }
      ),
      Elements.Column([Elements.FactSet([Elements.Fact('name', 'Jane Doe')])]),
    ]);

    klaxon.makeCard([columns]);
    const isValid = klaxon.cardIsValid();
    expect(isValid).toBe(true);
  });

  it('Should validate ActionSet', () => {
    klaxon.makeCard([
      Elements.ActionSet([
        Elements.ActionOpenUrl('https://www.google.com', 'Google'),
        Elements.ActionOpenUrl('https://www.wikipedia.org', 'Wikipedia'),
      ]),
    ]);
    const isValid = klaxon.cardIsValid();
    expect(isValid).toBe(true);
  });

  it('Should validate a buncha elements', () => {
    const columns = Elements.ColumnSet([
      Elements.Column(
        [
          Elements.Image(
            'https://www.reuters.com/graphics/BRITAIN-ECONOMY/movakleekva/chart_eikon.jpg'
          ),
        ],
        { width: '60px' }
      ),
      Elements.Column([Elements.FactSet([Elements.Fact('name', 'Jane Doe')])]),
    ]);
    const container = Elements.Container(
      [Elements.TextBlock("Hello **world**!\n\nI'm a bot.")],
      {
        backgroundImage: Elements.BackgroundImage(
          'https://www.reuters.com/graphics/BRITAIN-ECONOMY/movakleekva/chart_eikon.jpg'
        ),
      }
    );
    const imageSet = Elements.ImageSet([
      Elements.Image(
        'https://www.reuters.com/graphics/TJX-RESULTS/dwvkdeoempm/chart.png'
      ),
      Elements.Image(
        'https://www.reuters.com/graphics/BRITAIN-ECONOMY/movakleekva/chart_eikon.jpg',
        'https://www.reuters.com/graphics/BRITAIN-ECONOMY/movakleekva/chart_eikon.jpg'
      ),
    ]);

    const textBlock = Elements.TextBlock("Hello **world**!\n\nI'm a bot.");

    klaxon.makeCard([textBlock, columns, container, imageSet]);
    const isValid = klaxon.cardIsValid();
    expect(isValid).toBe(true);
  });
});
