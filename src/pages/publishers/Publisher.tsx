import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPublisher } from "../../api/api";
import { IPublisherDetails } from "../../interfaces/IPublisherDetails";

const Publisher = () => {
  const { id } = useParams();
  const [publisher, setPublisher] = useState<IPublisherDetails | null>(null);

  useEffect(() => {
    const fetchPublisher = async () => {
      const fetchedPublisher: IPublisherDetails = await getPublisher(id!);
      console.log(fetchedPublisher);
      setPublisher(fetchedPublisher);
    };
    fetchPublisher();
  }, [id]);
  return <div>Publisher - {publisher?.newsPapers[0]?.abstract}</div>;
};

export default Publisher;
