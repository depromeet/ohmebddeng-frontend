import { render } from '@/utils/test-utils';
import Home from '.';

describe('index.tsx', () => {
  it('should render component in document', () => {
    const { container } = render(<Home />);
    expect(container).toBeInTheDocument();
  });
});
