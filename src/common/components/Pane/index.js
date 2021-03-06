import React from 'react';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

const Pane = ({ isOpen, onRequestClose, children, title }) => (
  <div>
    <SlidingPane
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      title={title}
      from="right"
      width="420px"
    >
      {children}
    </SlidingPane>
  </div>
);

export default Pane;
