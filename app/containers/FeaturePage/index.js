/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './feature.page.message';
import List from './styled/List';
import ListItem from './styled/ListItem';
import ListItemTitle from './styled/ListItemTitle';

export default function FeaturePage() {
  return (
    <div>
      <Helmet>
        <title>Feature Page</title>
        <meta
          name="description"
          content="Feature page of React.js application"
        />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <List>
        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.scaffoldingHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.scaffoldingMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.feedbackHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.feedbackMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.routingHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.routingMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.networkHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.networkMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.intlHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.intlMessage} />
          </p>
        </ListItem>
      </List>
    </div>
  );
}
