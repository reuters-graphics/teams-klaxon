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
 * @param options Additional text block options
 */
export const TextBlock = (text: string, options: Omit<types.TextBlock, 'type' | 'text'>) => {
  return {
    type: 'TextBlock',
    text,
    ...(options || {}),
  } as types.TextBlock;
}

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
    title, value
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
 * @param options Additional FactSet options
 */
export const FactSet = (facts: types.Fact[], options: Omit<types.FactSet, 'type' | 'facts'>) => {
  return {
    type: 'FactSet',
    facts,
    ...(options || {}),
  } as types.FactSet;
}

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
 * @param options Additional image options
 */
export const Image = (url: string, openUrl: string, options: Omit<types.Image, 'type' | 'url'>) => {
  return {
    type: 'Image',
    url,
    selectAction: openUrl ? ActionOpenUrl(openUrl, 'Open') : undefined,
    ...(options || {}),
  } as types.Image;
}

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
 * @param options Addition ImageSet options
 */
export const ImageSet = (images: types.Image[], options: Omit<types.ImageSet, 'type' | 'images'> = {}) => {
  return {
    type: 'ImageSet',
    images,
    ...options,
  } as types.ImageSet;
}

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
 * @param options Additional ActionSet options
 */
export const ActionSet = (actions: types.ActionOpenUrl[], options: Omit<types.ActionSet, 'type' | 'actions'> = {}) => {
  return {
    type: 'ActionSet',
    actions,
    ...options,
  } as types.ActionSet;
}
