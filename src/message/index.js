import getFacts from './sections/facts';
import getImages from './sections/images';
import getLinkButtons from './sections/linkButtons';
import getStackTrace from './sections/stackTrace';
import stripEmoji from 'emoji-strip';

const formatMessage = ({ color = '666666', title, text, facts, images, stackTrace, linkButtons }) => {
  const message = {
    '@context': 'https://schema.org/extensions',
    '@type': 'MessageCard',
    version: '1.0',
    themeColor: color,
    text,
  };

  if (!title && !text) {
    throw new Error('Message must have a title or text.');
  }

  if (title) {
    message.title = title;
    message.summary = stripEmoji(title);
    delete message.version;
  }

  if (facts || images || stackTrace) message.sections = [];

  if (facts) message.sections.push(getFacts(facts));
  if (images) message.sections.push(getImages(images));
  if (stackTrace) message.sections.push(getStackTrace(stackTrace));

  if (linkButtons) message.potentialAction = getLinkButtons(linkButtons);

  return message;
};

export default formatMessage;
