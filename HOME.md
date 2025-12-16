[![npm version](https://badge.fury.io/js/%40reuters-graphics%2Fteams-klaxon.svg)](https://badge.fury.io/js/%40reuters-graphics%2Fteams-klaxon) [![Reuters open source software](https://badgen.net/badge/Reuters/open%20source/?color=ff8000)](https://github.com/reuters-graphics/)

Create and send [Adaptive Cards](https://adaptivecards.io/) to a Microsoft Teams channel.

## Usage

Setup a Microsoft Teams [incoming webhook](https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook) in a channel, then install the library.

```bash
yarn add @reuters-graphics/teams-klaxon
```

Import and create a new `TeamsKlaxon` instance with your webhook URL.

```javascript
import { TeamsKlaxon } from '@reuters-graphics/teams-klaxon';

// Your incoming webhook
const webhook = 'https://outlook.office.com/webhook/...';

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
// 200
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
