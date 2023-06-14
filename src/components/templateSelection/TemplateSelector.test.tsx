import * as React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import TemplateSelector from '@/components/templateSelection/TemplateSelector';

describe('TemplateSelector component test', () => {
  it('display UI templates list', async () => {
    render(<TemplateSelector />);

    // Check if all thumbnails are rendered
    const thumbnailList = await screen.findAllByAltText('UI thumbnail');
    expect((thumbnailList).length).toBeGreaterThan(0);

    // Check if all item names are rendered
    const nameList = await screen.findAllByText(/^\w[\w\s]*/u);
    expect((nameList).length).toBeGreaterThan(0);
  });
});
