import * as types from './types';

/**
 * @example
 * ```javascript
 * import { Elements } from '@reuters-graphics/teams-klaxons';
 *
 * Elements.TextBlock('👋 Hello _world_!');
 * ```
 *
 * @param text Markdown-friendly string.
 * @param options Additional {@link types.TextBlock TextBlock} options
 */
export const TextBlock = (
  text: string,
  options?: Omit<types.TextBlock, 'type' | 'text'>
) => {
  return {
    type: 'TextBlock',
    text,
    ...(options || {}),
  } as types.TextBlock;
};

/**
 * @example
 * ```javascript
 * import { Elements } from '@reuters-graphics/teams-klaxons';
 *
 * Elements.Fact('name', 'Jane Doe');
 * ```
 *
 * **Note:** Use this within a {@link FactSet}, not on its own.
 *
 * @param title Title
 * @param value Markdown-friendly value
 */
export const Fact = (title: string, value: string) => {
  return {
    title,
    value,
  } as types.Fact;
};

/**
 * @example
 * ```javascript
 * import { Elements } from '@reuters-graphics/teams-klaxons';
 *
 * Elements.FactSet([
 *   Elements.Fact('name', 'Jane Doe'),
 *   Elements.Fact('age', '33'),
 * ]);
 * ```
 * @param facts Facts
 * @param options Additional {@link types.FactSet FactSet} options
 */
export const FactSet = (
  facts: types.Fact[],
  options?: Omit<types.FactSet, 'type' | 'facts'>
) => {
  return {
    type: 'FactSet',
    facts,
    ...(options || {}),
  } as types.FactSet;
};

/**
 * @example
 * ```javascript
 * import { Elements } from '@reuters-graphics/teams-klaxons';
 *
 * Elements.Image('https://.../image.jpg');
 * ```
 *
 * @param url The image's URL
 * @param openUrl A URL to open when the image is clicked
 * @param options Additional {@link types.Image Image} options
 */
export const Image = (
  url: string,
  openUrl: string,
  options?: Omit<types.Image, 'type' | 'url'>
) => {
  return {
    type: 'Image',
    url,
    selectAction: openUrl ? ActionOpenUrl(openUrl, 'Open') : undefined,
    ...(options || {}),
  } as types.Image;
};

/**
 * @example
 * ```javascript
 * import { Elements } from '@reuters-graphics/teams-klaxons';
 *
 * Elements.ImageSet([
 *   Elements.Image('https://...'),
 *   Elements.Image('https://...'),
 * ]);
 * ```
 *
 * @param images Array of images
 * @param options Addition {@link types.ImageSet ImageSet} options
 */
export const ImageSet = (
  images: types.Image[],
  options?: Omit<types.ImageSet, 'type' | 'images'>
) => {
  return {
    type: 'ImageSet',
    images,
    ...(options || {}),
  } as types.ImageSet;
};

/**
 * @example
 * ```javascript
 * import { Elements } from '@reuters-graphics/teams-klaxons';
 *
 * Elements.ActionOpenUrl('https://...', 'My site');
 * ```
 *
 * **Note:** Use this element within an {@link ActionSet}, not on its own.
 *
 * @param url URL of link to open
 * @param title Title of the link
 */
export const ActionOpenUrl = (url: string, title: string) => {
  return {
    type: 'Action.OpenUrl',
    url,
    title,
  } as types.ActionOpenUrl;
};

/**
 * @example
 * ```javascript
 * import { Elements } from '@reuters-graphics/teams-klaxons';
 *
 * Elements.ActionSet([
 *   Elements.ActionOpenUrl('https://...', 'My site'),
 *   Elements.ActionOpenUrl('https://...', 'My other site'),
 * ]);
 * ```
 * @param actions Actions
 * @param options Additional {@link types.ActionSet ActionSet} options
 */
export const ActionSet = (
  actions: types.ActionOpenUrl[],
  options?: Omit<types.ActionSet, 'type' | 'actions'>
) => {
  return {
    type: 'ActionSet',
    actions,
    ...(options || {}),
  } as types.ActionSet;
};

/**
 * @example
 * ```javascript
 * import { Elements } from '@reuters-graphics/teams-klaxons';
 *
 * const backgroundImage = Elements.BackgroundImage('https://.../image.jpg');
 *
 * Elements.Container([
 *   Element.TextBox('Hello'),
 * ], { backgroundImage });
 * ```
 *
 * **Note:** Use this element within a {@link Container}, not on its own.
 *
 * @param url Image URL
 * @param options Addition {@link types.BackgroundImage BackgroundImage} options
 */
export const BackgroundImage = (
  url: string,
  options?: Omit<types.BackgroundImage, 'url'>
) => {
  return {
    url,
    ...(options || {}),
  } as types.BackgroundImage;
};

/**
 * @example
 * ```javascript
 * import { Elements } from '@reuters-graphics/teams-klaxons';
 *
 * Elements.Container([
 *   Element.TextBox('Hello'),
 * ], { minHeight: '60px' });
 * ```
 *
 * @param items Content items
 * @param options Additional {@link types.Container Container} options
 */
export const Container = (
  items: types.ContentItem[],
  options?: Omit<types.Container, 'type' | 'items'>
) => {
  return {
    type: 'Container',
    items,
    ...(options || {}),
  } as types.Container;
};

/**
 * @example
 * ```javascript
 * import { Elements } from '@reuters-graphics/teams-klaxons';
 *
 * Elements.Column([
 *   Element.FactSet([
 *     Element.Fact('Name', 'Bot'),
 *     Element.Fact('Age', '23'),
 *   ]),
 * ]);
 * ```
 *
 * **Note:** Use this element within a {@link ColumnSet}, not on its own.
 *
 * @param items Content items
 * @param options Additional {@link types.Column Column} options
 */
export const Column = (
  items: (types.TextBlock | types.Image | types.FactSet)[],
  options?: Omit<types.Column, 'type' | 'items'>
) => {
  return {
    type: 'Column',
    items,
    ...(options || {}),
  } as types.Column;
};

/**
 * @example
 * ```javascript
 * import { Elements } from '@reuters-graphics/teams-klaxons';
 *
 * const column1 = Elements.Column([
 *   Elements.Image('https://.../image.jpg');
 * ], { width: '50px' });
 *
 * const column2 = Elements.Column([
 *   Element.TextBox('Jane Doe'),
 * ]);
 *
 * Elements.ColumnSet([
 *   column1,
 *   column2,
 * ]);
 * ```
 * @param columns {@link Column Columns}
 * @param options Additional {@link types.ColumnSet ColumnSet} options
 * @returns
 */
export const ColumnSet = (
  columns: types.Column[],
  options?: Omit<types.ColumnSet, 'type' | 'columns'>
) => {
  return {
    type: 'ColumnSet',
    columns,
    ...(options || {}),
  } as types.ColumnSet;
};
