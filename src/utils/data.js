import { shape, bool, arrayOf, string } from 'prop-types';

export const dataState = {
  applicableData: '',
  contact: '',
  contentType: 'dataset',
  context: '',
  description: '',
  keyTakeaways: '',
  outcomes: [],
  owner: '',
  parameters: [],
  published: true,
  relevantPublications: [],
  spatialScales: [],
  technicalDetails: '',
  temporalScales: [],
  title: '',
  usesAndVisualizations: '',
  worldRegions: [],
};

export const dataType = shape({
  applicableData: string.isRequired,
  contact: string.isRequired,
  contentType: string.isRequired,
  context: string.isRequired,
  description: string.isRequired,
  keyTakeaways: string.isRequired,
  outcomes: arrayOf(string).isRequired,
  owner: string.isRequired,
  parameters: arrayOf(string).isRequired,
  published: bool.isRequired,
  relevantPublications: arrayOf(string).isRequired,
  spatialScales: arrayOf(string).isRequired,
  technicalDetails: string.isRequired,
  temporalScales: arrayOf(string).isRequired,
  title: string.isRequired,
  usesAndVisualizations: string.isRequired,
  worldRegions: arrayOf(string).isRequired,
});
