export type Color = 'Default' | 'Dark' | 'Light' | 'Accent' | 'Good' | 'Warning' | 'Attention';
export type FontType = 'Default' | 'Monospace';
export type Spacing = 'None' | 'Small' | 'Medium' | 'Large' | 'ExtraLarge' | 'Padding';
export type Weight = 'Lighter' | 'Default' | 'Bolder';
export type Size = 'Small' | 'Default' | 'Medium' | 'Large' | 'ExtraLarge';

export type HorizontalAlignment = 'Left' | 'Center' | 'Right';
export type VerticalAlignment = 'Top' | 'Center' | 'Bottom';

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
};

export interface Fact {
  title: string;
  value: string;
}

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

export interface Image {
  type: 'Image';
  url: string;
  separator?: Boolean;
  altText?: string;
  horizontalAlignment?: HorizontalAlignment;
  selectAction?: SelectActionOpenUrl;
}

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

export type ActionOpenUrl = SelectActionOpenUrl;

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
  fillMode: 'Repeat' | 'RepeatVertically' | 'RepeatHorizontally';
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
   * Example: `'auto'`, `'stretch'`, `'60px'`, `50`
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
export type ContentItem = Image | ImageSet | TextBlock | FactSet | ActionSet | Container | ColumnSet;

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