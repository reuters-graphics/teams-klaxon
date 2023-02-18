export type Color =
  | 'Default'
  | 'Dark'
  | 'Light'
  | 'Accent'
  | 'Good'
  | 'Warning'
  | 'Attention';
export type FontType = 'Default' | 'Monospace';
export type Spacing =
  | 'None'
  | 'Small'
  | 'Medium'
  | 'Large'
  | 'ExtraLarge'
  | 'Padding';
export type Weight = 'Lighter' | 'Default' | 'Bolder';
export type Size = 'Small' | 'Default' | 'Medium' | 'Large' | 'ExtraLarge';

export type HorizontalAlignment = 'Left' | 'Center' | 'Right';
export type VerticalAlignment = 'Top' | 'Center' | 'Bottom';

/**
 * @see {@link index.Elements.TextBlock Elements.TextBlock}
 */
export interface TextBlock {
  type: 'TextBlock';
  text: string;
  wrap?: Boolean;
  size?: Size;
  weight?: Weight;
  separator?: Boolean;
  color?: Color;
  isSubtle?: Boolean;
  fontType?: FontType;
  spacing?: Spacing;
  height?: 'stretch';
  id?: string;
}

/**
 * @see {@link index.Elements.Fact Elements.Fact}
 */
export interface Fact {
  title: string;
  value: string;
}

/**
 * @see {@link index.Elements.FactSet Elements.FactSet}
 */
export interface FactSet {
  type: 'FactSet';
  facts: Fact[];
  spacing?: Spacing;
  separator?: Boolean;
  height?: 'stretch';
  id?: string;
}

export interface SelectActionOpenUrl {
  type: 'Action.OpenUrl';
  url: string;
  title?: string;
}

export type ImageSize = 'Small' | 'Medium' | 'Large';

/**
 * @see {@link index.Elements.Image Elements.Image}
 */
export interface Image {
  type: 'Image';
  url: string;
  separator?: Boolean;
  altText?: string;
  horizontalAlignment?: HorizontalAlignment;
  selectAction?: SelectActionOpenUrl;
}

/**
 * @see {@link index.Elements.ImageSet Elements.ImageSet}
 */
export interface ImageSet {
  type: 'ImageSet';
  images: Image[];
  imageSize?: ImageSize;
  spacing?: Spacing;
  separator?: Boolean;
  height?: 'stretch';
  id?: string;
  horizontalAlignment?: HorizontalAlignment;
}

/**
 * @see {@link index.Elements.ActionOpenUrl Elements.ActionOpenUrl}
 */
export type ActionOpenUrl = SelectActionOpenUrl;

/**
 * @see {@link index.Elements.ActionSet Elements.ActionSet}
 */
export interface ActionSet {
  type: 'ActionSet';
  actions: ActionOpenUrl[];
  spacing?: Spacing;
  separator?: Boolean;
  height?: 'stretch';
  id?: string;
  horizontalAlignment?: HorizontalAlignment;
}

export interface BackgroundImage {
  url: string;
  horizontalAlignment?: HorizontalAlignment;
  verticalAlignment?: VerticalAlignment;
  /**
   * Unset represents a default of "Cover".
   */
  fillMode?: 'Repeat' | 'RepeatVertically' | 'RepeatHorizontally';
}

export interface Container {
  type: 'Container';
  backgroundImage?: BackgroundImage;
  selectAction?: SelectActionOpenUrl;
  height?: 'stretch';
  minHeight?: string;
  verticalContentAlignment?: VerticalAlignment;
  bleed?: Boolean;
}

export interface Column {
  type: 'Column';
  spacing?: Spacing;
  separator?: Boolean;
  height?: 'stretch';
  id?: string;
  horizontalAlignment?: HorizontalAlignment;
  /**
   * Width of the column.
   *
   * Example: `'auto'`, `'stretch'`, `'60px'`, `50` (percent)
   **/
  width?: string | number;
  /** Example: `'50px'` */
  minHeight: string;
  items: (TextBlock | Image | FactSet)[];
}

export interface ColumnSet {
  type: 'ColumnSet';
  columns: [];
  selectAction?: SelectActionOpenUrl;
  spacing?: Spacing;
  separator?: Boolean;
  height?: 'stretch';
  id?: string;
  horizontalAlignment?: HorizontalAlignment;
}

/**
 * Possible card content items.
 */
export type ContentItem =
  | Image
  | ImageSet
  | TextBlock
  | FactSet
  | ActionSet
  | Container
  | ColumnSet;

/**
 * Adaptive card content
 */
export interface AdaptiveCardContent {
  $schema: 'http://adaptivecards.io/schemas/adaptive-card.json';
  type: 'AdaptiveCard';
  version: '1.2';
  body: ContentItem[];
}

/**
 * Adaptive card
 */
export interface AdaptiveCard {
  contentType: 'application/vnd.microsoft.card.adaptive';
  contentUrl: null;
  content: AdaptiveCardContent;
}

/**
 * A Team's Incoming Webhook message
 */
export interface Message {
  type: 'message';
  attachments: AdaptiveCard[];
}
