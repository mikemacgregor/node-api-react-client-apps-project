/* not sure if this is best way to do this or if I even like this structure, 
   but in trying to combine Bootstrap with styled components led me to this: 
   https://codesandbox.io/s/2vpm40qk90?file=/index.js:63-102
   and decided to keep it, for now, since it "works" */

import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledButton = 
  styled(Button)`
    margin-top: 10px;
    float: right;
  `;

export default StyledButton;