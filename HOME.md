[![npm version](https://badge.fury.io/js/%40reuters-graphics%2Fteams-klaxon.svg)](https://badge.fury.io/js/%40reuters-graphics%2Fteams-klaxon) [![Reuters open source software](https://badgen.net/badge/Reuters/open%20source/?color=ff8000)](https://github.com/reuters-graphics/)

Create and send [Adaptive Cards](https://adaptivecards.io/) to a Microsoft Teams channel.

## Usage

### Setting up a Teams Webhook

Create an [incoming webhook with Workflows](https://support.microsoft.com/en-us/office/create-incoming-webhooks-with-workflows-for-microsoft-teams-8ae491c7-0394-4861-ba59-055e33f75498) for Microsoft Teams:

1. In your Teams channel, click the **...** menu and select **Workflows**
2. Search for "Post to a channel when a webhook request is received"
3. Configure the workflow to post to your desired channel and copy the webhook URL

### Installation

```bash
pnpm add @reuters-graphics/teams-klaxon
```

### Basic Usage

Import and create a new `TeamsKlaxon` instance with your webhook URL.

```javascript
import { TeamsKlaxon } from '@reuters-graphics/teams-klaxon';

// Your Teams Workflow webhook URL
const webhook = 'https://...';

const klaxon = new TeamsKlaxon(webhook);
```

Use element constructors to create your card's content...

```javascript
import { Elements } from '@reuters-graphics/teams-klaxon';

const cardContent = [Elements.TextBox('Hello _world_!', { size: 'Large' })];
```

... or create your card content [from scratch](https://adaptivecards.io/explorer/).

```javascript
const cardContent = [
  {
    type: 'TextBox',
    text: 'Hello _world_!',
    size: 'Large',
  },
];
```

Then make and post your card.

```javascript
klaxon.makeCard(cardContent);

const response = await klaxon.postCard();

response.status;
// 202
```

**[Read the API docs](https://reuters-graphics.github.io/teams-klaxon/modules/index.html) for more info.**

## Constructor coverage

Element constructors cover a subset of the available [Adaptive Card schema](https://adaptivecards.io/explorer/AdaptiveCard.html), including:

| _Elements_ |     |
| ---------- | --- |
| TextBlock  | ✅  |
| Image      | ✅  |

| _Containers_ |     |
| ------------ | --- |
| ActionSet    | ✅  |
| Container    | ✅  |
| ColumnSet    | ✅  |
| Column       | ✅  |
| FactSet      | ✅  |
| Fact         | ✅  |
| ImageSet     | ✅  |
