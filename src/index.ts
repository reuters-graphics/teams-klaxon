import * as Elements from './elements.js';

import type { AdaptiveCard, AdaptiveCardContent, ContentItem, Message, TextBlock } from './types';

import axios from 'axios';

export class TeamsKlaxon {
  /**
   * A Teams [Incoming Webhook](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=dotnet)
   */
  webhook: string;
  /** Card contents */
  content?: AdaptiveCardContent;

  /**
   * @example
   * ```javascript
   * const klaxon = new TeamsKlaxon('https://trten.webhook.office.com/...');
   * ```
   * 
   * @param webhook A Teams [Incoming Webhook](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=dotnet)
   */
  constructor(webhook: string) {
    this.webhook = webhook;
  }

  /**
   * Set the content of a card.
   * @param contentItems Card contents
   */
  setContent(contentItems: ContentItem[]) {
    this.content = {
      $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
      type: 'AdaptiveCard',
      version: '1.2',
      body: contentItems,
    };
  }

  /**
   * @private
   */
  _formatMessage() {
    if (!this.content) return;

    const adaptiveCard: AdaptiveCard = {
      contentType: 'application/vnd.microsoft.card.adaptive',
      contentUrl: null,
      content: this.content,
    };
    const message: Message = {
      type: 'message',
      attachments: [adaptiveCard],
    };
    return message;
  }

  /**
   * Post a card with preset content to Teams.
   * @returns 
   */
  async post() {
    const message = this._formatMessage();
    if(!message) return;
    try {
      await axios.post(this.webhook, message, {
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (e) {
      console.error('Error posting message');
      throw e;
    }
  }
}

export { Elements };
export default TeamsKlaxon;
