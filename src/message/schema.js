const schema = {
  type: 'object',
  properties: {
    title: { type: 'string' },
    text: { type: 'string' },
    facts: {
      type: 'object',
      patternProperties: {
        '.*': { type: 'string' },
      },
      additionalProperties: false,
    },
    images: {
      type: 'array',
      items: [
        {
          type: 'string',
          format: 'uri',
        },
      ],
    },
    stackTrace: {
      type: 'object',
      properties: {
        title: { type: 'string' },
        code: { type: 'string' },
      },
      required: ['code'],
    },
    linkButtons: {
      type: 'array',
      items: [{
        type: 'object',
        properties: {
          name: { type: 'string' },
          link: {
            type: 'string',
            format: 'uri',
          },
        },
        required: ['name', 'link'],
      }],
    },
  },
};

export default schema;
