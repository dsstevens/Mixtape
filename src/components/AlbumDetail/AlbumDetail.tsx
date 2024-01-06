import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleAlbum } from "../../apiCalls";

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

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleAlbum } from "../../apiCalls";

interface OneAlbum {
  // ... (your existing interface)
}

const AlbumDetailPage: React.FC = () => {
  const [singleAlbum, setSingleAlbum] = useState<OneAlbum | {}>({});
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const id:number = 63993; // Declare id before useEffect

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
          setError("An unknown error occurred");
        }
      }
    };

    fetchSingleAlbum();
  }, [id]); 

  const tracks = (singleAlbum as OneAlbum).tracklist?.map((album) => (
    <div key={album.title}>
      <p>{album.title}</p>
      <p>{album.duration}</p>
      <button>Add</button>
    </div>
  ));

  return (
    <section>
      <h2 className="album-title">{(singleAlbum as OneAlbum).title}</h2>
      <h3 className="artist-name">
        {(singleAlbum as OneAlbum).artists?.[0]?.name}
      </h3>
      <img src={(singleAlbum as OneAlbum).cover_image} alt="Album Cover" />
      <section>
        <p>{tracks}</p>
      </section>
    </section>
  );
};

export default AlbumDetailPage;
