/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 */

export interface Options {
  face?: (
    | 'variant01'
    | 'variant02'
  )[];
  body?: (
    | 'variant01'
    | 'variant02'
    | 'variant07'
    | 'variant09'
    | 'variant08'
    | 'variant06'
    | 'variant05'
    | 'variant03'
    | 'variant04'
  )[];
  top?: (
    | 'variant01'
    | 'variant02'
    | 'variant03'
    | 'variant04'
    | 'variant08'
    | 'variant09'
    | 'variant07'
    | 'variant06'
    | 'variant05'
  )[];
  mustache?: (
    | 'variant01'
  )[];
  mustacheProbability?: number;
  topColor?: string[];
  bodyColor?: string[];
}

export type ColorPickCollection = Record<string, string>;

export type ComponentGroup = Record<string, ComponentGroupItem>;
export type ComponentGroupCollection = Record<string, ComponentGroup>;
export type ComponentGroupItem = (
  components: ComponentPickCollection,
  colors: ColorPickCollection
) => string;
export type ComponentPickCollection = Record<string, ComponentPick>;
export type ComponentPick =
  | {
      name: string;
      value: ComponentGroupItem;
    }
  | undefined;
