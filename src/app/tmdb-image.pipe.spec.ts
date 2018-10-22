import { TmdbImagePipe } from './tmdb-image.pipe';

describe('TmdbImagePipe', () => {
  it('create an instance', () => {
    const pipe = new TmdbImagePipe();
    expect(pipe).toBeTruthy();
  });
  it('transforms image paths', () => {
    expect( new TmdbImagePipe().transform('somefile.jpg')).toEqual('https://image.tmdb.org/t/p/w200/somefile.jpg');
  });
  it('different image size', () => {
    expect( new TmdbImagePipe().transform('somefile.jpg', 500)).toEqual('https://image.tmdb.org/t/p/w500/somefile.jpg');
  });
  it('localhost paths', () => {
    expect( new TmdbImagePipe().transform('http://localhost/somefile.jpg')).toEqual('http://localhost/somefile.jpg');
  });
});
