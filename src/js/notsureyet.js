import { GildedRose } from "../src/js/hard";

class AgedBrie extends GildedRose {
  constructor() {
    super() {

    }
  }

  tick() {
    this.quality >= 50 ? this.quality = 50 : this.quality += 1;
  }

}

