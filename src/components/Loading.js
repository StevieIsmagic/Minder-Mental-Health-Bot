import React from 'react';
import { withTheme } from 'styled-components';

import { MessageBlobBot, MessageBlobUser } from '../primitives/MessageBlob';
import Avatar from '..primitives/Avatar';
import DancingDot from '../primitives/DancingDot';

const Message = (props) => {
  const { theme } = props;

  return (
    <section>
      {props.bot &&
        <div>

        </div>
      }
      {props.user &&
        <div>

        </div>
      }
      </section>
  )
}