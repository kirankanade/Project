/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.FeaturePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Features',
  },
  scaffoldingHeader: {
    id: `${scope}.scaffolding.header`,
    defaultMessage: 'Feature1',
  },
  scaffoldingMessage: {
    id: `${scope}.scaffolding.message`,
    defaultMessage: `We can change a language of the project using one click`,
  },
  feedbackHeader: {
    id: `${scope}.feedback.header`,
    defaultMessage: 'Feature2',
  },
  feedbackMessage: {
    id: `${scope}.feedback.message`,
    defaultMessage: `We could change the theme of this project very easily using one click`,
  },
});
