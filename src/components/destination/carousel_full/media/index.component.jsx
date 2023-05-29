import media1 from './Pic1.jpg'
import media2 from './Pic2.jpg'
import media3 from './Pic3.jpg'
import media4 from './Pic4.jpg'
import media5 from './Pic5.jpg'
export const media = [media1, media2, media3, media4, media5];
const mediaByIndex = (index) => media[index % media.length];
export default mediaByIndex;
