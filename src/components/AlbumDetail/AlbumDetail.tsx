import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleAlbum } from '../../apiCalls';

interface OneAlbum {
  id: number;
  instance_id: number;
  date_added: string;
  rating: number;
  basic_information: {
    id: number;
    master_id: number;
    master_url: string;
    resource_url: string;
    thumb: string;
    cover_image: string;
    title: string;
    year: number;
    formats: Array<{
      name: string;
      qty: string;
      descriptions: string[];
    }>;
    artists: Array<{
      name: string;
      anv: string;
      join: string;
      role: string;
      tracks: string;
      id: number;
      resource_url: string;
    }>;
    labels: Array<{
      name: string;
      catno: string;
      entity_type: string;
      entity_type_name: string;
      id: number;
      resource_url: string;
    }>;
    genres: string[];
    styles: string[];
  };
}


const AlbumDetailPage() {
  const [singleAlbum, setSingleAlbum] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const params = useParams()
  const handleHomeClick = () => {
    navigate("/")
  }

  useEffect(() => {
    getSingleAlbum(id)
  }, [])

  let id = params.id

  const fetchSingleAlbum = (id) => {
    getSingleAlbum(id)
    .then((data) => {
      setSingleAlbum(data)
    }).catch((error) => {
      setError(error.message)
    })
  }

  const tracks = singleAlbum.tracklist.map(album => {
    return (
      <div>
        <p>{album.title}</p>
        <p>{album.duration}</p>
        <button>Add</button>
      </div>
    )
  })

  return (
    <section>
      <h2 className='album-title'>{singleAlbum.title}</h2>
      <h3 className='artist-name'>{singleAlbum.artists[0].name}</h3>
      <img src={singleAlbum.cover_image}/>
      <section>
        <p>{tracks}</p>
      </section>
    </section>
  )

}

