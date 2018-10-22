import { RatingPipe } from './rating.pipe';
import {beforeEach} from 'selenium-webdriver/testing';

describe('RatingPipe', () => {
  const pipe = new RatingPipe();
  // let pipe = null;
  // beforeEach(() => {
  //   pipe = new RatingPipe();
  //   });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('8+ is great', () => {
  expect(pipe.transform(8)).toEqual('great');
  });
  it('7+ is good', () => {
    expect(pipe.transform(7.9)).toEqual('good');
    expect(pipe.transform(7)).toEqual('good');
  });
  it('5.5+ is ok', () => {
    expect(pipe.transform(6.9)).toEqual('ok');
    expect(pipe.transform(5.5)).toEqual('ok');
  });
  it('5.4- is bad', () => {
    expect(pipe.transform(5.4)).toEqual('bad');
    expect(pipe.transform(0.1)).toEqual('bad');
  });
  // it('0 is not rated', () => {
  //   expect(pipe.transform(0)).toEqual('bad');
  // });
  it('undefined is not rated', () => {
    expect(pipe.transform(undefined)).toEqual('');
  });
  it('when showing numbers, the number is returned', () => {
    expect(pipe.transform(7.9, true)).toEqual('7.9');
  });
});
