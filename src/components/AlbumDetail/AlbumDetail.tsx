import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleAlbum } from "../../apiCalls";
import './AlbumDetail.css'

interface OneAlbum {
  id: number;
  status: string;
  year: number;
  resource_url: string;
  uri: string;
  artists: {
    name: string;
    anv: string;
    join: string;
    role: string;
    tracks: string;
    id: number;
    resource_url: string;
  }[];
  artists_sort: string;
  labels: {
    name: string;
    catno: string;
    entity_type: string;
    entity_type_name: string;
    id: number;
    resource_url: string;
  }[];
  series: any[]; // You might want to define a type for series if needed
  companies: {
    name: string;
    catno: string;
    entity_type: string;
    entity_type_name: string;
    id: number;
    resource_url: string;
  }[];
  formats: {
    name: string;
    qty: string;
    descriptions: string[];
  }[];
  data_quality: string;
  community: {
    have: number;
    want: number;
    rating: {
      count: number;
      average: number;
    };
    submitter: {
      username: string;
      resource_url: string;
    };
    contributors: {
      username: string;
      resource_url: string;
    }[];
    data_quality: string;
    status: string;
  };
  format_quantity: number;
  date_added: string;
  date_changed: string;
  num_for_sale: number;
  lowest_price: number;
  master_id: number;
  master_url: string;
  title: string;
  country: string;
  released: string;
  notes: string;
  released_formatted: string;
  identifiers: {
    type: string;
    value: string;
    description: string;
  }[];
  videos: {
    uri: string;
    title: string;
    description: string;
    duration: number;
    embed: boolean;
  }[];
  genres: string[];
  styles: string[];
  tracklist: {
    position: string;
    type_: string;
    title: string;
    duration: string;
  }[];
  extraartists: {
    name: string;
    anv: string;
    join: string;
    role: string;
    tracks: string;
    id: number;
    resource_url: string;
  }[];
  images: {
    type: string;
    uri: string;
    resource_url: string;
    uri150: string;
    width: number;
    height: number;
  }[];
  thumb: string;
  estimated_weight: number;
  blocked_from_sale: boolean;
}

interface Artist {
  name: string;
}

interface BasicInformation {
  title: string;
  year: number;
  cover_image: string;
  master_id: string;
  artists: Artist[];
}

interface AlbumDetailPageProps {
  allAlbums: BasicInformation[];
}

const AlbumDetailPage = (props: AlbumDetailPageProps) => {
  const { allAlbums } = props;
  const [singleAlbum, setSingleAlbum] = useState<OneAlbum | {}>({});
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const params = useParams()
  console.log("PARAMS", params.album_id)
  const id = parseInt(params.album_id as string);
  

  const handleHomeClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchSingleAlbum = async () => {
      try {
        const data = await getSingleAlbum(id);
        setSingleAlbum(data);
      } catch (err) {
        if (err instanceof Error && err.message) {
          setError(err.message);
        } else {
          setError("An error fetching the album has occured");
        }
      }
    };

    fetchSingleAlbum();
  }, [id]); 

console.log("SINGLE ALBUM", singleAlbum)

  const tracks = (singleAlbum as OneAlbum).tracklist?.map((album) => (
    <div className='tracks' key={album.title}>
      <p>Song: {album.title}</p>
      <p>Duration: {album.duration}</p>
      <button className='add-button'>Add</button>
    </div>
  ));

  return (
    <section>
      <h2 className="album-title">Album Title: {(singleAlbum as OneAlbum).title}</h2>
      <h3 className="artist-name">Artist: {(singleAlbum as OneAlbum).artists?.[0]?.name}</h3>
      <div className='album-container'>
        <div className='all-tracks'>{tracks}</div>
      </div>
    </section>
  );
};

export default AlbumDetailPage;
