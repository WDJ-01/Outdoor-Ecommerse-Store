import tent from '../resources/images/products/tent.jpg'
import pack from '../resources/images/products/pack.jpg'
import hikingboots from '../resources/images/products/hikingboots.jpg'
import fishingrod from '../resources/images/products/fishingrod.jpg'
import fishingreel from '../resources/images/products/fishingreel.jpg'
import campingchair from '../resources/images/products/campingchair.jpg'




const images = {
  tent,
  pack,
  hikingboots,
  fishingrod,
  fishingreel,
  campingchair,
};

function getProductImageByKey(key) {
  return images[key]
}

export default getProductImageByKey