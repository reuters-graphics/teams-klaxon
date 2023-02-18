import * as Elements from './elements.js';

import type {
  AdaptiveCard,
  AdaptiveCardContent,
  ContentItem,
  Message,
} from './types';

import Ajv from 'ajv';
import adaptiveCardSchema from './schemas/adaptive-card.json';
import addFormats from 'ajv-formats';
import axios from 'axios';
import metaSchema from './schemas/draft-06.json';

const ajv = new Ajv({ strict: false });
ajv.addMetaSchema(metaSchema);
addFormats(ajv);
const validate = ajv.compile(adaptiveCardSchema);

export class TeamsKlaxon {
  /** @private */
  _webhook: string;
  /** @private */
  _card?: AdaptiveCardContent;

  /**
   * @example
   * ```javascript
   * const klaxon = new TeamsKlaxon('https://trten.webhook.office.com/...');
   * ```
   *
   * @param webhook A Teams [Incoming Webhook](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=dotnet)
   */
  constructor(webhook: string) {
    this._webhook = webhook;
  }

  /**
   * Make an adaptive card.
   * @param contentItems Card contents
   */
  makeCard(contentItems: ContentItem[]) {
    this._card = {
      $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
      type: 'AdaptiveCard',
      version: '1.2',
      body: contentItems,
    };
  }

  /** @private */
  _formatMessage() {
    if (!this._card) return;

    const adaptiveCard: AdaptiveCard = {
      contentType: 'application/vnd.microsoft.card.adaptive',
      contentUrl: null,
      content: this._card,
    };
    const message: Message = {
      type: 'message',
      attachments: [adaptiveCard],
    };
    return message;
  }

  /**
   * Verify a card is valid.
   * @returns {Boolean}
   */
  cardIsValid() {
    return validate(this._card);
  }

  /**
   * Post your card to Teams.
   * @returns
   */
  async postCard() {
    if (!this._card) throw new Error('No card made yet');
    if (!this.cardIsValid()) throw new Error('Invalid content');
    const message = this._formatMessage();
    if (!message) return;
    try {
      const response = await axios.post(this._webhook, message, {
        headers: { 'Content-Type': 'application/json' },
      });
      return response;
    } catch (e) {
      console.error('Error posting message');
      throw e;
    }
  }
}

export { Elements };
