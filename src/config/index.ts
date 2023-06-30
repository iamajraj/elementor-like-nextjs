import Button from '../components/elem_components/Button';
import FlexLayout, {
  FlexLayoutPlaceholder,
} from '../components/elem_components/FlexLayout';

export const COMPONENTS = {
  Button: {
    Node: Button,
    defaultProps: {
      text: 'Demo Button',
      editable: true,
    },
    placeholder: null,
  },
  FlexLayout: {
    Node: FlexLayout,
    defaultProps: {},
    placeholder: FlexLayoutPlaceholder,
  },
};
