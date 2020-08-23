import Ajv from 'ajv';
import axios from 'axios';
import formatMessage from './message';
import messageSchema from './message/schema';

class TeamsKlaxon {
  constructor(webhook) {
    this.webhook = webhook;
  }

  async log(message) {
    const ajv = new Ajv();
    const valid = ajv.validate(messageSchema, message);
    if (!valid) throw new Error(ajv.errors);
    const formattedMessage = formatMessage(message);
    try {
      await axios.post(this.webhook, formattedMessage);
    } catch (e) {
      console.log(e);
      throw new Error('Error logging message.');
    }
  }
}

export default TeamsKlaxon;
