import './AlbumsByYear.css';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import getCollection from '../../apiCalls';

interface BasicInformation {
  title: string
  year: number
  cover_image: string
}

interface Release {
  basic_information: BasicInformation;
}

const AlbumsByYear = () => {
  const { year } = useParams<string>();
  const [albums, setAlbums] = useState<BasicInformation[]>([])

  const fetchAlbums = async () => {
    if (year) {
      try {
        let allAlbums: BasicInformation[] = []
        let page = 1
        const perPage = 50
        let totalPages = 1

        while (page <= totalPages) {
          const response = await getCollection(page, perPage)
          const newAlbums: BasicInformation[] = response.releases.map((release: Release) => release.basic_information);
          allAlbums = allAlbums.concat(newAlbums)

          if (page === 1) {
            totalPages = response.pagination.pages
          }
          page++
        }

        const yearNum = parseInt(year, 10);
        const filteredAlbums = allAlbums.filter(album => album.year === yearNum)
        setAlbums(filteredAlbums)
      } catch (error) {
        console.error('Error fetching collection:', error)
      }
    }
  };

  useEffect(() => {
    fetchAlbums()
  }, [year])

  console.log(albums)

  return (
    <div className="albums-by-year-container">
      <h2 className="year-title">Albums from the Year {year}</h2>
      <div className="album-grid">
        {albums.map((album, index) => (
          <div key={index} className="album">
            <img src={album.cover_image} /*alt={album.title}*/ />
            <p className="album-title">{album.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AlbumsByYear;
