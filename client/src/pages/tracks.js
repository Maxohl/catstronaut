import React from 'react';
import { Layout } from '../components';

import {useQuery,gql} from '@apollo/client';
import TrackCard from '../containers/track-card';
import QueryResult from '../components/query-result';

// Query constant, which must be in ALL_CAPS
// TRACKS query to retrieve all tracks
const TRACKS = gql`
query getTracks {
  tracksForHome {
    id
    title
    thumbnail
    length
    modulesCount
    author {
      name
      photo
    }
  }
}
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const {loading,error,data} = useQuery(TRACKS);

  return ( 
    <Layout grid>
        <QueryResult error={error} loading={loading} data={data}>
          {data?.tracksForHome?.map((track,index) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </QueryResult>
    </Layout>
  );
};

export default Tracks;
