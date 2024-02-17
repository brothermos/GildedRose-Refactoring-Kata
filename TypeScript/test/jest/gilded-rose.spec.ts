import { GildedRose } from "@/gilded-rose";
const mockItem = [
  {
    name: "Normal Product",
    sellIn: 7,
    quality: 49,
  },
  {
    name: "Backstage passes to a TAFKAL80ETC concert",
    sellIn: 5,
    quality: 49,
  },
  {
    name: "Sulfuras, Hand of Ragnaros",
    sellIn: 1,
    quality: 80,
  },
  {
    name: "Aged Brie",
    sellIn: -7,
    quality: 49,
  },
  {
    name: "Backstage passes to a TAFKAL80ETC concert",
    sellIn: -1,
    quality: 22,
  },
];

describe("Gilded Rose is empty", () => {
  it("should be empty", () => {
    const gildedRose = new GildedRose();
    expect(gildedRose.updateQuality()).toEqual([]);
  });
});

describe("Gilded Rose", () => {
  let gildedRose: GildedRose;

  beforeEach(() => {
    gildedRose = new GildedRose(mockItem);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  describe("normal product", () => {
    it("normal product quality should be decrease by day", () => {
      gildedRose.updateQuality();
      expect(mockItem[0].quality).toEqual(48);
      expect(mockItem[0].sellIn).toEqual(6);
    });
  });

  describe("Backstage passes to a TAFKAL80ETC concert", () => {
    it("should increase quality + 1", () => {
      gildedRose.updateQuality();
      expect(mockItem[1].quality).toEqual(50);
    });
    it("should decrease quality if sellIn < 0", () => {
      gildedRose.updateQuality();
      expect(mockItem[4].quality).toEqual(0);
    });
  });

  describe("Sulfuras, Hand of Ragnaros", () => {
    it("should not change quality", () => {
      gildedRose.updateQuality();
      expect(mockItem[2].quality).toEqual(80);
    });
  });

  describe("Aged Brie", () => {
    it("should increase quality + 1", () => {
      gildedRose.updateQuality();
      expect(mockItem[3].quality).toEqual(50);
    });
  });
});
