/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 */

import type { StyleSchema } from '@dicebear/core';

export const schema: StyleSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "properties": {
    "body": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "variant01",
          "variant02",
          "variant07",
          "variant09",
          "variant08",
          "variant06",
          "variant05",
          "variant03",
          "variant04"
        ]
      },
      "default": [
        "variant01",
        "variant02",
        "variant06",
        "variant05",
        "variant03",
        "variant04"
      ]
    },
    "bodyColor": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^(transparent|[a-fA-F0-9]{6})$"
      },
      "default": [
        "d3d0ce",
        "8a7a6f",
        "84a8b7",
        "ffb500",
        "ac3d3e",
        "c68152",
        "80c79a",
        "9b93bb",
        "e06e69"
      ]
    },
    "face": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "variant01",
          "variant02"
        ]
      },
      "default": [
        "variant01"
      ]
    },
    "mustache": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "variant01"
        ]
      },
      "default": [
        "variant01"
      ]
    },
    "mustacheProbability": {
      "type": "integer",
      "minimum": 0,
      "maximum": 100,
      "default": 20
    },
    "top": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "variant01",
          "variant02",
          "variant03",
          "variant04",
          "variant08",
          "variant09",
          "variant07",
          "variant06",
          "variant05"
        ]
      },
      "default": [
        "variant01",
        "variant02",
        "variant03",
        "variant04",
        "variant06",
        "variant05"
      ]
    },
    "topColor": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^(transparent|[a-fA-F0-9]{6})$"
      },
      "default": [
        "ce7d2f",
        "d9d9d9",
        "803b37"
      ]
    }
  }
};
