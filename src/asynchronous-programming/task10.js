/* eslint-disable import/prefer-default-export */
export class Musician {
  constructor(albumsUrl) {
    this.albumsUrl = albumsUrl;
  }

  async getAlbums() {
    const response = await fetch(this.albumsUrl);
    const result = await response.json();
    return result;
  }
}
