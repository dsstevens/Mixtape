import React from 'react';
import {useParams } from 'react-router-dom';
import { getOneAlbum } from '../../apiCalls';

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


const AlbumDetail = () => {
  return (
    <p>placeholder</p>
  );
};

export default AlbumDetail;
