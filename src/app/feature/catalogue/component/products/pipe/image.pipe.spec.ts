import { ImagePipe } from './image.pipe';

describe('ImagePipe', () => {

  let pipe: ImagePipe;

  beforeEach(() => {
    pipe = new ImagePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('test image valid', () => {
    const url = 'www.lider.cl/catalogo/images/whiteLineIcon.svg';
    const urlTransformed = pipe.transform(url);
    expect(urlTransformed).toEqual(`http://${url}`);
  });


  it('test image not valid', () => {
    const url = 'assets/image/noimage.png';
    const urlTransformed = pipe.transform(undefined);
    expect(urlTransformed).toEqual(url);
  });

});
