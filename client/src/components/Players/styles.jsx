/* not sure if this is best way to do this or if I even like this structure, 
   but in trying to combine Bootstrap with styled components led me to this: 
   https://codesandbox.io/s/2vpm40qk90?file=/index.js:63-102
   and decided to keep it since it "works", for now */

import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledButton = 
  styled(Button)`
    float: right;
  `;

export default StyledButton;