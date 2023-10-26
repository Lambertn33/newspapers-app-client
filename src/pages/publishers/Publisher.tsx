import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getPublisher } from "../../api/api";

import { IPublisherDetails } from "../../interfaces/IPublisherDetails";

import {
  Header as PublisherHeader,
  NewsPapers as PublisherNewsPapers,
} from "../../components/publisher";

const Publisher = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [publisher, setPublisher] = useState<IPublisherDetails | null>(null);

  useEffect(() => {
    const fetchPublisher = async () => {
      const fetchedPublisher: IPublisherDetails = await getPublisher(id!);
      setPublisher(fetchedPublisher);
      setIsLoading(false);
    };
    fetchPublisher();
  }, [id]);
  return (
    <>
      {!isLoading && (
        <>
          <PublisherHeader publisher={publisher!} />
          {publisher?.newsPapers?.length! > 0 && (
              <PublisherNewsPapers newspapers={publisher?.newsPapers} />
          )}
        </>
      )}
    </>
  );
};

export default Publisher;
